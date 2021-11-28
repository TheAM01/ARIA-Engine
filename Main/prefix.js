import db from './database.js'

async function prefix (msg) {

	let pf = await db.get(`${msg.guild.id}_prefix`);

	if (!pf || pf == null || pf == undefined) {
		pf = '!'
	}

	return pf
}

export default prefix