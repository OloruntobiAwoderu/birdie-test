const db = require("../config/dbConfig");

function getAll() {
	return db("events").select("payload").limit(100);
}

function getEventsForSpecificDate(startDate, endDate, id) {
	return db("events")
		.where("care_recipient_id", id)
		.whereBetween("timestamp", [startDate, endDate])
		.select("payload")
		.orderBy("timestamp", "asc");
}

module.exports = {
	getAll,
	getEventsForSpecificDate,
};
