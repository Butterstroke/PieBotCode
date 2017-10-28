const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = function(client, message, args) {
	if (message.author.id !== '265071448182358018') { return message.channel.send('You not Pie#9196.'); }
	var reason = args.join(' ');
	if (!reason) {
		const embed = new Discord.RichEmbed()
			.setColor(0xFF0000)
			.addField('Set Game', 'What game am I going to play?');
		return  message.channel.send({embed});
	} else {
		client.user.setPresence({ game: { name: reason, type: 0 } });
		const embed = new Discord.RichEmbed()
			.setColor(0x00FF0F)
			.addField('Set Game', `I have successfully setted my game to: ${reason}`);
		message.channel.send({embed});
	}
}
