"use strict";
const { Model } = require("sequelize");
const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  class music extends Model {
    static associate(models) {
      // define association here
    }
  }
  music.init(
    {
      songname: DataTypes.STRING,
      songrelease: DataTypes.INTEGER,
      image: DataTypes.STRING,
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "music",
    }
  );
  SequelizeSlugify.slugifyModel(music, {
    source: ["songname"],
  });

  return music;
};
