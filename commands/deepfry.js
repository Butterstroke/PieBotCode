var Jimp = require("jimp");

exports.run = function(client, message, args) {
	let imageurl = args[0] === undefined ? message.attachments.first() : { url: args[0] };

    if (imageurl === undefined) { return message.channel.send("**Please attach an image, or give a url to an image**"); }

    imageurl = imageurl.url;

    Jimp.read(imageurl).then(function (image) {
		image.posterize(100).getBuffer(Jimp.MIME_PNG, (error, buffer) => {
            message.channel.send("", {
                files: [{ attachment: buffer, name: "deepfried.png" }]
            });
        });
    });
}
