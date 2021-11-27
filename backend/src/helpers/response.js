const successResponse = (res, status, message, data) => {
    const response = { status:true, message, data}
    return res.status(status).json(response)
}

const errorHelper = (res, status, message) => {
	if(!message) message = "Oops, and error occured"
    const response = { status:false, message }
    return res.status(status).json(response)
}
const manipulateDate = (date) => {
	const endDate = new Date(date);
	const startDate = new Date(date).toISOString().substring(0, 10);
	const setNextDate = endDate.setUTCDate(endDate.getUTCDate() + 1);
	const getEndDate = new Date(setNextDate).toISOString().substring(0, 10);
	return {startDate, getEndDate};
};

module.exports = { successResponse, errorHelper, manipulateDate };
