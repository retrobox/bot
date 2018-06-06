const Discord = require("discord.js");
const bot = new Discord.Client();

require("dotenv").config();

var opus = require("opusscript");
var prefix = "!";

bot.on("ready", function() {
  bot.user.setGame("!retrobox");
  console.log("Je suis connecté !");
});

bot.on("message", message => {
  if (message.content === prefix + "retro") {
    message.channel.send("TEST", {
      file:
        "https://cdn.discordapp.com/attachments/353261287247183874/423204038604095488/01.jpg"
    });
  }
});

bot.login(process.env.DISCORD_TOKEN);
