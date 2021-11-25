const successResponse = (res, status, data) => {
	return res.status(status).json(data);
};

const errorHelper = (res, status, error) => {
	return res.status(status).json(error);
};

const manipulateDate = (date) => {
	const endDate = new Date(date);
	const startDate = new Date(date).toISOString().substring(0, 10);
	const setNextDate = endDate.setUTCDate(endDate.getUTCDate() + 1);
	const getEndDate = new Date(setNextDate).toISOString().substring(0, 10);
	return {startDate, getEndDate};
};

module.exports = { successResponse, errorHelper, manipulateDate };
