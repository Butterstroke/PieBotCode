const Discord = require("discord.js");

exports.run = function(client, message, args) {
  var user = message.mentions.users.first();
  if (!user) { user = message.author; }
  var pie = ["http://www.bordbia.ie/SiteCollectionImages/Recipes/christmas/Beef-Pie-Sunday-Roast-Leftovers2.png", "http://img.taste.com.au/Sj1dXXmc/taste/2016/11/roast-vegetable-cheese-cranberry-filo-pie-86940-1.jpeg", "https://familymealblog.files.wordpress.com/2013/10/sunday-pot-roast-pie.jpg", "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--837807_11.jpg", "https://taste.co.za/wp-content/uploads/2017/05/Roast-chicken-pie.jpg,"]
  var roast =  [`${user.username}'s life is the meaning of air`, `The poop hates ${user.username}'s smell more than it self.`, `${message.author.username} > ${user.username} > My life`, `${user.username} looks like they are the most popular home-schooled kid in ${message.author.username}'s school`, `${message.author.username} is curious, can knuckleheads collect unemployment? ${user.username} looks like they'd know`, `${user.username} is like counting stars which means that ${user.username} is a waste of air.`];
  const embed = new Discord.RichEmbed()
      .setColor(0xFFB200)
      .setTimestamp()
      .setThumbnail(`${pie[~~(Math.random() * pie.length)]}`)
      .addField(`Roast`, `${message.author.username} says... ${roast2[~~(Math.random() * roast2.length)]}`);
  
  if (user.id == message.author.id) {
    embed.setFooter(`Pie just roasted ${message.author.username}!`);
  } else {
    embed.setFooter(`${message.author.username} just roasted ${user.username}!`);
  }
  
  message.channel.send({embed});
}
