const express = require("express");
const musicList = require("./Data");

const app = express();

app.get("/data", (_, res) => {
  res.json(musicList);
});

app.get("/", (_, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

app.listen(8000);
