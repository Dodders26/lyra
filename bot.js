var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	var vulg_strikes=0;
	var blade_strikes=0;
	var dodders_strikes=0;
	var sheild_strikes=0;
    if (message.substring(0, 1) == 'Lyra ') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'strike Vulg':
			vulg_strikes+=1
                bot.sendMessage({
                    to: channelID,
                    message: "owo naughty Vulg sit on my lap and let's have a talk, Strike:",vulg_strikes				
                });
			case 'strike Dodders':
			dodders_strikes+=1
                bot.sendMessage({
                    to: channelID,
                    message: "owo naughty Dodders sit on my lap and let's have a talk, Strike:",dodders_strikes	
                });
			case 'strike Blade':
			blade_strikes+=1
                bot.sendMessage({
                    to: channelID,
                    message: "owo naughty Blade sit on my lap and let's have a talk, Strike:",blade_strikes	
                });
			case 'strike Sheild':
			sheild_strikes+=1
                bot.sendMessage({
                    to: channelID,
                    message: "owo naughty Sheild sit on my lap and let's have a talk, Strike:",sheild_strikes	
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
