import Discord from 'discord.js'
import client from './Main/client.js'
import messageCommands from './Handlers/messages.js'
import info from './Main/info.js'
import c from 'colors'
import update from './Server/repl-update.js'
import db from './Main/database.js'
console.clear()


client.on('ready', async () => {

	let upNum = await update();

	console.log(`${info.mode} ${info.version}@${upNum} of ${info.name}:\n`.green)
	console.log(`> Established successful connection with Discord Application Programming Interface (v3).\n> Logged in as child ARAI-ICP: `.brightBlue + `${client.user.tag}`.red);

	// ICP: Individual Child Program

	client.user.setActivity('!Help', { type: 'LISTENING' });

});



client.on('messageCreate', messageCommands);

client.login(process.env.TOKEN)