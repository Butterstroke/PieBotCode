const Discord = require("discord.js");

exports.run = function(client, message) {
	const embed = new Discord.RichEmbed();
	
	if (message.author.id !== '265071448182358018') {
		embed.setColor(0xFF0000)
			.addField('Owner', 'You are not Pie#9196 ;-;');
	} else {
		embed.setColor(0x00FF0F)
			.addField('Owner', `Hello Pie#9196!`);
	}
  
	message.channel.send({embed});
}
