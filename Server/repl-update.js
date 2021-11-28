import db from '../Main/database.js'


const update = async () => {

	let upNum = await db.get('update');

	if (!upNum || upNum == null || upNum == undefined) {
		upNum = 0
	}

	upNum++
	
	await db.set('update', upNum)

	return upNum
}

export default update