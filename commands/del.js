const Discord = require("discord.js");

exports.run = function(client, message, args) {
	let messagecount = Number(args[0]) + 1;
	let role = message.member.hasPermission('KICK_MEMBERS');
	
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200)
		.setTimestamp()
		.setFooter(`Deleted by ${message.author.username}`);
	
	if (!message.member.hasPermission('KICK_MEMBERS')) {
		embed.addField("Delete Messages", "You don't have admin or mod powers. Please try again.");
		return message.channel.send({embed}).then(Message => { setTimeout(() => { Message.delete(); }, 3000); });
	} if (!messagecount) {
		embed.addField("Delete Messages", "How many are you going to delete?");
		return message.channel.send({embed});
	}
	
	message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
	embed.addField("Delete Messages", `Deleted ${messagecount - 1} messages!`);
	message.channel.send({embed});
}
