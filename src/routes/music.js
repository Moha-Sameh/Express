const express = require("express");
const { musicDelete, musicList, musicCreater } = require("../controller/music");

const router = express.Router();

router.use(express.json());

// routes for music
router.delete("/:musicID", musicDelete);
router.get("/", musicList);
router.post("/", musicCreater);

module.exports = router;
