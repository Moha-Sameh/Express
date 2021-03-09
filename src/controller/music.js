let music = require("../Data");
const slugify = require("slugify");

exports.musicDelete = (_, res) => {
  const { musicID } = _.params;
  try {
    music = music.filter((anything) => anything.id !== +musicID);
    res.status(204).end();
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
exports.musicList = (_, res) => {
  res.json(music);
};

exports.musicCreater = (_, res) => {
  const id = music[music.length - 1].id + 1;
  const slug = slugify(_.body.songname, { lower: true });
  const newMusic = { id, slug, ..._.body };
  music.push(newMusic);
  res.json(newMusic);
};
