// Update with your config settings.

const { HOST, USERDB, PASSWORD, DB, DBPORT} = require('./src/config/keys')

module.exports = {
	development: {
		client: "mysql",
		connection: {
			host: HOST,
			port: DBPORT,
			user: USERDB,
			password: PASSWORD,
			database: DB,
			debug: false
		},
	},

	production: {
		client: "mysql",
		connection: {
			host: HOST,
			port: DBPORT,
			user: USERDB,
			password: PASSWORD,
			database: DB,
		},
		pool: {
			min: 2,
			max: 10,
		},
	},
};
