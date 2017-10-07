const Discord = require("discord.js");

exports.run = function(client, message, args) {
    var reason = args.join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .addField("Join the Dev Team!", `Hello ${message.author.username}!\nPie#9196 has received your request to join the Dev Team!\nYou shall be recieved with another dm from me soon!`)
        
    message.reply("Check your dm's for me!");
    message.author.send({embed});
    if (!reason) {
        client.users.get('265071448182358018').send(`Hi\nYou have recieved a Dev Team request from **${message.author.username}#${message.author.discriminator}** *(${message.author.id})*.\nPlease reply with p.yes ${message.author.id} or p.no ${message.author.id}.`);
    } else {
        client.users.get('265071448182358018').send(`Hi\nYou have recieved a Dev Team request from **${message.author.username}#${message.author.discriminator}** *(${message.author.id})* with the message **${reason}.**\nPlease reply with p.yes ${message.author.id} or p.no ${message.author.id}.`);
    }
}
