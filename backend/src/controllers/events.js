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

async function getEventbyDate(req, res) {
	try {
		const { date } = req.body;
		const endDate = new Date(date);
		const startDate = new Date(date).toISOString().substring(0, 10);
		const setNextDate = endDate.setUTCDate(endDate.getUTCDate() + 1);
		const getEndDate = new Date(setNextDate).toISOString().substring(0, 10);
		const response = await DBquery.getEventsForSpecificDate(startDate, getEndDate);
		return successResponse(res, 200, response);
	} catch (error) {
		console.log(error)
		return errorHelper(res, 500, error);
	}
}

module.exports = { getAllEvents, getEventbyDate };
