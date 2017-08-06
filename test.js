const Discord = require('discord.js');
const client = new Discord.Client();

//Event for when the bot starts up
client.on('ready', () => {
	console.log('I am ready!');
});

//Waits for a user to type a message
client.on('message', message => {
	//Checks message content for keywords
	if (message.content === '!ping') {
		//Replies to the message
		message.reply('pong');
		//DON'T HAVE THE BOT REPLY WITH A KEYWORD IT CHECKS FOR
		//WILL CAUSE INFINITE LOOPS
	}
});

//Links this code to a Discord app (Bot user)
client.login('MzQzNjA0OTA1MDYxMzg0MTk0.DGgnBg.AWKpjfNZjwsHQNtyZgOlP7n8Nu4');