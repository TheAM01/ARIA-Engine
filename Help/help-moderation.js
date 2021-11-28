import { MessageEmbed } from 'discord.js'
import client from '../Main/client.js'
import info from '../Main/info.js'


function helper (msg, args, person) {

	const log = new MessageEmbed()
	.setTitle(`Moderation Help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setDescription(`This is the list of commands available in ${client.user.username}.\nRun the corresponding help command for each command to get its details and syntax.`)
	.addFields(
		{
			name: 'Kick', value: c('!Help Kick')
		}, {
			name: 'Ban', value: c('!Help Ban')
		}
	)
	.setColor('#39ad58')
	.setFooter(`HELP?id=${person.id}&index=moderation`, person.displayAvatarURL())

	return msg.channel.send({embeds: [log]})

}


function c (elon) {
	return `\`\`\`${elon}\`\`\``
}


const meta = {
	name: 'Moderation Help',
	description: 'Lists all moderation commands.',
	syntax: '!Help Moderation',
	category: 'Help',
	perms: 'none',
	version: '1.0',
	comm: 'Added in Alpha 1.6'
}


export {meta}
export default helper