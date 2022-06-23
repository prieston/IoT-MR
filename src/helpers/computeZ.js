import { calculateSab } from "./ThemeliodiProblimata";
const Xmin = -50;
// const Ymin = -50;
// const Xmax = 50;
const Ymax = 50;
const XZStep = 100 / 99;
const YZStep = 100 / 99;
const zScale = 150;
const zShift = 0;
const DemWidth = 100;

export const posZ = (positionX, positionY, dem) => {
  if (dem.length === 0) {
    return 0;
  }
  let axeZ,
    heightX,
    heightY,
    FHeight1,
    FHeight2,
    dXZ,
    dYZ,
    ipotinousaX,
    ipotinousaY,
    restX_new,
    restY_new,
    IpotinousaDiagwniou1,
    IpotinousaDiagwniou2,
    minIpotinousaX,
    minIpotinousaY,
    slopeX,
    slopeY,
    multX,
    multY,
    finalDXZ,
    finalDYZ,
    percent,
    restX,
    restY,
    axeX,
    axeY,
    intX,
    intY;

  axeX = (calculateSab(0, positionX, 0, Xmin) / XZStep).toFixed(4) - 0;
  axeY = (calculateSab(0, positionY, 0, Ymax) / YZStep).toFixed(4) - 0;
  intX = Math.floor(axeX);
  intY = Math.floor(axeY);
  restX = axeX - intX;
  restY = axeY - intY;
  //   positionAtpoligon = (restX+restY)/2;
  if (restX === 0 && restY === 0) {
    axeZ = intY * DemWidth + intX; //calculate height
    return Number(dem[axeZ][2].toFixed(4));
  }
  if (restX <= 1 - restY) {
    //check X axis

    axeZ = intY * DemWidth + intX; //calculate height
    // console.log(axeZ);
    if (!dem[axeZ] || !dem[axeZ + 1]) return 0;
    dXZ = dem[axeZ][2] - dem[axeZ + 1][2];
    ipotinousaX = Math.sqrt(
      Math.pow(dXZ / zScale - zShift, 2) + Math.pow(XZStep, 2)
    );
    //////
    restX_new = restX + restY;
    IpotinousaDiagwniou2 = Math.sqrt(
      Math.pow(restY * YZStep, 2) + Math.pow(restY * XZStep, 2)
    );
    //////
    minIpotinousaX = ipotinousaX * restX_new;
    slopeX = Math.atan(Math.abs((dXZ / zScale - zShift) / XZStep));
    //  slopeX = Math.atan( (Math.abs(dXZ)/zScale - zShift)/XZStep) ;
    multX = Math.sin(slopeX);

    finalDXZ = minIpotinousaX * multX;
    if (dXZ < 0) {
      heightX = dem[axeZ][2] / zScale - zShift + finalDXZ;
    } else {
      heightX = dem[axeZ][2] / zScale - zShift - finalDXZ;
    }
    //check Y axis

    if (!dem[axeZ] || !dem[axeZ + DemWidth]) return 0;
    dYZ = dem[axeZ][2] - dem[axeZ + DemWidth][2];
    ipotinousaY = Math.sqrt(
      Math.pow(dYZ / zScale - zShift, 2) + Math.pow(YZStep, 2)
    );
    //////
    restY_new = restY + restX;
    IpotinousaDiagwniou1 = Math.sqrt(
      Math.pow(restX * XZStep, 2) + Math.pow(restX * YZStep, 2)
    );
    //////
    minIpotinousaY = ipotinousaY * restY_new;

    slopeY = Math.atan(Math.abs((dYZ / zScale - zShift) / YZStep));
    //  slopeY = Math.atan( Math.abs((dYZ/zScale - zShift)/YZStep) );
    multY = Math.sin(slopeY);

    finalDYZ = minIpotinousaY * multY;
    if (dYZ < 0) {
      heightY = dem[axeZ][2] / zScale - zShift + finalDYZ;
    } else {
      heightY = dem[axeZ][2] / zScale - zShift - finalDYZ;
    }

    percent =
      IpotinousaDiagwniou2 / (IpotinousaDiagwniou1 + IpotinousaDiagwniou2);
    FHeight1 = Math.abs(heightX - heightY) * percent;
    if (heightX - heightY < 0) {
      FHeight2 = heightX + FHeight1;
    } else {
      FHeight2 = heightX - FHeight1;
    }
  } else {
    //check X axis
    axeZ = (intY + 1) * DemWidth + intX + 1; //calculate height
    // console.log(axeZ)
    if (!dem[axeZ] || !dem[axeZ - 1]) return 0;
    dXZ = dem[axeZ][2] - dem[axeZ - 1][2];
    ipotinousaX = Math.sqrt(
      Math.pow(dXZ / zScale - zShift, 2) + Math.pow(XZStep, 2)
    );
    //////
    restX_new = 1 - restX + (1 - restY);
    IpotinousaDiagwniou2 = Math.sqrt(
      Math.pow((1 - restY) * YZStep, 2) + Math.pow((1 - restY) * XZStep, 2)
    );
    //////
    minIpotinousaX = ipotinousaX * restX_new;
    slopeX = Math.atan(Math.abs((dXZ / zScale - zShift) / XZStep));
    //  slopeX = Math.atan( (Math.abs(dXZ)/zScale - zShift)/XZStep) ;
    multX = Math.sin(slopeX);
    finalDXZ = minIpotinousaX * multX;
    if (dXZ < 0) {
      heightX = dem[axeZ][2] / zScale - zShift + finalDXZ;
    } else {
      heightX = dem[axeZ][2] / zScale - zShift - finalDXZ;
    }
    //check Y axis
    if (!dem[axeZ] || !dem[axeZ - DemWidth]) return 0;
    dYZ = dem[axeZ][2] - dem[axeZ - DemWidth][2];
    ipotinousaY = Math.sqrt(
      Math.pow(dYZ / zScale - zShift, 2) + Math.pow(YZStep, 2)
    );
    //////
    restY_new = 1 - restY + (1 - restX);
    IpotinousaDiagwniou1 = Math.sqrt(
      Math.pow((1 - restX) * XZStep, 2) + Math.pow((1 - restX) * YZStep, 2)
    );
    //////
    minIpotinousaY = ipotinousaY * restY_new;

    slopeY = Math.atan(Math.abs((dYZ / zScale - zShift) / YZStep));
    //  slopeY = Math.atan( Math.abs((dYZ/zScale - zShift)/YZStep) );
    multY = Math.sin(slopeY);

    finalDYZ = minIpotinousaY * multY;
    if (dYZ < 0) {
      heightY = dem[axeZ][2] / zScale - zShift + finalDYZ;
    } else {
      heightY = dem[axeZ][2] / zScale - zShift - finalDYZ;
    }
    percent =
      IpotinousaDiagwniou2 / (IpotinousaDiagwniou1 + IpotinousaDiagwniou2);
    FHeight1 = Math.abs(heightX - heightY) * percent;
    if (heightX - heightY < 0) {
      FHeight2 = heightX + FHeight1;
    } else {
      FHeight2 = heightX - FHeight1;
    }
  }
  // console.log(FHeight2)
  return Number(FHeight2.toFixed(4));
};
