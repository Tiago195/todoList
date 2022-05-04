const express = require('express');
const users = require('../controller/users'); 

const app = express.Router();

app.get('/', users.getAll);

app.post('/', users.add);

app.put('/', users.att);

app.delete('/:id', users.del);

module.exports = app;