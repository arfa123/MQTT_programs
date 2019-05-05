var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://[broker IP Address]:[broker port number]')
client.on('connect', function () {
	console.log("Subscriber connected to Broker");
    	client.subscribe('presence');
});
client.on('message', function (topic, message) {
	context = message.toString();
	console.log(context)
});
