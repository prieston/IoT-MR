import { combineReducers } from "redux";
import api from "./api";
import worldDataTest from "../testFiles/worldTest.js";
import { hueBridgeIP, username, lightID } from "../config";

const startWorld = {
  id: "0",
  name: "Start World",
  description: "Start World",
  content: [],
  meta: {
    authors: [
      { firstName: "Konstantinos", lastName: "Evanggelidis" },
      { firstName: "Theofilos", lastName: "Papadopoulos" },
    ],
    coordinates: [0, 0, 0],
  },
};

window.iotmr = {
  hueBridgeIP,
  username,
  lightID,
  modelLayer: [],
  vectors: [],
  plane: {},
  sky: {},
  mixers: [],
  camera: {},
  controls: {},
  scene: {},
  renderer: {},
  pointer: {},
  partials: {},
  loaders: {},
  selected: {
    object: null,
    material: null,
  },
  listeners: {
    mouseMoved: false,
  },
  center: [0, 0, 0],
  onWindowResize: () => {},
  world: {},
  currentWorldId: 0,
  worlds: [startWorld, worldDataTest],
};

const rootReducer = combineReducers({
  api,
});

export default rootReducer;
