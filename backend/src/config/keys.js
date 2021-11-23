require("dotenv").config();

module.exports = {
	DBPORT: process.env.DBPORT,
	HOST: process.env.HOST,
	USERDB: process.env.USERDB,
	PASSWORD: process.env.PASSWORD,
	DB: process.env.DB,
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.PORT,
};
