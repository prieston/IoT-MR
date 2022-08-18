import express from "express";
import { username, hueBridgeIP, lightID } from "./src/config.js";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
app.use(cors());
const port = 3000;
app.get("/light-on", (req, res, next) => {
  console.log(req.originalUrl);
  fetch(`${hueBridgeIP}/api/${username}/lights/${lightID}/state`, {
    method: "PUT",
    body: JSON.stringify({ on: true }),
  })
    .then((data) => data.json())
    .then(console.log);
  res.end("ok");
});
app.get("/light-off", (req, res, next) => {
  console.log(req.originalUrl);
  fetch(`${hueBridgeIP}/api/${username}/lights/${lightID}/state`, {
    method: "PUT",
    body: JSON.stringify({ on: false }),
  })
    .then((data) => data.json())
    .then(console.log);
  res.end("ok");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
