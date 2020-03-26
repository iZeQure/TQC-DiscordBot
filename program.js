// Get depedency modules.
const Discord = require('discord.js');
const {
    BotConfig,
    Channels,
    Colors
} = require('./config.json');

// Initialize Objects
const client = new Discord.Client();

// when the client is ready, run this event,
// this event is only triggering one time after logging in.
client.once('ready', () => {
    console.info(`${client.user.tag} is ready!`);
});

// Listen to message event,
// triggered everytime a message is send.
client.on('message', async message => {

    try {
        // Exit event, if isn't correct channel.
        if (!message.channel.id === Channels.Debugging.id) return;

        // Get information of who created the news post.
        const newsCreatedBy = `${message.author.tag} <${message.author.id}>`;

        // Get a readable date time now.
        const dateTime = new Date(Date.now());

        // Write info to the console for debugging.
        console.info(`News Created By: ${newsCreatedBy}. @ ${dateTime.toDateString()}`);
        console.log(`Message Content : ${message.content}`);

        // Check if any attachments are provided in the message.
        if (message.attachments.size > 0) {

            // Get the url of the provided attachment.
            const attachments = message.attachments;
            attachments.forEach(attachment => {
                console.info(attachment.url);
            });
        }
    } catch (error) {
        console.error(`Error Ocurred Reading News : ${error.message}`);
    }
    finally {
        
    }
});

// Login to Discord with the app's token.
client.login(BotConfig.token);