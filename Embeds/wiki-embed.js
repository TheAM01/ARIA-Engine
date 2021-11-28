import { MessageEmbed } from 'discord.js'
import error from './error.js'
import client from '../Main/client.js'


function wiki (msg, args, obj) {

	const wikiEmbed = new MessageEmbed()
	.setTitle(`${msg.author.username}'s Wikipedia search results`)
	.setAuthor(`${client.user.username} fun`, client.user.displayAvatarURL())
	.setURL(obj.url)
	.addFields(
		{
			name: obj.title, value: obj.extract
		}
	)
	.setColor('#39ad58')
	.setImage(obj.image, {size: 2048})
	.setFooter(`WIKI?id=${msg.author.id}&type=${obj.type}`)
	
	
	return wikiEmbed

}


export default wiki