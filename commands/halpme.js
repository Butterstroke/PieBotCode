exports.run = function(client, message) {	
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB20)
		.setDescription(`**${message.author.username}, check your DM's!**`);
	
	message.react('✅');
  	message.channel.send({embed});
	const embed1 = new Discord.RichEmbed()
		.setColor(0xFFB200)
		.setAuthor("Help", "https://cdn.discordapp.com/attachments/314674872825544704/323363410165104640/helpme.png")
		.addField("#Update6 in the works", "New commands will be coming soon <:yellow_fruit:337558557199433741>")
		.addField('New Commands', '**p.tts** | *example: p.tts I like to breathe in air.*\n**p.grapefruit** | *pics of grapefruit*\n**More commands coming very shortly like p.easteregg and dat**')
		.addField('Picture commands', '**p.catto** | *pics of cats*\n**p.chicken** | *pics of chicken*\n**p.doggo** | *shows you a pic of a doggo*\n**p.vuuf** | *Vuuf*\n**p.vuuuf** | *VUUUF.*\n**p.pie** | *comes up with a pic of a pie cause why not*')
		.addField('Audio commands', '**p.radio** | *plays radio stations I think*\n**p.play** | *plays songs (either by url or by name, in development)*')
		.addField('Reaction Commands', '**p.yellow** | <:yellow_fruit:337558557199433741>\n**p.angery** | <:angery:339319884146278401>\n**p.trump** | <:trumpie:307507694917517312>')
		.addField('Moderation Commands', `\n**p.warn** | *example: p.warn @grandayy posting too dank memeys*\n**p.ban** | *example: p.ban @jeff my name is*\n**p.kick** | *example: p.kick @keemstar reporting the news*`)
		.addField("Fun Commands", '**p.roast** | *you can roast yourself or another person*\n**p.1v1 <@user> OR just p.1v1** | *you can 1v1 pie or a person.*\n**p.net** | *throws a net at someone*\n**p.im** | *hi keemstar, im pie!*\n**p.eat** | *eat me or another member*\n**p.catchmeoutside** | *the first command which was made*\n**p.summon pie** | *I dunno why*\n**p.money** | *rich af*\n**p.idk** | *idk*\n**p.pingpie** | *why did i add this again?*\n**p.8ball** | *it could be possible Pie#9196*\n**p.rate** | *I would rate Jeff 4/20*')
		.addField('Story time', "**p.lemon** | *a story* \n**p.luckayy** | *another story*")
		.addField('Some stuff', '**p.nasty** | *idk.*\n**p.helpme** *the command you are using rn*\n**p.report** | *reports nasty bugs and suggestions*\n**p.avatar** | *shows your avatar or others*\n**p.info** | *some basic stuff about* ***Pie****Bot*\n**p.ping** | *pings dat and this*')
		.setTimestamp()
		.setFooter("Made by: Pie#9196. Last Updated: 26/08/17", "https://yt3.ggpht.com/-VpU5gxnVCN8/AAAAAAAAAAI/AAAAAAAAAAA/K9fKj4NzB54/s900-c-k-no-mo-rj-c0xffffff/photo.jpg");
	message.author.send({embed: embed1});
}
