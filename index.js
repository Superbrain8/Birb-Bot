const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')
require('dotenv').config()
const prefix = process.env.PREFIX

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message',async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'bird' || command === 'birb') {
        const { link} = await fetch('https://some-random-api.ml/img/birb').then(response => response.json()).catch(console.error());
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Here is a Birb')
		.setImage(link)
	
	message.channel.send(embed);
   
	} 
	
});








client.login(process.env.BOT_TOKEN).catch(console.error);