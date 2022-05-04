const connection = require('./index');

const getAll = async () => {
	const [response] = await connection.execute('SELECT * FROM todoList.users');

	return response;
};

const add = async ({name, email}) => {
	const [{ insertId }] = await connection.execute('INSERT INTO todoList.users (name, email) VALUES (?, ?)', [name, email]);

	const result = {
		id: insertId,
		name,
		email
	};

	return result;
};

const att = async ({name, email, id}) => {
	const query = `UPDATE todoList.users as us
		SET us.name = ?, us.email =? WHERE us.id = ?`;

	await connection.execute(query, [name, email, id]);
	const result = {
		id: Number(id),
		name,
		email
	};

	return result;
};

const del = async ({id}) => {
	await connection.execute('DELETE FROM todoList.users WHERE id = ?', [id]);

	const result = {
		id: Number(id),
	};

	return result;
};

module.exports = {
	getAll,
	add,
	att,
	del
};