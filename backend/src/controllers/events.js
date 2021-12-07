const { cos } = require("prelude-ls");
const DBquery = require("../database/queries.js");
const {
	successResponse,
	errorHelper,
	manipulateDate,
} = require("../helpers/response.js");

async function getAllEvents(req, res) {
	try {
		const response = await DBquery.getAll();
		const events = response.map((r) =>
        JSON.parse(r.payload)
      );
		return successResponse(res, 200, "Items successfully fetched", events);
	} catch (error) {
		return errorHelper(res, 500);
	}
}

async function getEventbyDate(req, res) {
	try {
		const { date } = req.query;
		const id = "df50cac5-293c-490d-a06c-ee26796f850d";
		const manipulatedDate = manipulateDate(date);

		const response = await DBquery.getEventsForSpecificDate(
			manipulatedDate.startDate,
			manipulatedDate.getEndDate,
			id
		);
		const events = response.map((event) =>
        JSON.parse(event.payload)
      );
		if (response.length > 0) return successResponse(res, 200, "Items successfully fetched", events);
		
		return successResponse(res, 404, "Events for this date do not exist");
	} catch (error) {
		console.log(error)
		return errorHelper(res, 500);
	}
}

async function getEventsbyDateAndId(req, res) {
	try {
		const { id } = req.params;
		const { date } = req.query;
		const manipulatedDate = manipulateDate(date);
		const response = await DBquery.getEventsForSpecificDate(
			manipulatedDate.startDate,
			manipulatedDate.getEndDate,
			id
		);
		const events = response.map((event) =>
        JSON.parse(event.payload)
      );
		if (response.length > 0) return successResponse(res, 200, "Items successfully fetched", events);
		return successResponse(res, 404, "Events for this date/ID do not exist");
	} catch (error) {
		return errorHelper(res, 500);
	}
}

module.exports = { getAllEvents, getEventbyDate, getEventsbyDateAndId };
