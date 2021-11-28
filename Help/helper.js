import Discord from 'discord.js'
import error from '../Embeds/error.js'
import help from '../Embeds/help.js'

import {meta as kick} from '../Functions/Moderation/kick.js'
import {meta as ban} from '../Functions/Moderation/ban.js'
import {meta as ud} from '../Functions/Fun/ud.js'
import {meta as wiki} from '../Functions/Fun/wiki.js'
import {meta as inspire} from '../Functions/Fun/inspire.js'
import {meta as log} from '../Embeds/log.js'

import general from './help-general.js'
import fun from './help-fun.js'
import misc from './help-misc.js'
import moderation from './help-moderation.js'



const helper = (msg, args) => {

	let helpCase

	if (args.length < 2) {
		helpCase = 'general'
	} else {
		helpCase = args[1].toString().toLowerCase()
	}

	// Categories help

	if (helpCase === 'fun') {
		return fun(msg, args, msg.author)
	}

	if (helpCase === 'moderation') {
		return moderation(msg, args, msg.author)
	}

	if (helpCase === 'general') {
		return general(msg, args, msg.author)
	}

	if (helpCase === 'misc' || helpCase === 'miscellaneous') {
		return misc(msg, args, msg.author)
	}

	if (helpCase === 'all') {
		return msg.channel.send({embeds: [
			error ({
				num: 401,
				code: 'UNAUTHORIZED',
				name: 'You are not authorized',
				value: 'This command is restricted because it is under development. Only the development team can access this command. Please check back later.',
				help: '!Help'
			}, msg.author)
		]})
	}

	// Individual commands help

	if (helpCase === 'kick') {
		return msg.channel.send( { embeds: [help(kick, msg.author)] } )
	}

	if (helpCase === 'ban') {
		return msg.channel.send( { embeds: [help(ban, msg.author)] } )
	}

	if (helpCase === 'ud') {
		return msg.channel.send( { embeds: [help(ud, msg.author)] } )
	}

	if (helpCase === 'log') {
		return msg.channel.send( { embeds: [help(log, msg.author)] } )
	}

	if (helpCase === 'wiki' || helpCase === 'wikipedia') {
		return msg.channel.send( { embeds: [help(wiki, msg.author)] } )
	}

	if (helpCase === 'inspire' || helpCase === 'quote') {
		return msg.channel.send( { embeds: [help(inspire, msg.author)] } )
	}


	else {
		return msg.channel.send({embeds: [
			error ({
				num: 404,
				code: 'NOT_FOUND',
				name: 'Could not find requested help',
				value: `We could not find help for the requested function: \` ${helpCase} \``,
				help: '!Help'
			}, msg.author)
		]})
	}
}

export default helper