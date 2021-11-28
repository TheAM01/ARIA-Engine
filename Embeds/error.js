import Discord from 'discord.js'
import client from '../Main/client.js'


const error = (oops, person) => {
	
	const errorEmbed = new Discord.MessageEmbed()
	.setTitle(`Error ${oops.num}`)
	.setAuthor(`${client.user.username} error`, client.user.displayAvatarURL())
	.setDescription(`Command failed to execute due to following reasons`)
	.addFields(
		{
			name: oops.name, value: oops.value
		}, {
			name: 'What can you do?', value: `You can refer to: \n\`\`\`${oops.help}\`\`\``
		}
	)
	.setFooter(`${oops.code}?num=${oops.num}&id=${person.id}`, person.displayAvatarURL());

	return errorEmbed

}

export default error