const Joi = require('joi');

const schema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string().email().required(),
});

const schemaId = Joi.number().required();

module.exports = {
	schema,
	schemaId,
};