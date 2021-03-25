// import
const express = require("express");
const cors = require("cors");
const db = require("./db/models");
const passport = require("passport");
const { localStrategy } = require("./middleware/localStrategy");

//Routes path
const user = require("./routes/user");
const music = require("./routes/music");

//intialise app
const app = express();
app.use(express.json());

// middware
app.use(cors());
app.use(passport.initialize());
passport.use(localStrategy);

//routes
app.use("/music", music);
app.use("/login", user);

// App intial
const run = async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection to the database successful!");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }

  await app.listen(8000, () => {
    console.log("The application is running on localhost:8000");
  });
};

run();
