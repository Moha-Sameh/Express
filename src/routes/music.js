const express = require("express");
const {
  newMusic,
  createMusic,
  musicUpdate,
  musicDelete,
} = require("../controller/music");

const router = express.Router();

router.use(express.json());

// routes for music
router.get("/", newMusic);
router.post("/", createMusic);
router.put("/:id", musicUpdate);
router.delete("/:id", musicDelete);

module.exports = router;
