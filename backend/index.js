const express = require('express');
const task = require('./controller/task');
const users = require('./controller/users'); 

const app = express();

app.use(express.json());

app.get('/users', users.getAll);

app.post('/users', users.add);

app.put('/users', users.att);

app.delete('/users/:id', users.del);

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