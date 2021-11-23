// Update with your config settings.

const { HOST, USER, PASSWORD, DB, DBPORT} = require('./src/config/keys')

module.exports = {
	development: {
		client: "mysql",
		version: "5.7",
		connection: {
			host: HOST,
			port: DBPORT,
			user: USER,
			password: PASSWORD,
			database: DB,
		},
	},

	production: {
		client: "mysql",
		version: "5.7",
		connection: {
			host: HOST,
			port: DBPORT,
			user: USER,
			password: PASSWORD,
			database: DB,
		},
		pool: {
			min: 2,
			max: 10,
		},
	},
};
