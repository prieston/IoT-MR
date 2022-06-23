import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import createWorld from "../../helpers/createWorld";
import { setDescriptiveData } from "../../actions";
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  if (!stream) return;
  const tracks = stream.getTracks();

  tracks.forEach(function(track) {
    track.stop();
  });

  videoElem.srcObject = null;
}
const World = (props) => {
  useEffect(() => {
    const video = document.getElementById("video");
    if (props.renderVideo) {
      const video = document.getElementById("video");
      const constraints = {
        video: { width: 1280, height: 720, facingMode: "environment" },
      };

      navigator.mediaDevices.getUserMedia(constraints).then((response) => {
        video.srcObject = response;
        video.play();
      });
    } else {
      if (video) stopStreamedVideo(video);
    }
  }, [props.renderVideo]);
  useEffect(() => {
    if (!navigator.mediaDevices?.getUserMedia) {
      return false;
    }

    const {
      mixers,
      camera,
      controls,
      scene,
      renderer,
      pointer,
      partials,
      loaders,
    } = window.mergin_mode;
    const rendererContainer = document.getElementById("three-map");
    const newWorld = createWorld(
      camera,
      controls,
      scene,
      renderer,
      pointer,
      partials,
      loaders,
      rendererContainer,
      mixers,
      (uuid) => {
        const descriptiveData = uuid
          ? window.mergin_mode.world[window.mergin_mode.currentWorldId].filter(
              (o) => o.id == uuid
            )[0].description
          : null;
        window["descriptive-data-container"].classList.add("transition");

        if (!descriptiveData) {
          window["descriptive-data-container"].style.height = "0%";
        } else {
          window["descriptive-data-container"].style.height = "33%";
        }
        setTimeout(() => {
          window["descriptive-data-container"].classList.remove("transition");
        }, 1000);
        props.setDescriptiveData(descriptiveData);
      }
    );
    window.mergin_mode = { ...window.mergin_mode, ...newWorld };
  }, []);

  return (
    <div id="world">
      <video
        key={"video"}
        id="video"
        style={{ display: "none" }}
        autoPlay
        playsInline
      ></video>
      <div
        id="three-map"
        style={{
          position: "absolute",
          width: `100%`,
          height: `100%`,
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    api: state.api,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDescriptiveData: (context) => dispatch(setDescriptiveData(context)),
  };
};

World.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(World);
