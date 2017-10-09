/*
Chatbot for Code_NB
*/

const Discord = require('discord.io')
const config = require('./config')

const bot = new Discord.Client({
    // creates a bot obj with the API token from the config file
    token: config.token,
    autorun: true
});

forBot = function(message){
    // tests wether a message is intended for the bot
    return message.startsWith(config.sig);
}

bot.on('ready', function() {
    // ready message to console
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event){
    // responds to any message that the bot can see e.i. channels it's logged in on.
    if (forBot(message)){
        // checks if the message starts with the sig string from the config file.
        if (message === "ping") {
            // simple ping pong test response 
            bot.sendMessage({
                to: channelID,
                message: "pong"
            })
        }
    }
});
