const services = require('../service/task');

const get = async (req, res) => {
	const { id } = req.params;
	const response = await services.get(id);

	res.status(200).json(response);
};

module.exports = {
	get,
};