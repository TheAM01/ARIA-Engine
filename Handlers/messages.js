import client from '../Main/client.js'
import kick from '../Functions/Moderation/kick.js'
import ban from '../Functions/Moderation/ban.js'
import help from '../Help/helper.js'
import ud from '../Functions/Fun/ud.js'
import wiki from '../Functions/Fun/wiki.js'
import inspire from '../Functions/Fun/inspire.js'
import log from '../Embeds/log.js'


export default async function cmd (msg) {
	
	if (msg.author.id === client.user.id) return;
	if (!msg.content) return
	let args = msg.content.split(' ').filter((x) => x !== '');
	let command = args[0].toString().toLowerCase();


	if (msg.content.toUpperCase().includes('TARS')) {
		return msg.reply('TARS A.1.3 reporting.')
	}

	if (command === '!kick') {
		return await kick (msg, args);
	}

	if (command === '!ban') {
		return await ban (msg, args)
	}

	if (command === '!help') {
		return await help (msg, args)
	}

	if (command === '!ud') {
		return await ud (msg, args)
	}

	if (command === '!log') {
		return await log (msg, args, msg.author)
	}

	if (command === '!wiki' || command === '!wikipedia') {
		return await wiki (msg, args)
	}

	if (command === '!inspire' || command === '!quote') {
		return await inspire (msg, args)
	}

}