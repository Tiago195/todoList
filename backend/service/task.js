const model = require('../model/task');

const get = async (id) => {
	const response = await model.get(id);

	return response;
};

module.exports = {
	get
};