const Joi = require("joi");

const schema = Joi.object({
	date: Joi.date().required(),
	id: Joi.string(),
});

module.exports = schema;
