# Object mapping guide

This contains the rules for the declaration and mapping of common objects in the HP Bot.

### Error object:

```js
let sampleErrorObj = {
	num: 'Error number',
	code: 'ERROR_CODE',
	name: 'Error heading',
	value: 'A brief description of the error',
	help: 'help for the command'
}
```

#### Example:

```js
let forbiddenErr = {
	num: 403',
	code: 'FORBIDDEN',
	name: 'This command is forbidden',
	value: 'You can not access this command.',
	help: '!Help'
}
```
---


### Search object:

```js
let sampleSearchObj = {
	term: 'The search term',
	fields: [
		{
			name, value
		}, {
			name, value
		}
	]
}
```

#### Example:

```js
let videoResults = {
	term: 'Cute cats',
	fields: [
		{
			name: 'Cute cat video 1', value: 'https://youtube.com/watch?v=dQw4w9WgXcQ'
		}, {
			name: 'Cute cat video 2', value: 'https://youtube.com/watch?v=6n3pFFPSlW4'
		}, {
			name: 'Cute cat video 3', value: 'https://youtube.com/watch?v=fC7oUOUEEi4'
		}
	]
}
```
---

### Meta object:

```js
const meta = {
	name: 'command name',
	description: 'command description',
	syntax: 'command syntax',
	category: 'category',
	perms: 'required permissions',
	version: 'version of the command',
	comm: 'additional comments [unread]'
}
```

#### Example:
```js
const meta = {
	name: 'Kick',
	description: 'Kick a user from the guild for a specific time period and with a reason.',
	syntax: '!Kick @[user] [reason]',
	category: 'Moderation',
	perms: 'KICK_MEMBERS',
	version: '1.1',
	comm: 'Added in aplha 1.3 as a basic command.'
}
```
---