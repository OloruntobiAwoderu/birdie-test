
const request = require('supertest');
const server = require('../src/routes/index');



describe('GET /api/v1/events', () => {
	it('Return status code 200', async () => {
		const response = await request(server).get('/api/v1/events')
		expect(response.status).toBe(200);
		
	})
	it('Return status code 500', async () => {
		const response = await request(server).post('/api/v1/events')
		expect(response.status).toBe(404);
	})
})

describe('GET /api/v1/events/date', () => {
	it()
})