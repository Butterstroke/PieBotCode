const Discord = require('discord.js');

exports.run = function(client, message, args) {
	var reason = args.join(' ');
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200);
		
	const embed1 = new Discord.RichEmbed()
		.setColor(0xFFB200);
	
	if (!reason) { 
		embed.addField('Contact Pie#9196', "What are you going to send him again? :thinking:"); 
		return message.channel.send({embed});
	}
	
	embed.addField('Sent!', "Your message has been sent to Pie#9196!");
	embed1.addField(`From: ${message.author.username}`, `${reason}`);
	
	message.channel.send({embed});
	client.users.get('265071448182358018').send({embed: embed1});
}
