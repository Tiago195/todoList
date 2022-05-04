const connection = require('./index');

const get = async (id) => {
	const [response] = await connection.execute('SELECT * FROM todoList.tasks WHERE id_user = ?', [id]);

	return response;
};

module.exports = {
	get
};