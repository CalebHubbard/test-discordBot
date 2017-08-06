const Discord = require('discord.js');
const client = new Discord.Client();

//Event for when the bot starts up
client.on('ready', () => {
	console.log('I am ready!');
});

//Waits for a user to type a message
client.on('message', function (message) {
	//Checks message content for keywords
	if (message.content.toLowerCase() == '!test') {
		//Replies to the message
		message.reply("successful");
		//DON'T HAVE THE BOT REPLY WITH A KEYWORD IT CHECKS FOR
		//WILL CAUSE INFINITE LOOPS
	}
	
	if (messageContains(message, "!words")) {
		message.reply("woo");
	}
	
});

function messageContains (OrigMessage, command) {
	var mLength = OrigMessage.content.length;
	var cLength = command.length;
	var message = OrigMessage.content.toLowerCase();
	console.log("message length: " + mLength);
	console.log("command length: " + cLength);
	
	for (var i = 0; i < mLength - cLength + 1; i++){
		if (message[i] == command[0]) {
			for (var j = 0; j < cLength; j++) {
				if (message[i+j] == command[j]) {
					return true;
				}
			}
		}
	} return false;
}

//Links this code to a Discord app (Bot user)
client.login('MzQzNjA0OTA1MDYxMzg0MTk0.DGgnBg.AWKpjfNZjwsHQNtyZgOlP7n8Nu4');