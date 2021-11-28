import Discord from 'discord.js'
import client from '../../Main/client.js'
import { Permissions } from 'discord.js'
import error from '../../Embeds/error.js'



const ban = (msg, args) => {

	let targetUser, reason, timePeriod
	let author = msg.guild.members.cache.get(msg.author.id);
	let self = msg.guild.members.cache.get(client.user.id);
	


	if (!msg.mentions.members.first()) {
		return msg.channel.send({embeds: [ error({
			num: 400,
			code: 'BAD_REQUEST',
			name: 'Missing parameter: [target-user]',
			value: 'You did not mention the member intended to ban.',
			help: '!Help Ban'
		}, msg.author)]})
	} else {
		targetUser = msg.mentions.members.first()
	}

	if (!args[2]) {

		return msg.channel.send({embeds: [ error({
			num: 400,
			code: 'BAD_REQUEST',
			name: 'Missing parameter: [time-period]',
			value: 'You did not mention the time period of ban.',
			help: '!Help Ban'
		}, msg.author)]})

	} else if (parseInt(args[2]) % 1 !== 0) {

		return msg.channel.send({embeds: [ error({
			num: 400,
			code: 'BAD_REQUEST',
			name: 'Incorrect parameter value: [time-period]',
			value: 'You did not provide a valid integer for the time period of the ban to last in days.',
			help: '!Help Ban'
		}, msg.author)]})

	} else {
		timePeriod = parseInt(args[2])
	}

	if (args.length == 3) {
		reason = 'unspecified'
	} else {
		args.shift()
		args.shift()
		args.shift()
		reason = args.join(' ');
	}

	

	if (targetUser.id === client.user.id) {

		return msg.channel.send({embeds: [ error({
			num: 403,
			code: 'FORBIDDEN',
			name: 'Forbidden to ban',
			value: 'You can not ban the bot itself.',
			help: '!Help Ban'
		}, msg.author)]})

	} else if (targetUser.id === author.user.id) {

		return msg.channel.send({embeds: [ error({
			num: 403,
			code: 'FORBIDDEN',
			name: 'Forbidden to ban',
			value: 'You can not ban yourself.',
			help: '!Help Ban'
		}, msg.author)]})

	}

	if (author.permissions.has([Permissions.FLAGS.BAN_MEMBERS]) == false) {

	 	return msg.channel.send({embeds: [ error({
			num: 401,
			code: 'BAD_REQUEST',
			name: 'Missing permissions: [BAN_MEMBERS]',
			value: 'You do not have the permission to ban someone.',
			help: '!Help Ban'
		}, msg.author)]})

	}

	if (self.permissions.has([Permissions.FLAGS.BAN_MEMBERS]) == false) {
	 	
		return msg.channel.send({embeds: [ error({
			num: 401,
			code: 'BAD_REQUEST',
			name: 'Missing permissions: [BAN_MEMBERS]',
			value: 'I do not have the permission to ban someone.',
			help: '!Help Ban'
		}, msg.author)]})

	}

	try {
		targetUser.ban({ days: timePeriod, reason: reason });
		// msg.channel.send(`// targetUser.ban({ days: ${timePeriod}, reason: ${reason} })`)
	} catch (err) {

		return msg.channel.send({embeds: [ error({
			num: 500,
			code: 'INTERNAL',
			name: 'Encountered an internal error',
			value: 'Sorry, we ran into an internal error. We will fix it ASAP. Report this problem.',
			help: '!Help Ban'
		}, msg.author)]});

	}
	
	let kickDet = new Discord.MessageEmbed()
	.setTitle('Ban details')
	.setAuthor(`${client.user.username} moderation`)
	.setDescription(`Successfully banned ${targetUser.user.username}! \n Reason: \` ${reason} \`\nTime period: \` ${timePeriod} \` `)
	.setColor('#ff0000')

	
	return msg.channel.send({ embeds: [kickDet] })

}

const meta = {
	name: 'Ban',
	description: 'Bans a user from the guild for a specific time period and with a reason.',
	syntax: '!Ban @[user] [time-period-in-days] [reason]',
	category: 'Moderation',
	perms: 'BAN_MEMBERS',
	version: '2.0',
	comm: 'Added in aplha 1.3 as a basic command.'
}

export {meta}

export default ban