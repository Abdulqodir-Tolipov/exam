import { read, write } from '../../lib/orm.js'

const register = ({ username, birth, email, gender, password }) => {
	let users = read('users')
	let user_id = users.length ? users[ users.length - 1 ].user_id + 1 : 1
	let newUser = { user_id, username, birth, email, gender, password }
	users.push(newUser)
	console.log(users);
	if( write('users', users) ) {
		return newUser
	}
}

export default {
	register
}