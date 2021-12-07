
const request = require("supertest");
const server = require("../src/routes/index");


describe("GET /api/v1/events", () => {
	it("Should return status code 200 if request is successful", async () => {
		const response = await request(server).get("/api/v1/events");
		expect(response.status).toBe(200);
	});
	it("Should return status code 404", async () => {
		const response = await request(server).post("/api/v1/events");
		expect(response.status).toBe(404);
	});
	it('Should return 100 ev events', async () => {
		const response = await request(server).get("/api/v1/events");
		expect(response.body.data.length).toBe(100)

	})
});

describe("GET /api/v1/events/date", () => {
	it("Should return status code 200 if request is successful", async () => {
		const response = await request(server).get(
			"/api/v1/events/date?date=2019-04-25"
		);
		expect(response.status).toBe(200);
		expect(response.body.status).toBeTruthy();
		expect(response.body.message).toEqual("Items successfully fetched");
	});
	it("Should return status code 400 if date is missing", async () => {
		const response = await request(server).get("/api/v1/events/date");
		expect(response.statusCode).toBe(400);
		expect(response.body.status).toBeFalsy();
	});
	it("Should return 400, if date is invalid", async () => {
		const response = await request(server).get("/api/v1/events/date?date=tmo");
		expect(response.statusCode).toBe(400);
		expect(response.body.status).toBeFalsy();
	});
	it("Should return 404,if date is valid but no events for the specific date", async () => {
		const response = await request(server).get(
			"/api/v1/events/date?date=2021-04-25"
		);
		expect(response.statusCode).toBe(404);
		expect(response.body.message).toBe("Events for this date do not exist");
	});
});

describe("GET /api/v1/events/date/:id", () => {
	it('Should return status code 200 if request is successful', async () => {
		const response = await request(server).get(
			"/api/v1/events/date/df50cac5-293c-490d-a06c-ee26796f850d?date=2019-04-25"
		);
		expect(response.status).toBe(200);
		expect(response.body.status).toBeTruthy();
		expect(response.body.message).toEqual("Items successfully fetched");
	})
	it('Should return status code 400 if Id is invalid', async () => {
		const response = await request(server).get(
			"/api/v1/events/date/df50cac5-293c-490d-a06c-ee296f850d?date=2021-04-25"
		);
		expect(response.status).toBe(400);
		expect(response.body.status).toBeFalsy();
	})
	it('Should return status code 400 if date is invalid', async () => {
		const response = await request(server).get(
			"/api/v1/events/date/df50cac5-293c-490d-a06c-ee26796f850d?date=2019-25"
		);
		expect(response.status).toBe(400);
		expect(response.body.status).toBeFalsy();
	})
	it('Should return status code 404 if events do not exist for date or id', async () => {
		const response = await request(server).get(
			"/api/v1/events/date/df50cac5-293c-490d-a06c-ee26796f850d?date=2021-04-25"
		);
		expect(response.statusCode).toBe(404);
		expect(response.body.message).toBe("Events for this date/ID do not exist");
	})
})
