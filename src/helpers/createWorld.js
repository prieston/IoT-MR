import * as THREE from "three";
// import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { DeviceOrientationControls } from "three/examples/jsm/controls/DeviceOrientationControls.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { CalculateTransformation } from "./CalculateDeltaPosition";
import { calculateSab } from "./ThemeliodiProblimata";
import TWEEN from "@tweenjs/tween.js";
import { VRButton } from "../components/_layout/VRButton.js";

// var modelName = "models/gltf/" + model.name + ".glb";
const degtorad = Math.PI / 180; // Degree-to-Radian conversion
const mobileCheck = function() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
const isMobile = mobileCheck();
GLTFLoader.prototype.load2 = function(files, callback) {
  const scope = this;
  const file = files[0];

  const reader = new FileReader();

  reader.onload = function(event) {
    if (event.target.readyState === 2 || event.target.status === 0) {
      scope.parse(
        event.target.result || event.target.responseText,
        "",
        callback
      );
    } else {
    }
  };
  reader.readAsArrayBuffer(file);
};
FBXLoader.prototype.load2 = function(files, callback) {
  const scope = this;
  const file = files[0];

  const reader = new FileReader();

  reader.onload = function(event) {
    if (event.target.readyState === 2 || event.target.status === 0) {
      const geometry = scope.parse(
        event.target.result || event.target.responseText
      );

      if (callback) callback(geometry);
    } else {
      // scope.dispatchEvent({type: 'error', message: 'Couldn\'t load URL [' + url + ']', response: event.target.readyState});
    }
  };

  reader.readAsArrayBuffer(file);
};

export default function createWorld(
  camera,
  controls,
  scene,
  renderer,
  pointer,
  partials,
  loaders,
  rendererContainer,
  mixer,
  selectModel
) {
  loaders.FBXLoader = FBXLoader;
  loaders.GLTFLoader = GLTFLoader;
  const clock = new THREE.Clock();

  const host = document.getElementById("three-map");

  const generateTerrain = (g /*,m, e*/) => {
    const pos = g.getAttribute("position");
    const pa = pos.array;

    for (let j = 2, i = 0; j < pa.length; j += 3, i++) {
      pa[j] = 0;
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
  };

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.xr.enabled = true;
  renderer.physicallyCorrectLights = true;
  renderer.gammaOutput = true;

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(host.clientWidth, host.clientHeight);
  renderer.sortObjects = false;

  host.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(
    45,
    host.clientWidth / host.clientHeight,
    0.01,
    1000
  );
  camera.setFocalLength = 26;
  window.mergin_mode.realities = {
    virtual: () => {
      renderer.setClearColor("#4285f4", 1);
      //remove mixed objects
      scene.background = undefined;
      // if (!mobileCheck()) {
      //   camera.position.set(-15.08, +1.7, +52.64);
      // }
    },
    augmented: () => {
      // scene.background = texture;

      renderer.setClearColor(0x000000, 0);
      // if (!mobileCheck()) {
      //   camera.position.set(-15.08, +1.7, +52.64);
      // }
    },
    mixed: () => {
      const video = document.getElementsByTagName("video")[0];
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBFormat;
      scene.background = texture;
      // scene.position.set(0, -1.7, 0);
      renderer.setClearColor("#4285f4", 1);
      // renderer.setClearColor(0x000000, 0);
      // if (!mobileCheck()) {
      //   // scene.position.set(0, 0, 0);
      //   // camera.position.set(-15.08, +1.7, +52.64);
      // }
    },
    mixedMRH: () => {
      // scene.background = undefined;
      // scene.position.set(0, 0, 0);
      renderer.setClearColor(0x000000, 0);
      // if (!mobileCheck()) {
      //   // scene.position.set(0, 0, 0);
      //   // camera.position.set(-15.08, +1.7, +52.64);
      // }
    },
  };
  window.mergin_mode.realities.virtual();
  // camera.up.set(0, 0, 1);
  if (mobileCheck()) {
    controls = new DeviceOrientationControls(camera);
  } else {
    controls = new OrbitControls(camera, renderer.domElement);
  }
  controls.enableDamping = false; // an animation loop is required when either damping or auto-rotation are enabled
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 1;
  controls.maxDistance = 1000000;
  // controls.maxPolarAngle = Math.PI / 2;
  controls.rotateSpeed = 0.8;
  controls.panSpeed = 0.8;
  controls.zoomSpeed = 0.8;

  // world
  const geometry = new THREE.PlaneBufferGeometry(100, 100, 99, 99);

  generateTerrain(geometry);

  const material = new THREE.MeshPhongMaterial({
    wireframe: true,
    color: "#222",
    side: THREE.DoubleSide,
  });

  material.flatShading = true;

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 0, 0);
  plane.castShadow = false;
  plane.receiveShadow = false;
  plane.geometry.rotateX(Math.PI / 2);

  // scene.add(plane);

  const gridHelper = new THREE.GridHelper(1000, 100);
  // gridHelper.geometry.rotateX(Math.PI / 2);

  // // scene.add(gridHelper);
  const light = new THREE.AmbientLight(0xffffff, 1); // soft white light
  light.channel = 123;
  scene.add(light);

  // const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
  // hemiLight.color.setHSL(0.6, 0.5, 0.75);
  // hemiLight.groundColor.setHSL(0.095, 0.5, 0.5);
  // hemiLight.position.set(0, 0, 50);
  // scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  window.dirLight = dirLight;
  dirLight.position.set(20, 10, 20);
  dirLight.name = "dirlight";
  dirLight.shadowCameraVisible = true;

  // const helper = new THREE.DirectionalLightHelper(dirLight, 5);
  // scene.add(helper);
  scene.add(dirLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
  window.dirLight1 = dirLight1;
  dirLight1.position.set(-17, 10, -31);
  dirLight1.name = "dirlight1";
  dirLight1.shadowCameraVisible = true;
  // const helper1 = new THREE.DirectionalLightHelper(dirLight1, 2);
  // scene.add(helper1);
  scene.add(dirLight1);

  // dirLight.castShadow = false;

  pointer = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    new THREE.MeshBasicMaterial({ color: "red" })
  );

  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(150, 32, 32),
    new THREE.MeshBasicMaterial({
      opacity: 0,
      transparent: true,
      alphaTest: 0.05,
      side: THREE.DoubleSide,
    })
  );
  scene.add(sky);

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const getParentElement = (object) => {
    if (
      !object ||
      !window.mergin_mode.world[window.mergin_mode.currentWorldId]
    ) {
      return false;
    }
    const allIds = window.mergin_mode.world[
      window.mergin_mode.currentWorldId
    ].map((obj) => obj.id);
    if (allIds.indexOf(object.uuid) !== -1) {
      return object;
    }
    return getParentElement(object.parent);
  };
  const moved = false;

  function onMouseClick(event) {
    try {
      if (window.mergin_mode.listeners.mouseMoved) return true;
      if (window.mergin_mode.selected.object) {
        scene.remove(window.mergin_mode.selected.objectHelper);
        // window.mergin_mode.selected.object.traverse(child => {
        //   if (child.isMesh) {
        //     child.material.color.setHex(
        //       window.mergin_mode.selected.material[child.uuid]
        //     );
        //     // child.material = window.mergin_mode.selected.material[child.uuid];
        //   }
        // });
        window.mergin_mode.selected.object = null;
        window.mergin_mode.selected.material = null;
      }
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x =
        (((event.clientX || event.changedTouches[0].clientX) - rect.left) /
          rect.width) *
          2 -
        1;
      mouse.y =
        -(
          ((event.clientY || event.changedTouches[0].clientY) - rect.top) /
          rect.height
        ) *
          2 +
        1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      let obj;
      for (const record of intersects) {
        obj = getParentElement(record?.object);
        if (obj) {
          //check if obj is selectable
          const referenceObj = window.mergin_mode.world[
            window.mergin_mode.currentWorldId
          ].filter((model) => model.id == obj.uuid)[0];
          if (referenceObj.selectable !== false) {
            break;
          }
        }
      }
      if (!obj) {
        selectModel(null);
        return false;
      }
      const material = new THREE.MeshPhongMaterial({
        color: "#b34f0b",
        side: THREE.DoubleSide,
      });
      window.mergin_mode.selected.object = obj;
      window.mergin_mode.selected.objectHelper = new THREE.BoxHelper(obj);
      window.mergin_mode.selected.objectHelper.material.color.set(0xffffff);
      scene.add(window.mergin_mode.selected.objectHelper);
      // obj.traverse(child => {
      //   if (child.isMesh) {
      //     window.mergin_mode.selected.material[
      //       child.uuid
      //     ] = child.material.color.getHex();
      //     child.material.color.setHex(0xff0000);
      //   }
      // });
      scene.add(window.mergin_mode.selected.objectHelper);
      const model = window.mergin_mode.world[
        window.mergin_mode.currentWorldId
      ].filter((model) => model.id == obj.uuid)[0];
      const runtimeInfo = model.selectedRuntimeInfo;
      if (runtimeInfo) {
        runtimeInfo.animationIndex = 0;
        runtimeInfo.pathIndex = 0;
        runtimeInfo.duration = 0;
        const mixer = new THREE.AnimationMixer(obj);
        mixer
          .clipAction(
            obj.animations.filter((animation) => {
              return (
                animation.name ==
                model.actions.onSelect.animations[
                  model.selectedRuntimeInfo.animationIndex
                ].name
              );
            })[0]
          )
          .setDuration(
            (model.actions.onSelect.animations[
              model.selectedRuntimeInfo.animationIndex
            ].singleLoopDuration || 1000) / 1000
          )
          .play();
        runtimeInfo.mixer = mixer;
      }
      selectModel(obj.uuid);
    } catch (e) {
      console.error(e);
    }
  }

  function onWindowResize() {
    camera.aspect = host.clientWidth / host.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(host.clientWidth, host.clientHeight);
  }
  function animate() {
    // requestAnimationFrame(animate);
    renderer.setAnimationLoop(function() {
      // if (controls.autoRotate) {
      controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
      // }
      render();
    });
  }
  animate();
  function render() {
    // if (!mobileCheck()) {
    TWEEN.update();
    // }
    renderer.render(scene, camera);
    if (!window.mergin_mode.world[window.mergin_mode.currentWorldId]) {
      return true;
    }
    const delta = clock.getDelta();
    window.mergin_mode.world[window.mergin_mode.currentWorldId].forEach(
      (worldModel) => {
        if (worldModel.actions) {
          const runtimeInfo =
            window.mergin_mode.selected.object?.uuid == worldModel.id
              ? worldModel.selectedRuntimeInfo
              : worldModel.runtimeInfo;
          if (runtimeInfo) {
            runtimeInfo.mixer.update(delta);
          }
        }
      }
    );
    window.mergin_mode.world[window.mergin_mode.currentWorldId].forEach(
      (model) => {
        if (
          model.runtimeInfo &&
          model.actions?.onLoad?.animations &&
          model.object
        ) {
          const transormation = CalculateTransformation(delta, model);
          if (transormation) {
            if (transormation.position) {
              model.object.position.set(...transormation.position);
            }
            if (transormation.rotation) {
              //smooth rotation
              if (
                Math.abs(transormation.rotation[1] - model.object.rotation.y) >
                  Math.PI / 2 ||
                model.smoothRotation == false
              ) {
                model.object.rotation.set(...transormation.rotation);
              } else {
                new TWEEN.Tween(model.object.rotation)
                  .to(
                    {
                      x: transormation.rotation[0],
                      y: transormation.rotation[1],
                      z: transormation.rotation[2],
                    },
                    100
                  )
                  .easing(TWEEN.Easing.Quadratic.InOut)
                  .start();
              }
            }
          }
        }
      }
    );
    if (window.mergin_mode.selected.object) {
      window.mergin_mode.selected.objectHelper.update();
      // window.mergin_mode.selected.objectHelper.position.set(
      //   window.mergin_mode.selected.object.position
      // );
    }
  }

  window.addEventListener("resize", onWindowResize, false);
  document.getElementById("three-map").addEventListener("click", onMouseClick);

  // document.getElementById("three-map").addEventListener("mousedown", () => {
  //   const onMove = () => {
  //     window.mergin_mode.listeners.mouseMoved = true;
  //   };

  //   const onUp = e => {
  //     if (!window.mergin_mode.listeners.mouseMoved) {
  //       onMouseClick(e);
  //     }
  //     window.mergin_mode.listeners.mouseMoved = false;
  //     document.getElementById("three-map").removeEventListener("mouseup", onUp);
  //     document
  //       .getElementById("three-map")
  //       .removeEventListener("mousemove", onMove);
  //   };

  //   document.getElementById("three-map").addEventListener("mousemove", onMove);
  //   document.getElementById("three-map").addEventListener("mouseup", onUp);
  // });

  // document.getElementById("three-map").partials = {
  //   plane,
  //   pointer,
  //   sky,
  //   gridHelper
  // };
  VRButton.createButton(renderer, window.vrh, "immersive-vr", scene, camera);
  VRButton.createButton(renderer, window.mrh, "immersive-ar", scene, camera);
  // ARButton.createButton(renderer, window.mrh);

  // document.getElementById("three-map").addEventListener("mousedown", event => {
  //   if (event.which !== 1) return false;
  //   const mouse = new THREE.Vector2();
  //   const raycaster = new THREE.Raycaster();
  //   const rect = renderer.domElement.getBoundingClientRect();
  //   mouse.x =
  //     (((event.clientX || event.changedTouches[0].clientX) - rect.left) /
  //       rect.width) *
  //       2 -
  //     1;
  //   mouse.y =
  //     -(
  //       ((event.clientY || event.changedTouches[0].clientY) - rect.top) /
  //       rect.height
  //     ) *
  //       2 +
  //     1;

  //   raycaster.setFromCamera(mouse, camera);
  //   const intersects = raycaster.intersectObjects(scene.children, true);
  //   window.positions = window.positions || [];
  //   if (!intersects[0]) return;
  //   window.positions.push([
  //     (window.mergin_mode.center[0] + intersects[0].point.x).toFixed(2) - 0,
  //     (window.mergin_mode.center[1] + intersects[0].point.y).toFixed(2) - 0,
  //     (window.mergin_mode.center[2] + intersects[0].point.z).toFixed(2) - 0
  //   ]);
  // });
  return {
    plane,
    camera,
    controls,
    scene,
    renderer,
    pointer,
    partials,
    loaders,
    onWindowResize,
  };
}
