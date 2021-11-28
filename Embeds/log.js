import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'


function logger (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`Change Log`)
	.setAuthor(`${client.user.username} system`, client.user.displayAvatarURL())
	.setDescription(`Whats new in ${client.user.username} v${info.version}?`)
	.addFields(
		{
			name: 'Fixed bugs', value: 'Fixed major bugs in many sectors'
		}, {
			name: 'New command', value: 'Added the Wikipedia search command.'
		}, {
			name: 'New command', value: 'Added the Inspire command'
		}, {
			name: 'New help format', value: 'You can now call help for command cateories along with individual commands.'
		}
	)
	.setColor('#39ad58')
	.setFooter(`LOG?id=${person.id}`, person.displayAvatarURL())

	return msg.channel.send({embeds: [log]})

}


const meta = {
	name: 'Change Log',
	description: 'Lists all the new features added in the latest bot/engine update.',
	syntax: '!log',
	category: 'System',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.3'
}


export {meta}
export default logger