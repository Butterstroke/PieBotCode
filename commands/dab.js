const Discord = require('discord.js');

exports.run = function(client, message) {
	var dab = ['https://thumb7.shutterstock.com/display_pic_with_logo/872875/659678185/stock-photo-dab-dance-sign-with-arms-on-face-light-background-659678185.jpg', 'http://c8.alamy.com/comp/S1DPEJ/dab-dance-S1DPEJ.jpg', 'https://thumb7.shutterstock.com/display_pic_with_logo/5568/575293711/stock-photo-guy-making-dab-portrait-in-studio-isolated-on-gray-background-575293711.jpg', 'https://thumb1.shutterstock.com/display_pic_with_logo/1497380/674726767/stock-vector-young-black-character-making-dab-dance-flat-editable-vector-illustration-clip-art-674726767.jpg', 'https://thumb1.shutterstock.com/display_pic_with_logo/872875/649898758/stock-photo-dab-dancing-for-a-child-light-background-649898758.jpg', 'http://media.istockphoto.com/vectors/bear-polar-bear-dab-dance-vector-illustration-doodle-cartoon-vector-id697636204', 'http://media.istockphoto.com/vectors/bear-polar-bear-dab-dance-vector-illustration-doodle-cartoon-vector-id697636204', 'https://m.popkey.co/2f51a1/mr1J5_s-200x150.gif', 'https://media.tenor.com/images/86bc84d0da90ec77f69aadd69d9bb908/tenor.gif', 'https://media.tenor.com/images/c7cad3abd774460efb1b2925c1ae12c8/tenor.gif', 'https://media.giphy.com/media/UiQGTTjmUeqJy/giphy.gif', 'https://media.tenor.com/images/19ccc037935940f16dffb352cf51107d/tenor.gif', 'https://media.tenor.com/images/5a0f107de65b714bc75914d963fa8fff/tenor.gif', 'https://i.giphy.com/media/26BoCmMxp5z6UVpuw/giphy.webp', 'https://media.tenor.com/images/fc64218e0e6a74dd75e1238c4698a35e/tenor.gif', 'https://i.giphy.com/media/3oriNYlvyw96TVUJP2/source.gif', 'https://media.tenor.com/images/befe68428b2299556c7c1046f90050fc/tenor.gif', 'https://i.giphy.com/media/l3q2FOeVbpGSqHj4Q/giphy.webp', 'https://i.giphy.com/media/vY6LB677LBwVa/source.gif', 'https://i.giphy.com/media/3o6gDYird9MvL8aXsY/giphy.webp', 'https://st3.depositphotos.com/2018053/13899/i/1600/depositphotos_138991856-stock-photo-girl-making-dab.jpg', 'https://previews.123rf.com/images/ric510/ric5101406/ric510140600001/30675044-fresh-line-caught-flatfish-common-dab-Stock-Photo.jpg', 'https://st3.depositphotos.com/2018053/13899/i/1600/depositphotos_138991802-stock-photo-girl-making-dab.jpg', 'https://image.shutterstock.com/z/stock-photo-guy-making-dab-532110253.jpg', 'https://thumb1.shutterstock.com/display_pic_with_logo/1788713/612842498/stock-photo-skeleton-of-human-dancing-dab-on-black-background-isolated-perform-dabbing-move-gesture-posing-612842498.jpg', 'https://thumb1.shutterstock.com/display_pic_with_logo/516562/537941173/stock-photo-santa-claus-dab-dabbing-isolated-on-white-background-537941173.jpg', 'https://thumb7.shutterstock.com/display_pic_with_logo/5568/545013991/stock-photo-guy-making-dab-portrait-in-studio-isolated-on-white-background-545013991.jpg', 'https://previews.123rf.com/images/piovesempre/piovesempre1701/piovesempre170100057/70489323-Guy-making-Dab-portrait-in-studio-isolated-on-white-background-Stock-Photo.jpg', 'https://previews.123rf.com/images/piovesempre/piovesempre1701/piovesempre170100151/70489991-Guy-making-Dab-portrait-in-studio-isolated-on-white-background-Stock-Photo.jpg', 'http://c8.alamy.com/comp/B9K52C/barratt-sherbet-dib-dab-B9K52C.jpg', 'https://thumb9.shutterstock.com/display_pic_with_logo/5568/575296402/stock-photo-girl-with-black-hat-making-dab-isolated-on-gray-background-575296402.jpg', 'http://media.gettyimages.com/photos/confident-young-woman-doing-the-dab-dance-move-picture-id516823882', 'https://thumb1.shutterstock.com/display_pic_with_logo/5568/575296447/stock-photo-girl-with-black-hat-making-dab-isolated-on-gray-background-575296447.jpg', 'https://thumb7.shutterstock.com/display_pic_with_logo/2187713/558930085/stock-photo-guy-making-dab-dance-558930085.jpg']
	const embed = new Discord.RichEmbed()
		.setColor(0xFFB200)
		.addField('Dab', `Dab on those ${message.author.username}'s!`)
		.setImage(`${dab[~~(Math.random() * dab.length)]}`)
	message.channel.send({embed});
}
