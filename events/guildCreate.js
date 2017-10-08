const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = guildCreate => {
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setAuthor("Hello!", "https://cdn.discordapp.com/avatars/288221668290068480/eb4336300624a9b429be4200b85830f2.png")
        .setDescription("Thanks for inviting me!")
        .addField("A message from the Creator", `Thanks for inviting my bot to ${guildCreate.name}!\nTo start using **Pie**Bot, do **p.helpme**. It will bring up the list of the commands.\nIf you want more help, [dm me on twitter](https://twitter.com/DiscordPieBot) or contact me on discord (Pie#9196).\n[Click here](https://thefallingpie.github.io/discordpiebot) for the website & [click here](https://discordapp.com/oauth2/authorize?client_id=288221668290068480&scope=bot&permissions=1547041863) to invite **Pie**Bot to your server!\nIf you are interested into joining the dev team, do **p.dev** and I shall respond soon.\nThanks!`)
        .addField("Some other info", "By inviting this bot on your server, you are agreeing to allow this bot to use and manipulate server info and member info.\nThis will improve the bot's overall performance with serveral patches.\nAlso your data will be used safely and securedly.\nThe bot will not use any other data like voice recording or editing channels unless the next update mentions anything about it.");
      
    guildCreate.defaultChannel.send({embed});
};
