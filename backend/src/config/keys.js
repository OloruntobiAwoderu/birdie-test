require("dotenv").config();

module.exports = {
	DBPORT: process.env.DBPORT,
	HOST: process.env.HOST,
	USER: process.env.USER,
	PASSWORD: process.env.PASSWORD,
	DB: process.env.DB,
	NODE_ENV: process.env.NODE_ENV,
};
