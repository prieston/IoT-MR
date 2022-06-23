import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";

import { DescriptiveDataListener } from "../../helpers/listeners";
import * as THREE from "three";
import { fromLonLat } from "ol/proj.js";
import ActionButton from "../_layout/ActionButton";
import Modal from "../_layout/Modal";
import WorldItem from "../_layout/WorldItem";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import CropFreeIcon from "@material-ui/icons/CropFree";
import QRModal from "../_layout/QRModal";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import ControlCameraIcon from "@material-ui/icons/ControlCamera";
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
// import ArrowBackIcon from "@material-ui/icons/ArrowBack";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Joystick } from "react-joystick-component";
const direction = new THREE.Vector3();

const Controls = (props) => {
  const sliderHelperRef = useRef();
  const containerRef = useRef();
  const [state, setState] = useState({
    geolocation: false,
    calibration: false,
  });
  const [modalData, setModalData] = useState(null);
  const [infoState, setInfoState] = useState({
    position: { x: 0, y: 0, z: 0 },
    heading: [0],
  });

  const fheight = useRef({
    height: null,
    movementY: null,
    previousTouchY: null,
    moved: false,
  });

  const [showInfo, setShowInfo] = useState(true);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      window.document.body.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
        );
      });
    } else {
      document.exitFullscreen();
    }
  };

  const worldActions =
    window.mergin_mode.currentWorldId !== 0 &&
    window.mergin_mode.worlds.filter(
      (world) => window.mergin_mode.currentWorldId === world.id
    )[0]?.actions;
  React.useEffect(() => {
    if (state.geolocation) {
      let id, target, options;

      function success(position) {
        if (!window.mergin_mode.camera.position) return false;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const newPos = fromLonLat([latitude, longitude, 0]);
        const cameraX = Number(
          (newPos[0] - window.mergin_mode.center[0]).toFixed(4)
        );
        const cameraZ = Number(window.mergin_mode.camera.position.y.toFixed(4));
        const cameraY = Number(
          (newPos[1] - window.mergin_mode.center[2]).toFixed(4)
        );
        if (Math.abs(cameraX) > 1000 || Math.abs(cameraY) > 1000) {
          const distance = Math.sqrt(
            Math.pow(cameraX, 2) + Math.pow(cameraY, 2)
          );
          alert(
            `Your location is to far from the virtual world. You are ${distance.toFixed(
              2
            )} meter far away.`
          );
          setState({ ...state, geolocation: false });
          navigator.geolocation.clearWatch(id);
          return true;
        }
        window.mergin_mode.camera.position.set(cameraX, cameraZ, cameraY);
      }

      function error(err) {
        console.warn("ERROR(" + err.code + "): " + err.message);
      }

      target = {
        latitude: 0,
        longitude: 0,
      };

      options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      };

      id = navigator.geolocation.watchPosition(success, error, options);
    }
  }, [state.geolocation]);
  React.useEffect(() => {
    // if (typeof window.mergin_mode.controls.alphaOffset !== "undefined") {
    //   window.mergin_mode.controls.alphaOffset = -Math.PI / 2;
    // }

    setInterval(() => {
      if (!window.mergin_mode.camera.position) return false;
      const { x, y, z } = window.mergin_mode.camera.position;
      const dir = new THREE.Vector3();
      const sph = new THREE.Spherical();
      window.mergin_mode.camera.getWorldDirection(dir);

      sph.setFromVector3(dir);
      let heading = (360 - THREE.Math.radToDeg(sph.theta) - 180).toFixed(0);
      if (heading == 360) {
        heading = 0;
      }
      const [cx, cy, cz] = window.mergin_mode.center;
      setInfoState({
        position: {
          x: (cx + x).toFixed(2) + "m",
          y: (cz + z).toFixed(2) + "m",
          z: (cy + y).toFixed(2) + "m",
        },
        heading: heading + "deg",
      });
    }, 1000);
  }, []);
  const [locomotionMode, setLocomotionMode] = useState("Adjust");
  const move = useRef();
  const moveInterval = useRef();
  const handleMove = (data) => {
    if (locomotionMode == "Adjust") {
      window.mergin_mode.controls.alphaOffset -= (0.001 * data.x) / 50;
    } else {
      if (move.current !== "FORWARDS" && data.y > 0) {
        move.current = "FORWARDS";
        clearInterval(moveInterval.current);
        moveInterval.current = setInterval(() => {
          eventOrLoopOrSomething(0.1);
        }, 60);
      }
      if (move.current !== "BACKWARDS" && data.y < 0) {
        move.current = "BACKWARDS";
        clearInterval(moveInterval.current);
        moveInterval.current = setInterval(() => {
          eventOrLoopOrSomething(-0.1);
        }, 60);
      }
    }
  };
  function eventOrLoopOrSomething(speed) {
    window.mergin_mode.camera.getWorldDirection(direction);
    window.mergin_mode.camera.position.addScaledVector(direction, speed);
  }
  const handleStop = () => {
    clearInterval(moveInterval.current);
  };
  // const boxStyle = {
  //   background: "rgba(0,0,0,0.7)",
  //   color: "white",
  //   padding: "12px",
  //   borderRadius: "100%",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   cursor: "pointer",
  // };

  return (
    <div id="controls">
      <img
        id="logo"
        width={120}
        height={(120 * 469) / 640}
        src={process.env.PUBLIC_URL + "/logo-transparent.png"}
      />

      <div id="actions-menu">
        <ActionButton
          actions={[
            {
              icon: (
                <div
                  style={
                    !props.renderVideo
                      ? {
                          pointerEvents: "none",
                        }
                      : {}
                  }
                  onClick={() =>
                    setModalData(
                      <QRModal
                        onClose={(data) => {
                          setModalData(null);
                        }}
                      />
                    )
                  }
                >
                  <i style={{ fontSize: 18 }} className="fas fa-qrcode"></i>
                </div>
              ),
              name: "QR Scan",
              disabled: !props.renderVideo,
            },
            {
              icon: (
                <span
                  onClick={() => {
                    setState({ ...state, calibration: !state.calibration });
                  }}
                  id="calibration"
                >
                  <ControlCameraIcon />
                </span>
              ),
              name: "Calibrate",
            },
            {
              icon: <CropFreeIcon onClick={() => toggleFullscreen()} />,
              name: "Full Screen",
            },
            {
              icon: (
                <span
                  onClick={() => {
                    props.setRenderVideo(false);
                    window.mergin_mode.realities.virtual();
                  }}
                >
                  VR
                </span>
              ),
              name: "Virtual Reality",
            },
            {
              icon: (
                <span
                  onClick={() => {
                    props.setRenderVideo(true);
                    window.mergin_mode.realities.mixed();
                  }}
                >
                  MR
                </span>
              ),
              name: "Mixed Reality",
            },
            {
              icon: (
                <span
                  onClick={() => {
                    props.setRenderVideo(false);
                    window.mergin_mode.realities.virtual();
                  }}
                  id="vrh"
                >
                  VRH
                </span>
              ),
              name: "VR Headset",
            },
            {
              icon: (
                <span
                  style={
                    props.renderVideo
                      ? {
                          pointerEvents: "none",
                          textDecoration: "line-through",
                        }
                      : {}
                  }
                  onClick={() => {
                    props.setRenderVideo(false);
                    window.mergin_mode.realities.mixedMRH();
                  }}
                  id="mrh"
                >
                  MRH
                </span>
              ),
              name: "MR Headset",
              disabled: props.renderVideo,
            },
            {
              icon: (
                <span
                  onClick={() => {
                    setShowInfo(!showInfo);
                  }}
                  id="shi"
                >
                  <i className="fas fa-info-circle"></i>
                </span>
              ),
              name: "Show/Hide Info",
            },
            {
              icon: (
                <span
                  onClick={() => {
                    setState({ ...state, geolocation: !state.geolocation });
                  }}
                  id="geolocation"
                >
                  <GpsFixedIcon />
                </span>
              ),
              name: "Geolocate",
            },
          ]}
        />
        {state.calibration && (
          <Box
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: "0px",
              left: "0px",
              zIndex: 100,
              background: "rgba(0,0,0,0.4)",
              display: "flex",
              gap: "12px",
              pointerEvents: "auto",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "50px",
            }}
          >
            <Box
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() =>
                setLocomotionMode(
                  locomotionMode === "Adjust" ? "Move" : "Adjust"
                )
              }
            >
              {locomotionMode}
            </Box>
            <Joystick
              size={100}
              baseColor="#323229"
              stickColor="#b64f0c"
              move={handleMove}
              stop={handleStop}
            ></Joystick>
            <Box
              style={{
                background: "rgba(0,0,0,0.7)",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => setState({ ...state, calibration: false })}
            >
              Close
            </Box>
            {/*

            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "50px",
              }}
            >
              <Box
                style={boxStyle}
                onClick={() => {

                }}
              >
                <ArrowBackIcon />
              </Box>
              <Box
                style={boxStyle}
                onClick={() => {
                  window.mergin_mode.controls.alphaOffset += 0.1;
                }}
              >
                <ArrowForwardIcon />
              </Box>
            </Box> */}
          </Box>
        )}
        {showInfo && (
          <React.Fragment>
            <div id="info-panel">
              <div className="info-group">
                <label>Position</label>
                <div>{`${infoState.position.x},${infoState.position.y},${infoState.position.z}`}</div>
              </div>
              <div className="info-group">
                <label>Heading</label>
                <div>{infoState.heading}</div>
              </div>
            </div>
            <div id="available-worlds">
              <WorldItem item={window.mergin_mode.worlds} />
            </div>
          </React.Fragment>
        )}

        <div
          id="descriptive-data-container"
          ref={(elem) => (containerRef.current = elem)}
        >
          <Button
            id="slider-helper"
            onMouseDown={DescriptiveDataListener(
              containerRef,
              sliderHelperRef,
              fheight
            )}
            onTouchStart={DescriptiveDataListener(
              containerRef,
              sliderHelperRef,
              fheight
            )}
            ref={(elem) => (sliderHelperRef.current = elem)}
          ></Button>
          <div id="slider"></div>
          {worldActions && (
            <div className="world-actions">
              {worldActions.map((action) => (
                <div
                  key={action.name}
                  className="world-action"
                  onClick={action.run}
                >
                  {action.name}
                </div>
              ))}
            </div>
          )}
          {props.descriptiveData ? (
            <div
              id="descriptive-data"
              dangerouslySetInnerHTML={{ __html: props.descriptiveData }}
            ></div>
          ) : (
            <div id="descriptive-data" style={{ overflowY: "auto" }}>
              <i className="mm-icons far fa-comment-dots"></i>
              <p>Please select an object to reveal descriptive data</p>
            </div>
          )}
        </div>
        {modalData && (
          <Modal
            data={modalData}
            onClose={() => {
              setModalData(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    descriptiveData: state.api.descriptiveData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

Controls.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
