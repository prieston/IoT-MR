import {
  ThemeliodesProblima_1,
  ThemeliodesProblima_2,
  CalculateZ
} from "./ThemeliodiProblimata";
// import { AnimationMixer } from "three";
import { posZ } from "./computeZ";

const gradToRad = 63.661977236758;
export const CalculateTransformation = (timeDelta, model) => {
  const Xa = Number(model.object.position.x.toFixed(4));
  const Ya = Number(model.object.position.z.toFixed(4));
  const action =
    window.mergin_mode.selected.object?.uuid == model.id
      ? model.actions.onSelect
      : model.actions.onLoad;
  const runtimeInfo =
    window.mergin_mode.selected.object?.uuid == model.id
      ? model.selectedRuntimeInfo
      : model.runtimeInfo;

  //if action is onSelect target camera
  if (model.actions.onSelect === action) {
    const Gab = Number(
      ThemeliodesProblima_2(
        model.object.position.x,
        model.object.position.z,
        window.mergin_mode.camera.position.x,
        window.mergin_mode.camera.position.z
      ).Gab
    );
    const rotate = Gab ? Gab / gradToRad : 0;
    model.object.rotation.set(
      model.rotation[0],
      model.rotation[1] + rotate,
      model.rotation[2]
    );
  }

  const currentAnimation = action.animations[runtimeInfo.animationIndex];

  runtimeInfo.duration += timeDelta;
  runtimeInfo.lastUpdate += timeDelta;
  if (currentAnimation.duration) {
    if (runtimeInfo.duration >= currentAnimation.duration / 1000) {
      //check if animation has other path to animate
      runtimeInfo.duration = 0;
      runtimeInfo.lastUpdate = 0;
      if (action.animations.length - 1 > runtimeInfo.animationIndex) {
        runtimeInfo.animationIndex++;
        runtimeInfo.pathIndex = 0;
        const mixer = runtimeInfo.mixer;
        mixer.stopAllAction();

        mixer
          .clipAction(
            model.object.children[0].animations.filter(animation => {
              return (
                animation.name ==
                action.animations[runtimeInfo.animationIndex].name
              );
            })[0]
          )
          .setDuration((currentAnimation.singleLoopDuration || 1000) / 1000)
          .play();
      }
      // restart animation
      else {
        runtimeInfo.animationIndex = 0;
        runtimeInfo.pathIndex = 0;
        const mixer = runtimeInfo.mixer;
        mixer.stopAllAction();
        mixer
          .clipAction(
            model.object.children[0].animations.filter(animation => {
              return (
                animation.name ==
                action.animations[runtimeInfo.animationIndex].name
              );
            })[0]
          )
          .setDuration((currentAnimation.singleLoopDuration || 1000) / 1000)
          .play();
        // runtimeInfo.mixer = mixer;
      }
    }
    return false;
  }

  const currentPath = currentAnimation.path[runtimeInfo.pathIndex];
  const Xb = Number((currentPath[0] - window.mergin_mode.center[0]).toFixed(4));
  const Yb = Number((currentPath[2] - window.mergin_mode.center[2]).toFixed(4));

  const Sab = ((timeDelta * currentAnimation.speed) / 60 / 60) * 1000; //distance in meters per second (50km/h)
  const start = currentAnimation.path[runtimeInfo.pathIndex - 1]
    ? currentAnimation.path[runtimeInfo.pathIndex - 1]
    : currentAnimation.path[runtimeInfo.pathIndex];
  const { Gab, Sab: TotalSab } = ThemeliodesProblima_2(
    start[0] - window.mergin_mode.center[0],
    start[2] - window.mergin_mode.center[2],
    Xb,
    Yb
  );
  if (
    (Gab <= 100 && Xa >= Xb && Ya >= Yb) ||
    (Gab > 100 && Gab <= 200 && Xa >= Xb && Ya <= Yb) ||
    (Gab > 200 && Gab <= 300 && Xa <= Xb && Ya <= Yb) ||
    (Gab > 300 && Xa <= Xb && Ya >= Yb)
  ) {
    //check if animation has other path to animate
    if (currentAnimation.path.length - 1 > runtimeInfo.pathIndex) {
      runtimeInfo.pathIndex++;
      runtimeInfo.duration = 0;
      runtimeInfo.lastUpdate = 0;
    }
    //check if model has other animations
    else if (action.animations.length - 1 > runtimeInfo.animationIndex) {
      runtimeInfo.animationIndex++;
      runtimeInfo.pathIndex = 0;
      runtimeInfo.duration = 0;
      runtimeInfo.lastUpdate = 0;
      const mixer = runtimeInfo.mixer;
      mixer.stopAllAction();

      mixer
        .clipAction(
          model.object.children[0].animations.filter(animation => {
            return (
              animation.name ==
              action.animations[runtimeInfo.animationIndex].name
            );
          })[0]
        )
        .setDuration((currentAnimation.singleLoopDuration || 1000) / 1000)

        .play();
      // runtimeInfo.mixer = mixer;
    }
    // restart animation
    else {
      runtimeInfo.animationIndex = 0;
      runtimeInfo.pathIndex = 0;
      runtimeInfo.duration = 0;
      runtimeInfo.lastUpdate = 0;
      const mixer = runtimeInfo.mixer;
      mixer.stopAllAction();
      mixer
        .clipAction(
          model.object.children[0].animations.filter(animation => {
            return (
              animation.name ==
              action.animations[runtimeInfo.animationIndex].name
            );
          })[0]
        )
        .setDuration((currentAnimation.singleLoopDuration || 1000) / 1000)

        .play();
      // runtimeInfo.mixer = mixer;
    }

    const newPosition = action.animations[runtimeInfo.animationIndex].path[
      runtimeInfo.pathIndex - 1
    ]
      ? action.animations[runtimeInfo.animationIndex].path[
          runtimeInfo.pathIndex - 1
        ]
      : action.animations[runtimeInfo.animationIndex].path[
          runtimeInfo.pathIndex
        ];
    // const rotate = Gab ? Gab / gradToRad : 0;
    return {
      position: newPosition.reduce(
        (a, b, i) => [...a, b - window.mergin_mode.center[i]],
        []
      )
    };
  }

  const posXY = ThemeliodesProblima_1(Xa, Ya, Sab, Gab);
  let newZ;
  if (currentAnimation.dynamicHeight) {
    runtimeInfo.lastUpdate = 0;
    newZ = CalculateZ(
      { x: posXY.Xb, z: posXY.Yb, y: model.object.position.y },
      window.mergin_mode.world[window.mergin_mode.currentWorldId].filter(
        model => model.ground == true
      )[0].object,
      3
    );
  } else {
    const nextPath = currentAnimation.path[runtimeInfo.pathIndex];
    const Zdif = nextPath[1] - start[1];
    const currentSab = ThemeliodesProblima_2(
      start[0] - window.mergin_mode.center[0],
      start[2] - window.mergin_mode.center[2],
      model.object.position.x,
      model.object.position.z
    ).Sab;
    const percentage = currentSab / TotalSab;
    // newZ = model.object.position.y;
    newZ = start[1] - window.mergin_mode.center[1] + Zdif * percentage;
  }

  // if (Math.abs(newZ) - Math.abs(model.object.position.y) > 0.3) {
  //   console.log(newZ.toFixed(2));
  //   debugger;
  // }
  const rotate = Gab ? Gab / gradToRad : 0;
  return {
    position: [posXY.Xb, newZ, posXY.Yb],
    rotation: [model.rotation[0], model.rotation[1] + rotate, model.rotation[2]]
  };
};

export const CalculateDeltaRotation = (
  Xa,
  Ya,
  Za,
  Xb,
  Yb,
  Zb,
  Gab,
  Sab,
  rotX,
  rotY
) => {
  const DZ = Zb - Za;
  const XYkathetis = ThemeliodesProblima_1(Xb, Yb, Sab, Gab + 100);
  const Xkathetis = XYkathetis.Xb;
  const Ykathetis = XYkathetis.Yb;
  const Zkathetis = posZ(Xkathetis, Ykathetis);
  const DZkathetis = Zb - Zkathetis;

  let RotationX = 0;
  let RotationY = 0;

  if (DZ < 0 || DZ > 0) {
    RotationX = Math.atan(DZ / Sab);
    RotationY = Math.atan(DZkathetis / Sab);
  }

  const DRotationX = rotX - RotationX;
  const DRotationY = rotY - RotationY;

  return {
    x: Number(DRotationX),
    y: Number(DRotationY)
  };
};
