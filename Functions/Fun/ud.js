import ud from 'urban-dictionary'
import { MessageEmbed } from 'discord.js'
import client from '../../Main/client.js'
import error from '../../Embeds/error.js'


async function search (msg, args) {

	let term;

	if (!args[1]) {

		return msg.channel.send({
			embeds: [ error({
				num: 400,
				code: 'BAD_REQUEST',
				name: 'Missing parameter: [term]',
				value: 'Please define a term to search on the Urban Dictionary',
				help: '!Help ud'
			}, msg.author)]
		})

	} else {
		args.shift()
		term = args.join(' ')
	}

	let result = await ud.define(term)
	.then(results => {
		return results
	})
	.catch(err => {

		msg.channel.send({
			embeds: [ error({
				num: 404,
				code: 'NOT_FOUND',
				name: 'No results found',
				value: `No results found for your keyword \` ${term} \`. Try another search.`,
				help: '!Help ud'
			}, msg.author)]
		});

		console.log(err)

		return

	});

	if (!result) {
		return
	}

	let resultFields = [];
	

	for (let i = 0; i < 4; i++) {

		let val = {
			definition: result[i].definition.replace(/[\[\]]+/g,''),
			link: result[i].permalink,
			author: result[i].author,
			votes: result[i].thumbs_up,
			example: result[i].example.replace(/[\[\]]+/g,'')
		}

		if (val.definition.length > 400) {
			console.log('Greater then 200')
			continue
		}

		resultFields.push(
			{
				name: `__**Result ${i + 1}**__`,
				value: `
				**Definition**:\n${val.definition}
				**Link**:\n${val.link}
				**Author**: \` ${val.author} \`
				**Votes**: \` ${val.votes} \`
				**Example**:\n\`\`\`${val.example}\`\`\``
			}
		)
	}

	console.log(resultFields)


	// return msg.channel.send(result[0].example.replace(/[\[\]']+/g,''))

	const resultEmbed = new MessageEmbed()
	.setTitle(`${msg.author.username}\'s Urban Dictionary Search Results`)
	.setAuthor(`${client.user.username} fun`, client.user.displayAvatarURL())
	.setDescription(`Following are the top 3 results in order of relevance for \` ${term} \` on the Urban Dictionary`)
	.addFields(resultFields)
	.setColor('#39ad58')
	.setFooter(`UD?term=${args.join('+')}&id=${msg.author.id}`)

	return msg.channel.send({embeds: [resultEmbed]})
	.catch(err => {
		
		msg.channel.send({
			embeds: [ error({
				num: 500,
				code: 'INTERNAL',
				name: 'Internal error',
				value: '```' + err.toString() + '```',
				help: '!Help ud'
			}, msg.author)]
		})
	})

}


const meta = {
	name: 'Urban Dictionary',
	description: 'Searches for stuff on the urban dictionary, returns 3 results.',
	syntax: '!ud [term]',
	category: 'Fun',
	perms: 'none',
	version: '1.5',
	comm: 'Added in Alpha 1.3'
}


export {meta}
export default search