const Discord = require('discord.js');
const client = new Discord.Client();
const ffmpeg = require('ffmpeg');

exports.run = function(client, message, args) {	
	if (!message.member.voiceChannel) {
        const embed = new Discord.RichEmbed()
            .setColor(0xFFB200);
        if (args === "leave") { embed.addField(':radio: | Before making me leave...', "join back into the voice channel!"); } 
        else { embed.addField(`:radio: | Before streaming ${radioName}...`, "Join a voice channel!"); }
          
        return message.channel.send({embed});
	}
	
	const embed = new Discord.RichEmbed()
    	.setColor(0xFFB200)
        .addField(':radio: | Now streaming...', `**${radioName}!**`);
	
	if (message.content === 'p.radio mix') {
        radioName = "Mix 102.3";
      	radioStream = "http://icecast.arn.com.au/1023.mp3";
  	} else if (message.content === 'p.radio nova919') {
        radioName = "Nova 91.9";
        radioStream = "http://117.53.162.168/nova919";
    } else if (message.content === 'p.radio fall1') {
        radioName = "Fallout Main Station";
        radioStream = "http://46.101.243.245:8000/falloutfm1.ogg";
    } else if (message.content === 'p.radio fall2') {
        radioName = "Fallout Classical Radio";
        radioStream = "http://46.101.243.245:8000/falloutfm7.ogg";
    } else if (message.content === 'p.radio fall3') {
        radioName = "Diamond City Radio";
        radioStream = "http://46.101.243.245:8000/falloutfm6.ogg";
    } else if (message.content === 'p.radio fall4') {
        radioName = "MWTCF";
        radioStream = "http://46.101.243.245:8000/falloutfm8.ogg";
    } else if (message.content === 'p.radio fall5') {
        radioName = "Galaxy News Radio";
        radioStream = "http://46.101.243.245:8000/falloutfm2.ogg";
    } else if (message.content === 'p.radio fall6') {
        radioName = "NV Radio (New Vegas)";
        radioStream = "http://46.101.243.245:8000/falloutfm3.ogg";
    } else if (message.content === 'p.radio kissfresh') {
        radioName = "Kiss Fresh";
        radioStream = "http://icy-e-bl-06-cr.sharp-stream.com:8000/kissfresh.mp3";
    } else if (message.content === 'p.radio clyde1') {
        radioName = "Clyde1";
        radioStream = "http://icy-e-bl-07-boh.sharp-stream.com/clyde1.mp3";
    } else if (message.content === 'p.radio coolfm') {
        radioName = "Cool FM";
        radioStream = "http://icy-e-bl-09-boh.sharp-stream.com/coolfm.mp3";
    } else if (message.content === 'p.radio iloveradio1') {
        radioName = "ILoveRadio 1";
        radioStream = "http://stream06.iloveradio.de/iloveradio5.mp3";
    } else if (message.content === 'p.radio iloveradio2') {
        radioName = "ILoveRadio 2";
        radioStream = "http://stream06.iloveradio.de/iloveradio2.mp3";
    } else if (message.content === 'p.radio pophits') {
        radioName = "Pop Hits";
        radioStream = "http://rfcmedia.streamguys1.com/newpophits.aac";
    } else if (message.content === 'p.radio kissfm') {
        radioName = "Kiss FM";
        radioStream =  "http://live-kiss.sharp-stream.com/kissnational.mp3?direct=true&amsparams=playerid%3ABMUK_html5%3Bskey%3A1505123221%3B&awparams=loggedin%3Afalse%3B";
    } else if (message.content === 'p.radio power181') {
        radioName = "Power 181";
        radioStream = "http://listen.181fm.com/181-power_128k.mp3";
    } else if (message.content === 'p.radio powerhitradio') {
        radioName = "Power Hit Radio";
        radioStream = "http://power-stream.data.lt:8000/PHR.mp3";
    } else if (message.content === 'p.radio prambors') {
        radioName = "Prambors FM"; 
        radioStream = "http://masima.rastream.com/masima-pramborsjakarta?awparams=companionads%3Afalse%3Btags%3Aradioactive%3Bstationid%3Amasima-pramborsjakarta&playerid=Prambors_web&authtoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvaWQiOiJsYXlsaW8iLCJpYXQiOjE1MDUzMDAzMTMsImV4cCI6MTUwNTM4NjcxM30.XG2x8lcDAHTERSrPUtppMN5K3T7vDc8J6nBKq-n89WU&lan=%5B%22en%22%5D&setLanguage=true";
    } else if (message.content === 'p.radio mofm') {
        radioName = "Mo-FM";
        radioStream = "https://streaming.radionomy.com/Mo-FMToday?cntUid=8d8df583-258a-4ca9-8630-0434d910287a&lang=en-GB%2cen-US%3bq%3d0.8%2cen%3bq%3d0.6&ad=radiono5&appName=website";
    } else if (message.content === 'p.radio leave') {
        message.member.voiceChannel.leave()
        const embed1 = new Discord.RichEmbed()
            .setColor(0xFFB200)
            .addField(':radio:', "Now leaving the voice channel!");
        return message.channel.send({embed: embed1});
    } else {
        const embed = new Discord.RichEmbed()
            .setColor(0xFFB200)
            .setAuthor(`Radio`, `http://www.iconsfind.com/wp-content/uploads/2016/04/20160406_57047879ab121.png`)
            .setTitle('Listen to online radio!')
            .setDescription('To use, do **p.radio mofm** or something like dat.\nto make me leave the Voice Channel, do **p.radio leave**!')
            .addField('Stations Available:', '**mofm**, **prambors**, **mix**, **powerhitradio**, **pophits**, **nova919**, **iloveradio1**, **iloveradio2**, **clyde1**, **coolfm**, **kissfresh**, **kissfm**, **fall1**, **fall2**, **fall3**, **fall4**, **fall5**, **fall6**');
        return message.channel.send({embed});
    }
    message.member.voiceChannel.join().then(connection => {
        const dispatcher = connection.playStream(radioStream, {passes: 4});
    }).catch(console.log);

    message.channel.send({embed});
}
