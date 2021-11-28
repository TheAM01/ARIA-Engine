import { MessageEmbed } from 'discord.js'
import error from './error.js'
import client from '../Main/client.js'


function inspire (msg, args, obj) {

	const inspireEmbed = new MessageEmbed()
	.setTitle(`Inspiration for ${msg.author.username}`)
	.setImage(obj.image)
	.setColor('39ad58')
	.setFooter(`INSPIRE?id=${msg.author.id}`)
	
	
	return inspireEmbed

}


export default inspire