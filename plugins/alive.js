const { System, getAlive, setAlive, alive, isPrivate } = require('../lib');

System({
    pattern: 'alive ?(.*)',
    fromMe: isPrivate,
    desc: 'Check if the bot is alive',
    type: 'user'
},
async (message, match) => {
    try {
        const msg = await getAlive();
        if (match && match[1] === "get" && message.sudo.includes(message.sender)) {
            return await message.send(msg);
        } else if (match && message.sudo.includes(message.sender)) {
            await setAlive(match[1]);
            return await message.send('_Alive Updated_');
        }
        return await alive(message, msg);
    } catch (error) {
        console.error('Error in alive command:', error);
    }
});
