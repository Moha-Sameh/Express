const slugify = require("slugify");

const music = [
  {
    songname: "Hittem",
    slug: slugify("hittem"),
    songrelease: 2014,
    id: 2221,
    image: "https://i.ytimg.com/vi/9wL9_HPoDr4/maxresdefault.jpg",
  },

  {
    songname: "Infected",
    slug: slugify("Infected"),
    songrelease: 2016,
    id: 2222,
    image: "https://playmoss.com/uploads/images/t/r/a/track_919132.jpg",
  },

  {
    songname: "World On Fire",
    slug: slugify("world-on-fire"),
    songrelease: 2016,
    id: 2223,
    image: "https://i.ytimg.com/vi/ZUjS189Sbow/maxresdefault.jpg",
  },

  {
    songname: "Say My Name",
    slug: slugify("say-my-name"),
    songrelease: 2016,
    id: 2224,
    image: "https://pbs.twimg.com/media/DjIZknFW0AEI_QH.jpg",
  },

  {
    songname: "Mind Games",
    slug: slugify("mind-games"),
    songrelease: 2017,
    id: 2225,
    image: "https://ytimg.fastimg.xyz/JImzkv0em6c.jpg",
  },

  {
    songname: "Bremuda",
    slug: slugify("bremuda"),
    songrelease: 2017,
    id: 2226,
    image: "https://i.ytimg.com/vi/nMt00eqovlU/hqdefault.jpg",
  },

  {
    songname: "Lost My Way",
    slug: slugify("lost-my-way"),
    songrelease: 2018,
    id: 2227,
    image: "https://i.ytimg.com/vi/4SCp4fQQgV4/maxresdefault.jpg",
  },

  {
    songname: "Kill Me Slowly",
    slug: slugify("kill-me-slowly"),
    songrelease: 2019,
    id: 2228,
    image: "https://i.ytimg.com/vi/4U9tpiyxGnU/maxresdefault.jpg",
  },

  {
    songname: "When I'm low",
    slug: slugify("when-i'm-low"),
    songrelease: 2019,
    id: 2229,
    image: "https://i1.sndcdn.com/artworks-000559641873-alu8ub-t500x500.jpg",
  },

  {
    songname: "Catch Feelings",
    slug: slugify("catch-feelings"),
    songrelease: 2020,
    id: 22230,
    image: "https://i.ytimg.com/vi/6Aw7H5lHfS8/maxresdefault.jpg",
  },

  {
    songname: "Don't You",
    slug: slugify("don't-you"),
    songrelease: 2021,
    id: 2231,
    image: "https://i.ytimg.com/vi/chTEFQT02Xw/maxresdefault.jpg",
  },
];

module.exports = music;
