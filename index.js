require("dotenv").config();

const Discord = require("discord.js");
const bot = new Discord.Client();

var opus = require("opusscript");
var PREFIX = "!";0

bot.on("ready", function() {
  bot.user.setActivity(PREFIX + "retrobox", {"type": "PLAYING"});
  console.log("Connected.");
});

bot.on("message", async message => {
  if (message.content.charAt(0) !== PREFIX) {
  	return;
  }
	let args = message.content.split(' ')
  args[0] = args[0].substr(PREFIX.length)
  if (args[0] == "retrobox") {
    message.channel.send("", {
      file:
        "https://cdn.discordapp.com/attachments/353261287247183874/423204038604095488/01.jpg"
    });
  }

  if (args[0] == "ping") {
      message.channel.send("Pong!");
  }

  if (args[0] == "purge") {
    // on fait la vérification de permission
    if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES, true)) return message.reply('You bastard!')
    
    if (args.length == 1) return message.reply('You haven\'t given an amount of messages which should be deleted!'); 
    if (isNaN(args[1])) return message.reply('The amount parameter isn`t a number!'); 

    if (args[1] > 100) return message.reply('You can`t delete more than **100** messages at once!'); 
    if (args[1] < 1) return message.reply('You have to delete at least **1** message!'); 

    await message.channel.messages.fetch({ limit: args[1] }).then(messages => {
      message.channel.bulkDelete(messages)
      message.reply(':white_check_mark: You deleted: **' + messages.size + '** messages')
    });
	}
});

bot.login(process.env.DISCORD_TOKEN);
