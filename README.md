# test-discordBot
Screwing around with Discord bots. <br>
This Bot requires <a href="https://nodejs.org/en/">Node.js</a> as well as <a href="https://github.com/hydrabolt/discord.js/">Discord.js</a> to function.
****
# Adding The Bot To A Server
To add this bot to your server log into discord in your browser, and go to <a href="https://discordapp.com/oauth2/authorize?&client_id=343604905061384194&scope=bot&permissions=0">this link</a>. After you follow the link click on the dropdown menu, and choose which server you want the bot to join, and then click authorize. (note you can only add it to a server you own)
****
# Running The Bot
To run the bot open a Command Prompt window, and change directory to where you put these files.
Then Type
```
node test.js
```
After that you should be able to use the bot in your server as long as this window is open.
****
# Using The Bot
## General Use Of The Bot
This bot mainly functions through use of commands. Commands are used by typing into the discord chat
<br>
This is an example of how to use a command.
```
!command
```
It also doesnt matter where in the message the command is, as long as it is all together.
<br>
This means that messages like this will also work
```
Hey test-bot run this !command for me please.
```
But something like this won't
```
!comm and
```
****
## A List Of Commands
Here's a hopefully full list of commands this bot can use, as well as what they do, and how to use them.<br>
****
#### test
###### How To Use It:
```
!test
```
###### What Will Happen:
The bot will reply with
```
@MessageSender successful
```
****
