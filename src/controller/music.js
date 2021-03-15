const { music } = require("../db/models");

exports.createMusic = async (req, res) => {
  try {
    const newMusic = await music.create(req.body);
    res.status(201).json(newMusic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.newMusic = async (_, res) => {
  try {
    const musics = await music.findAll();
    res.json(musics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.musicUpdate = async (req, res) => {
  const { id } = req.params;
  try {
    const foundMusic = await music.findByPk(id);
    if (foundMusic) {
      await foundMusic.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "Cookie not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
