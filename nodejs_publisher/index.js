var mqtt = require('mqtt');
var client  = mqtt.connect('mqtt://[broker IP Address]:[broker port number]');
client.on('connect', function () {
	setInterval(function() {
	client.publish('presence', 'Turn on the light');
	console.log('Message Sent');
	}, 5000);
});
