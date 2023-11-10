const { System, isPrivate, getSpotify } = require("../lib/");

System({
    pattern: "spotify",
    fromMe: isPrivate,
    desc: "Download Tracks from Spotify",
    type: "Download",
  },
  async (message, match) => {
    await getSpotify(message, match)
  });
