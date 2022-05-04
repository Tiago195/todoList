const express = require('express');
const task = require('./controller/task');
const users = require('./router/users');

const app = express();

app.use(express.json());

app.use('/users', users);

app.get('/task/:id', task.get);

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, _next) => {
	if(error.status) return res.status(error.status).json(error);

	res.status(500).json({message: 'alguma coisa deu aqui e eu n estava esperando'});
});

app.all('*', (req, res) => {
	res.status(404).json({message: 'rota nao encontrada'});
});

app.listen(3000, () => console.log('Rodando na porta ' + 3000));