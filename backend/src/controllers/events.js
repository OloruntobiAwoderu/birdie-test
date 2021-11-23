const DBquery = require("../database/queries.js");
const { successResponse, errorHelper } = require("../helpers/response.js");

async function getAllEvents(req, res) {
	try {
		const response = await DBquery.getAll();
		return successResponse(res, 200, response);
	} catch (error) {
		return errorHelper(res, 500, error);
	}
}

module.exports = { getAllEvents };
