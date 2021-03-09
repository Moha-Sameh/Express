// import
const express = require("express");
const cors = require("cors");
const music = require("./routes/music");

//intialise app
const app = express();

// middware
app.use(cors());

app.get("/", (_, res) => {
  console.log("HELLO");
  res.json({ message: "Hello World" });
});

//routes
app.use("/music", music);

app.listen(8000);
