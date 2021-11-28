import {Client, Intents} from 'discord.js';

export default new Client({
	intents: [
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILDS
	]
})