const Discord = require('discord.js');

exports.run = function(client, message, args) {
    var user = message.mentions.users.first();
    let reason = message.content.trim().split(' ').slice(2).join(' ');
    
    if (!user) { user = message.author; }
    
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `<@${user.id}> check dms!`);
    
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();
    
    const embed2 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have sent a :cookie: to <@${user.id}>!`)
        .setFooter(`Sent to ${user.username}`);
    
    if (user.id === message.author.id) {
        embed.setFooter(`Cookied by ${user.username}`);
        message.channel.send({embed: embed}).then(x => DeleteQueue.add(x, 5000));
        embed.addField(':cookie:', `You have received a :cookie: from <@288221668290068480>!`)
             .setFooter(`Sent from Pie!`);
        return message.author.send({embed: embed1});
    } 
    
    if (!reason) { embed1.addField(':cookie:', `You have received a :cookie: from <@${message.author.id}>!`); } 
    else { embed1.addField(':cookie:', `You have received a :cookie: from <@${message.author.id}> with a message saying ${reason}!`); }
        
    embed.setFooter(`Cookied by ${message.author.username}`);
    message.channel.send({embed}).then(x => DeleteQueue.add(x, 5000));
    embed1.setFooter(`Sent from ${message.author.username}`);
    user.send({embed: embed1}).then(() => { message.author.send({embed: embed2}); });
};
