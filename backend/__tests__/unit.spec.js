const {
	manipulateDate,
} = require("../src/helpers/response");

const { getAll } = require('../../backend/src/database/queries')


describe("Maniipulate Date", () => {
	it("Should return correct date", () => {
		const response = manipulateDate("2020-05-10");

		expect(response).toMatchObject({
			getEndDate: "2020-05-11",
			startDate: "2020-05-10",
		});
		expect(response).toBeDefined();
		expect(Object.keys(response)).toHaveLength(2);
	});
});

