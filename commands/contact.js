const Discord = require('discord.js');

exports.run = function(client, message, args) {
	var reason = args.join(' ');
	let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200);
	
	if (!reason) { 
		embed.addField('Contact Pie#9196', "What are you going to send him again? :thinking:"); 
		return message.channel.send({embed});
	}
	
	if (imageurl === undefined) {
		embed.addField('Sent!', "Your message has been sent to Pie#9196!")
		message.channel.send({embed});
		embed.addField(`From: ${message.author.username}`, `${reason}`)
		client.users.get('265071448182358018').send({embed});
	} else {
		embed.addField('Sent!', "Your message has been sent to Pie#9196!")
		message.channel.send({embed});
		embed.addField(`From: ${message.author.username}`, `${reason}` + `${imageurl}`)
		client.users.get('265071448182358018').send({embed});
	}
}
