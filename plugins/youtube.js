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
          return await message.send(
            await GetYtv(data.url),
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
          return await message.send(
            await GetYtv(data.url),
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
          const data = config.AUDIO_DATA.split(';');
          const aud = await AddMp3Meta(await toAudio(await GetYta(matchUrl), 'mp3'), await getBuffer(data[2]), {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.from, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
        } else {
          const link = await Ytsearch(match);
          const data = config.AUDIO_DATA.split(';');
          const aud = await AddMp3Meta(await toAudio(await GetYta(link.url), 'mp3'), await getBuffer(data[2]), {
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
          const data = config.AUDIO_DATA.split(';');
          const aud = await AddMp3Meta(await toAudio(await GetYta(matchUrl), 'mp3'), await getBuffer(data[2]), {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.chat, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
        } else {
          const link = await Ytsearch(match);
          const download = await message.send(`_*downloading ${link.title}*_`);
          const data = config.AUDIO_DATA.split(';');
          const aud = await AddMp3Meta(await toAudio(await GetYta(link.url), 'mp3'), await getBuffer(data[2]), {
            title: data[0],
            body: data[1],
          });
          await message.client.sendMessage(message.chat, {
            audio: aud,
            mimetype: 'audio/mpeg',
          });
          await download.edit(`_*Successfully downloaded ${link.title}*_`);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
);

System({
  pattern: 'play ?(.*)',
  fromMe: isPrivate,
  desc: 'YouTube video player',
  type: 'download',
}, async (message, match) => {
  try {
    if (!match) {
      return await message.reply('_Give a *Query* to play the song or video_');
    } else {
      if (isUrl(match)) {
        return await message.reply("_Only *Query* will work *e.g : heat waves*_");
      } else {
        const yt = await Ytsearch(match);
        await message.client.sendMessage(message.from, {
          text: `*_${yt.title}_*\n\n\n\`\`\`1. ⬢ audio\`\`\`\n\`\`\`2. ⬢ video\`\`\`\n\n_*Send a number as a reply to download*_`,
          contextInfo: {
            externalAdReply: {
              title: yt.author.name,
              body: yt.ago,
              thumbnail: await getBuffer(yt.image),
              mediaType: 1,
              mediaUrl: yt.url,
              sourceUrl: yt.url,
              showAdAttribution: false,
              renderLargerThumbnail: true
            }
          }
        });
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
});

System({
  on: 'text'
}, async (message) => {
  if (message.isBot) return;
  if (!message.reply_message?.fromMe || !message.reply_message?.text) return;
  if (!message.reply_message.text.includes('_Send number as reply to download_')) return;
  let match = message.body.replace('⬢', '');
  if (message.body.includes('⬢ audio')) {
    const ytAudio = await Ytsearch(match);
    const msg = await message.send(`_*Now playing : ${ytAudio.title} 🎶*_`);
    const data = config.AUDIO_DATA.split(';');
    const aud = await AddMp3Meta(
      await toAudio(await GetYta(ytAudio.url), 'mp3'),
      await getBuffer(data[2]),
      {
        title: data[0],
        body: data[1],
      }
    );
    await message.client.sendMessage(message.from, {
      audio: aud,
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          title: ytAudio.author.name,
          body: ytAudio.ago,
          thumbnail: await getBuffer(ytAudio.image),
          mediaType: 1,
          mediaUrl: ytAudio.url,
          sourceUrl: ytAudio.url,
          showAdAttribution: false,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: msg });
  } else if (message.body.includes('⬢ video')) {
    const data = await Ytsearch(match);
    const q = await message.send(`_*Now playing : ${data.title} 🎶*_`);
    await message.send(
      await GetYtv(data.url),
      { caption: `_*${data.title}*_`, quoted: q },
      'video'
    );
  } else {
    return;
  }
});

