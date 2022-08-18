import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
// import { username, hueBridgeIP, lightID } from "./config";

import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import reducer from "./reducers";
// import { fromLonLat } from "ol/proj.js";
// const towerlocationConvert = fromLonLat([40.626374, 22.948324, 15.25]);
// const treelocationConvert = fromLonLat([40.62626, 22.947929, 15.25]);
// const userConvert = fromLonLat([40.626288, 22.947957, 15.25]);
//

// window.username = username;
// window.hueBridgeIP = hueBridgeIP;
// window.lightID = lightID;
const rootElement = document.getElementById("root");

const loggerMiddleware = createLogger({
  // ...options
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__() /*,
  applyMiddleware(thunkMiddleware, loggerMiddleware)*/
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
