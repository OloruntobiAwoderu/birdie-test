const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require('cors')

const eventRoute = require("./events");

const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/v1/events", eventRoute);

app.use(function errors(err, req, res, next) {
	return res.status(500).json({ err });
});

module.exports = app;
