const express = require("express");
const { musicDelete, musicList, musicCreater } = require("../controller/music");

const router = express.Router();

// routes for music
router.delete("/:musicID", musicDelete);
router.get("/", musicList);
router.post("/", musicCreater);

module.exports = router;
