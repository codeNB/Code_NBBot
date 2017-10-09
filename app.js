/*
Chatbot for Code_NB
*/

const Discord = require('discord.io')
const config = require('./config')

const bot = new Discord.Client({
    token: config.token,
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event){
    if (message === "ping") {
        bot.sendMessage({
            to: channelID,
            message: "pong"
        })
    }
});