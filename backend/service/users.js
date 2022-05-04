const user = require('../model/users');
const {schema, schemaId} = require('../utils/users');

const getAll = async () => {
	const response = await user.getAll();

	return response;
};

const add = async (infos) => {
	const { name, email } = infos;

	const { error } = schema.validate({name, email});

	if(error) throw {status: 400, message: error.message};

	const response = await user.add(infos); 

	return response;
};

const att = async (infos) => {
	const { name, email, id } = infos;

	const { error } = schema.validate({name, email});

	const { error: errorId } = schemaId.validate(id);

	if(error) throw {status: 400, message: error.message};
	if(errorId) throw {status: 400, message: errorId.message};


	const response = await user.att(infos);

	return response; 
};

const del = async (infos) => {
	const { id } = infos;
	
	const getAll = await user.getAll();

	const existId = getAll.some(f => f.id === Number(id));

	if(!existId) throw {status: 400, message: 'id nao encontrado'};

	const { error: errorId } = schemaId.validate(id);

	if(errorId) throw {status: 400, message: errorId.message};

	const response = await user.del(infos);

	return response;
};

module.exports = {
	getAll,
	add,
	att,
	del
};