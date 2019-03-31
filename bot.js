const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTU5ODQ2MjgwNDc4ODUxMDgy.XKDK4Q.iR9ya2sFk0hlC7f6KXFgzmU7TOM);
