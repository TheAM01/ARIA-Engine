import {MessageEmbed} from 'discord.js'
import client from '../Main/client.js'


const helpEmbed = (help, person) => {

	return new MessageEmbed()
	.setTitle(`${help.name} command help`)
	.setAuthor(`${client.user.username} help`, client.user.displayAvatarURL())
	.setColor('#39ad58')
	.setDescription(`**About the command:**\n${help.description}`)
	.addFields(
		{
			name: 'Category', value: help.category
		}, {
			name: 'Standard syntax', value: `\`\`\`${help.syntax}\`\`\``
		}, {
			name: 'Required permissions', value: `\` ${help.perms} \``
		}
	)
	.setFooter(`HELP?id=${person.id}&index=${help.name}`, person.displayAvatarURL())

}

export default helpEmbed