const Discord = require('discord.js');

exports.run = function(client, message, args) {
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    let reason = message.content.trim().split(' ').slice(2).join(' ');
    
    if (!user) { user = message.author; }
    
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `<@${user.id}> check dms!`);
    
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();
    
    if (!user) {
        embed.setFooter(`Cookied by ${user.username}`);
        message.channel.send({embed: embed}).then(x => DeleteQueue.add(x, 5000));
        embed.addField(':cookie:', `You have received a :cookie: from <@288221668290068480>!`)
            .setFooter(`Sent from Pie!`);
        return message.author.send({embed: embed1});
    } else if (!reason) {
        embed.setFooter(`Cookied by ${message.author.username}`);
        message.channel.send({embed}).then(x => DeleteQueue.add(x, 5000));
        const embed4 = new Discord.RichEmbed()
            .setColor(0xFFB200)
            .setTimestamp()
            .addField(':cookie:', `You have received a :cookie: from <@${message.author.id}>!`)
            .setFooter(`Sent from ${message.author.username}`);
        user.send({embed: embed4}).then(() => {
            const embed5 = new Discord.RichEmbed()
                .setColor(0xFFB200)
                .setTimestamp()
                .addField(':cookie:', `You have sent a :cookie: to <@${user.id}>!`)
                .setFooter(`Sent to ${user.username}`);
            message.author.send({embed: embed5});
        });
} else {
    embed.setFooter(`Cookied by ${message.author.username}`);
    message.channel.send({embed}).then(x => DeleteQueue.add(x, 5000));
    const embed4 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have received a :cookie: from <@${message.author.id}> with a message saying ${reason}!`)
        .setFooter(`Sent from ${message.author.username}`);
    user.send({embed: embed4}).then(() => {
    const embed5 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField(':cookie:', `You have sent a :cookie: to <@${user.id}>!`)
        .setFooter(`Sent to ${user.username}`);
    message.author.send({embed: embed5});
    });
    }
};
