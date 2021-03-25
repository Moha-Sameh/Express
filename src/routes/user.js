const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controller/user");
const passport = require("passport");

router.post("/signup", signup);
router.post("/", passport.authenticate("local", { session: false }), signin);

module.exports = router;
