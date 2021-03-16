const { music } = require("../db/models");

exports.fetchMusic = async (id, next) => {
  try {
    const foundMusic = await music.findByPk(id);
    return foundMusic;
  } catch (error) {
    next(error);
  }
};

exports.musicUpdate = async (req, res, next) => {
  try {
    await req.music.update(req.body);
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.musicDelete = async (req, res, next) => {
  try {
    await req.music.destroy();
    res.status(204).end();
  } catch (err) {
    next(error);
  }
};

exports.createMusic = async (req, res, next) => {
  try {
    const newMusic = await music.create(req.body);
    res.status(201).json(newMusic);
  } catch (error) {
    next(error);
  }
};

exports.newMusic = async (_, res, next) => {
  try {
    const musics = await music.findAll();
    res.json(musics);
  } catch (error) {
    next(error);
  }
};
