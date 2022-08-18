import express from "express";
import { hueBridgeIP, username, lightID } from "./src/config.js";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
const port = 3000;

app.get("/light-on", (req, res) => {
  fetch(`${hueBridgeIP}/api/${username}/lights/${lightID}/state`, {
    method: "PUT",
    body: JSON.stringify({ on: true }),
  })
    .then((data) => data.json())
    .then(console.info);
  res.end("ok");
});

app.get("/light-off", (req, res) => {
  fetch(`${hueBridgeIP}/api/${username}/lights/${lightID}/state`, {
    method: "PUT",
    body: JSON.stringify({ on: false }),
  })
    .then((data) => data.json())
    .then(console.info);
  res.end("ok");
});

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
