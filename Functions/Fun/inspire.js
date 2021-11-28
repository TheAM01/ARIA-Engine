import error from '../../Embeds/error.js'
import fetch from 'node-fetch'
import inspireEmbed from '../../Embeds/inspire-embed.js'


async function inspire (msg, args) {

	const url = 'https://inspirobot.me/api?generate=true'
	
	const imageURL = await fetch(url)

	msg.channel.send({embeds: [inspireEmbed(msg, args, {
		image: await imageURL.text()
	})]})
}

const meta = {
	name: 'Inspire',
	description: 'Sends an AI-generated quote.',
	syntax: '!Inspire',
	category: 'Fun',
	perms: 'none',
	version: '1.0',
	comm: 'added in alpha 1.5'
}


export { meta }
export default inspire