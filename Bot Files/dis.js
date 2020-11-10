const Discord = require('discord.js');

//Bot created
const client = new Discord.Client();

// User will have to type . to get the bot working

const prefix = '.';

//These two lines of code will store the amount of commands
const fs = require('fs');

client.commands = Discord.Collection();

//Ensure to read javescript files
const commandFiles = fs.readdirSync('');


//allows bot to be online, console.log tells you if it is
//State the bot is online in command promt
client.once('ready', () => {
    console.log('Disciples bot is online!');
});


//Commands so far
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'speak'){
        message.channel.send('Yes my lord?');
    } else if (command === 'angel'){
        message.channel.send('For thy Highfather.');
    } else if (command === 'demon'){
        message.channel.send('Die Sinestra!');
    } else if (command === 'undead'){
        message.channel.send('Fresh Blood at Last!');
    } else if (command === 'dwarf'){
        message.channel.send('KA BRAWL!');
    } else if (command === 'elf'){
        message.channel.send('You found me.');
    } else if (command === 'elfded'){
        message.channel.send('I TRUSTED YOU!');
    }
});

//Ending line, token
client.login('');
