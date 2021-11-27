const { errorHelper } = require("../helpers/response");
const schema = require("../validation/index");

async function validateDateorId(req, res, next) {
	try {
		const { date } = req.body;
		const { id } = req.params;
		await schema.validateAsync({ date, id });
		next();
	} catch (error) {
		console.log(error)
		return errorHelper(res, 400, error.details[0].message);
	}
}

module.exports = {
	validateDateorId,
};
