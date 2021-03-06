const Discord = require('discord.js');
const client = new Discord.Client();

//Event for when the bot starts up
client.on('ready', () => {
	console.log('I am ready!');
});

//Waits for a user to type a message
client.on('message', function (message) {
	//Checks message content for keywords
	if (messageContains(message, '!test')) {
		//Replies to the message
		message.reply("successful");
		//DON'T HAVE THE BOT REPLY WITH A KEYWORD IT CHECKS FOR
		//WILL CAUSE INFINITE LOOPS
	}
});

/*
Had to write my own function to be able to parse out words instead of it only being able to
check if the message was the command only.
For example the message.content function would return the exact string of the message
so writing if (message.content == "!something" would only return true if the message only
consisted of "!something" so typing "!something extra" wouldnt work

Anyway tldr; this function allows you to place your command anywhere in your message
*/
function messageContains (OrigMessage, command) {
	var mLength = OrigMessage.content.length;
	var cLength = command.length;
	var message = OrigMessage.content.toLowerCase();
	
	/*
	This for statement checks each character in the message
	until it reaches a character that matches the first character in the command.
	Then it checks to see if the subsequent characters are equal to the command.
	I did it this way to try to make it run efficiently, and it probably doesn't :D
	
	This allows there to be characters within the command to be before the command.
	For example you could have the message "this is a good time! to !test. Don't you think?"
	*/
	for (var i = 0; i < mLength - cLength + 1; i++){
		if (message[i] == command[0]) {
			if (message.slice(i, i + cLength) == command) {
				return true;
			}
		}
	} return false;
}

//Links this code to a Discord app (Bot user)
client.login('MzQzNjA0OTA1MDYxMzg0MTk0.DGgnBg.AWKpjfNZjwsHQNtyZgOlP7n8Nu4');