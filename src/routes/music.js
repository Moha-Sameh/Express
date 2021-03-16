const express = require("express");
const {
  newMusic,
  createMusic,
  musicUpdate,
  musicDelete,
  fetchMusic,
} = require("../controller/music");

const router = express.Router();

// router using param
router.param("id", async (req, res, next, id) => {
  const music = await fetchMusic(id, next);
  if (music) {
    req.music = music;
    next();
  } else {
    const err = new Error("Music ID must be wrong please try again");
    err.status = 404;
    next(err);
  }
});

router.use(express.json());

// routes for music
router.get("/", newMusic);
router.post("/", createMusic);
router.put("/:id", musicUpdate);
router.delete("/:id", musicDelete);

module.exports = router;
