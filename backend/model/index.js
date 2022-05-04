const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	password: 'tutu',
	user: 'root',
	database: 'todoList'
});

module.exports = connection;