const DBquery = require("../database/queries.js");
const {
	successResponse,
	errorHelper,
	manipulateDate,
} = require("../helpers/response.js");

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
		const id = "df50cac5-293c-490d-a06c-ee26796f850d";
		const manipulatedDate = manipulateDate(date);

		const response = await DBquery.getEventsForSpecificDate(
			manipulatedDate.startDate,
			manipulatedDate.getEndDate,
			id
		);
		return successResponse(res, 200, response);
	} catch (error) {
		console.log(error);
		return errorHelper(res, 500, error);
	}
}

async function getEventsbyDateAndId(req, res) {
	try {
		const { id } = req.params;
		const { date } = req.body;
		const manipulatedDate = manipulateDate(date);
		const response = await DBquery.getEventsForSpecificDate(
			manipulatedDate.startDate,
			manipulatedDate.getEndDate,
			id
		);
		return successResponse(res, 200, response);
	} catch (error) {
		return errorHelper(res, 500, error);
	}
}

module.exports = { getAllEvents, getEventbyDate, getEventsbyDateAndId };
