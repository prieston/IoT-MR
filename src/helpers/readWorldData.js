import { fromLonLat } from "ol/proj.js";
import { loadGLTFModel, loadFBXModel } from "../helpers/loaders";
import * as THREE from "three";

const loader = {
  gltf: loadGLTFModel,
  glb: loadGLTFModel,
  fbx: loadFBXModel,
};
export default async (worldId) => {
  const towerlocationConvert = fromLonLat([40.626374, 22.948324, 15.25]);
  // const treelocationConvert = fromLonLat([40.62626, 22.947929, 15.25]);
  // const userConvert = fromLonLat([40.626288, 22.947957, 15.25]);

  function get_url_extension(url) {
    return url
      .split(/[#?]/)[0]
      .split(".")
      .pop()
      .trim();
  }
  const readWorldData = (world) => {
    window.mergin_mode.center = world.meta.coordinates;

    const data = world.content;
    //initialize interactions
    const { renderer, scene, camera } = window.mergin_mode;

    const loadings = [];
    if (window.mergin_mode.world[world.id]) {
      return true;
    }
    window.mergin_mode.world[world.id] = [];
    for (const [index, record] of data.entries()) {
      if (["virtual", "mapped"].indexOf(record.type) !== -1) {
        loadings.push(
          loader[get_url_extension(record.url)](
            [{ url: record.url }],
            record,
            index
          )
        );
        window.mergin_mode.world[world.id].push(record);
      }
    }
    return Promise.all(loadings)
      .then((models) => {
        models.forEach((model) => {
          window.mergin_mode.world[window.mergin_mode.currentWorldId][
            model.referenceIndex
          ].id = model.uuid;
          window.mergin_mode.world[window.mergin_mode.currentWorldId][
            model.referenceIndex
          ].object = model.object;
          window.mergin_mode.scene.add(model.object);
          // if (window.mergin_mode.world[model.referenceIndex].visible == false) {
          //   model.object.visible = false;
          // }
          model.object.traverse((child) => {
            if (child.isMesh) {
              if (
                window.mergin_mode.world[window.mergin_mode.currentWorldId][
                  model.referenceIndex
                ].visible === false
              ) {
                child.material.opacity = 0;
                child.material.transparent = true;
              }
              //hide model visibility is set to false

              child.material.flatShading = false;
              child.geometry.computeVertexNormals();
              // child.material = window.mergin_mode.selected.material[child.uuid];
            }
          });
          //check for animations and create the mixers
          const actions =
            window.mergin_mode.world[window.mergin_mode.currentWorldId][
              model.referenceIndex
            ].actions || {};

          if ((actions.onLoad || {}).animations) {
            const anim = actions.onLoad.animations[0];
            const startAt = anim.startAt || 0;
            const mixer = new THREE.AnimationMixer(model.object);
            const theAnimation = window.mergin_mode.world[
              window.mergin_mode.currentWorldId
            ][model.referenceIndex].object.children[0].animations.filter(
              (animation) => {
                return animation.name === anim.name;
              }
            )[0];
            setTimeout(() => {
              mixer
                .clipAction(theAnimation)
                .setDuration((anim.singleLoopDuration || 1000) / 1000)
                .play();
            }, startAt);

            window.mergin_mode.world[window.mergin_mode.currentWorldId][
              model.referenceIndex
            ].runtimeInfo = {
              animationIndex: 0,
              pathIndex: 0,
              duration: 0,
              lastUpdate: 0,
              mixer,
            };
          }
          if ((actions.onSelect || {}).animations) {
            const mixer = new THREE.AnimationMixer(model.object);
            const theAnimation = window.mergin_mode.world[
              window.mergin_mode.currentWorldId
            ][model.referenceIndex].object.children[0].animations.filter(
              (animation) => {
                return animation.name === actions.onSelect.animations[0].name;
              }
            )[0];
            mixer
              .clipAction(theAnimation)
              .setDuration(
                (actions.onSelect.animations[0].singleLoopDuration || 1000) /
                  1000
              )
              .play();
            window.mergin_mode.world[window.mergin_mode.currentWorldId][
              model.referenceIndex
            ].selectedRuntimeInfo = {
              animationIndex: 0,
              pathIndex: 0,
              duration: 0,
              lastUpdate: 0,
              mixer,
            };
          }
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
  readWorldData(window.mergin_mode.worlds.filter((w) => w.id === worldId)[0]);
};
