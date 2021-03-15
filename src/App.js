// import
const express = require("express");
const cors = require("cors");
const music = require("./routes/music");
const db = require("./db/models");

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

const run = async () => {
  try {
    await db.sequelize.sync();
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
