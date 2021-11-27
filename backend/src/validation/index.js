const Joi = require("joi");

const schema = Joi.object({
	date: Joi.date().required(),
	id: Joi.string().regex(
		/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
	).message('ID is in the wrong format'),
});

module.exports = schema;
