const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require('cors')
const path = require("path");

const eventRoute = require("./events");

const app = express();

app.use(logger("dev"));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/v1/events", eventRoute);

const buildPath = path.join(__dirname, '../../../frontend', 'build');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname+'../../../frontend/build/index.html'));
  });

app.use(function errors(err, req, res, next) {
	return res.status(500).json({ err });
});

module.exports = app;
