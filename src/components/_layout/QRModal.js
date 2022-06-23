import React, { useRef, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import QrReader from "react-qr-reader";
import readWorldData from "../../helpers/readWorldData";
import * as THREE from "three";

export default function QRModal(props) {
  const [state, setState] = React.useState(true);

  const handleScan = (data) => {
    //case scan data
    if (data) {
      const d = JSON.parse(data);
      const w = window.mergin_mode.worlds.filter((w) => w.id == d.id)[0];
      //case the world matches
      if (w) {
        if (
          window.mergin_mode.currentWorldId &&
          w.id !== window.mergin_mode.currentWorldId
        ) {
          window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
            (o) => {
              if (o.object) {
                o.object.visible = false;
              }
            }
          );
        }
        window.mergin_mode.currentWorldId = w.id;
        window.mergin_mode.center = w.meta.coordinates;
        if (window.mergin_mode.world.hasOwnProperty(w.id)) {
          window.mergin_mode.world[window.mergin_mode.currentWorldId].map(
            (o) => {
              if (o.object) {
                o.object.visible = true;
              }
            }
          );
        } else {
          (async function() {
            await readWorldData(w.id);
          })();
        }
        window.mergin_mode.scene.position.set(
          window.mergin_mode.center[0] - d.position.x,
          window.mergin_mode.center[1] - d.position.z,
          window.mergin_mode.center[2] - d.position.y
        );

        const dir = new THREE.Vector3();
        const sph = new THREE.Spherical();
        window.mergin_mode.camera.getWorldDirection(dir);

        sph.setFromVector3(dir);
        let heading = (360 - THREE.Math.radToDeg(sph.theta) - 180).toFixed(0);
        if (heading == 360) {
          heading = 0;
        }

        if (
          heading != d.heading &&
          typeof window.mergin_mode.controls.alphaOffset !== "undefined"
        ) {
          window.mergin_mode.controls.alphaOffset -= Number(
            (((d.heading - heading) * Math.PI) / 180).toFixed(4)
          );
        }
        window.mergin_mode.controls.update();
        props.onClose();
      }
    }
  };
  const handleScanError = (err) => {};
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 25,
        }}
      >
        <i style={{ fontSize: 70 }} className="fas fa-qrcode"></i>
        <h2
          style={{
            marginLeft: 24,
            fontWeight: 900,
            textTransform: "uppercase",
            color: "#606059",
            letterSpacing: 5,
          }}
          id="simple-modal-title"
        >
          QR Code Scanner
        </h2>
      </div>
      <p id="simple-modal-description" style={{ flex: 1 }}>
        <div style={{ height: "calc(100% - 110px)", position: "relative" }}>
          <div className="scan-tip">
            <QrReader
              delay={300}
              onError={handleScanError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p>or type the id of the observation point</p>
          <input
            onChange={(e) =>
              setState({ ...state, observationId: e.target.value })
            }
          />
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Button
              style={{
                fontSize: "18px",
                // background: "#2f72e8",
                color: "#313129",
                fontWeight: 600,
              }}
              onClick={() => {
                const observationId = state.observationId;
                const data = (window.mergin_mode.worlds?.filter(
                  (w) => w.id == window.mergin_mode.currentWorldId
                ) || [])[0].meta.observationPoints.filter((op) => {
                  return op.pointId == observationId;
                });
                handleScan(JSON.stringify(data[0]));
              }}
            >
              Submit
            </Button>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Button
            style={{
              fontSize: "18px",
              // background: "#2f72e8",
              color: "#313129",
              fontWeight: 600,
            }}
            onClick={props.onClose}
          >
            Close
          </Button>
        </div>
      </p>
    </React.Fragment>
  );
}
