const {
    System,
    getAlive,
    setAlive,
    alive,
    isPrivate
} = require('../lib')

System({
    pattern: 'alive ?(.*)',
    fromMe: isPrivate,
    desc: 'Does bot work?',
    type: 'user'
},
async (message, match) => {
    const msg = await getAlive();
    if(match == "get" && message.sudo.includes(message.sender)){
    return await message.send(msg);
    } else if(match && message.sudo.includes(message.sender)) {
    await setAlive(match);
    return await message.send('_Alive Updated_');
    }
    return await alive(message,msg);
});
