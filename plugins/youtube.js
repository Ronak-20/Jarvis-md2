const {
  tiny,
  isUrl,
  System,
  GetYta,
  GetYtv,
  toAudio,
  Ytsearch,
  getBuffer,
  isPrivate,
  AddMp3Meta,
  extractUrlFromMessage,
} = require('../lib/');
const config = require('../config');

System(
  {
    pattern: 'video',
    fromMe: isPrivate,
    desc: 'YouTube video downloader',
    type: 'download',
  },
  async (message, match) => {
    try {
      match = match || message.reply_message.text;
      if (!match) {
        return await message.reply('_Give a YouTube video *Url* or *Query*_');
      } else {
        const matchUrl = extractUrlFromMessage(match);
        if (isUrl(matchUrl)) {
          return await message.send(
            await GetYtv(matchUrl),
            { caption: tiny('*made with 🤍*'), quoted: message.data },
            'video'
          );
        } else {
          const data = await Ytsearch(match);
          const link = data.url;
          return await message.send(
            await GetYtv(link),
            { caption: tiny('*made with 🤍*'), quoted: message.data },
            'video'
          );
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
);

System(
  {
    pattern: 'ytv',
    fromMe: isPrivate,
    desc: 'YouTube video downloader',
    type: 'download',
  },
  async (message, match) => {
    try {
      match = match || message.reply_message.text;
      if (!match) {
        return await message.reply('_Give a YouTube video *Url* or *Query*_');
      } else {
        const matchUrl = extractUrlFromMessage(match);
        if (isUrl(matchUrl)) {
          return await message.send(
            await GetYtv(matchUrl),
            { caption: tiny('*made with 🤍*'), quoted: message.data },
            'video'
          );
        } else {
          const data = await Ytsearch(match);
          const link = data.url;
          return await message.send(
            await GetYtv(link),
            { caption: tiny('*made with 🤍*'), quoted: message.data },
            'video'
          );
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
);

System(
  {
    pattern: 'yta ?(.*)',
    fromMe: isPrivate,
    desc: 'YouTube audio downloader',
    type: 'download',
  },
  async (message, match) => {
    try {
      match = match || message.reply_message.text;
      if (!match) {
        return await message.reply('_Give a YouTube video *Url* or *Query*_');
      } else {
        const matchUrl = extractUrlFromMessage(match);
        if (isUrl(matchUrl)) {
          const audioBuffer = await GetYta(matchUrl);
          const media = await toAudio(audioBuffer, 'mp3');
          const data = config.AUDIO_DATA.split(';');
          const img = await getBuffer(data[2]);
          const aud = await AddMp3Meta(media, img, {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.from, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
        } else {
          const link = await Ytsearch(match);
          const audioBuffer = await GetYta(link.url);
          const media = await toAudio(audioBuffer, 'mp3');
          const data = config.AUDIO_DATA.split(';');
          const img = await getBuffer(data[2]);
          const aud = await AddMp3Meta(media, img, {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.from, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
);

System(
  {
    pattern: 'song ?(.*)',
    fromMe: isPrivate,
    desc: 'YouTube audio downloader',
    type: 'download',
  },
  async (message, match, m) => {
    try {
      match = match || message.reply_message.text;
      if (!match) {
        return await message.reply('_Give a YouTube video *Url* or *Query*_');
      } else {
        const matchUrl = extractUrlFromMessage(match);
        if (isUrl(matchUrl)) {
          const download = await m.send(`_downloading ${name.title}_`);
          const audioBuffer = await GetYta(matchUrl);
          const media = await toAudio(audioBuffer, 'mp3');
          const data = config.AUDIO_DATA.split(';');
          const img = await getBuffer(data[2]);
          const aud = await AddMp3Meta(media, img, {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.from, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
        } else {
          const link = await Ytsearch(match);
          const download = await m.send(`_downloading ${url.title}_`);
          const audioBuffer = await GetYta(link.url);
          const media = await toAudio(audioBuffer, 'mp3');
          const data = config.AUDIO_DATA.split(';');
          const img = await getBuffer(data[2]);
          const aud = await AddMp3Meta(media, img, {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.from, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
          await download.edit(`_Successfully downloaded ${url.title}_`);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
);
