# File templates

## Embed template

Embed template

```js
import { MessageEmbed } from 'discord.js'
import error from './error.js'
import client from '../Main/client.js'


function embedFunction (msg, args, obj) {

	const embed = new MessageEmbed()
	
	
	return embed

}


export default embedFunction
```

## Function template

```js
import error from '../../Embeds/error.js'


function foo (msg, args) {

}

const meta = {
	name: 'command name',
	description: 'command description',
	syntax: 'command syntax',
	category: 'category',
	perms: 'required permissions',
	version: 'version of the command',
	comm: 'additional comments [unread]'
}


export { meta }
export default foo
```