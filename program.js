// require the dependency discord.js module
const Discord = require('discord.js');

// get the required configuration file.
const {
    BotConfig
} = require('./config.json');

// create a new Discord Client
const client = new Discord.Client();

// when the client is ready, run this event,
// this event is only triggering one time after logging in.
client.once('ready', () => {
    console.info(`${client.user.tag} is ready!`);
});

// Login to Discord with the app's token.
client.login(BotConfig.token);

// Debug for any messages,
// log the result in the log.
client.on('message', message => {
    if (message.content.startsWith(`${BotConfig.prefix}ping`)) {
        message.channel.send('Pong!');
    } 
    else if (message.content.startsWith(`${BotConfig.prefix}beep`)) {
        message.channel.send('Boop!');
    } 
    else if (message.content === `${BotConfig.prefix}server`) {
        message.channel.send(`Server Name : ${message.guild.name}\nTotal Members : ${message.guild.memberCount}`);
    }
});