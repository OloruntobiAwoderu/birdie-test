const express = require("express");
const eveetController = require("../controllers/events");


const router = express.Router();

router.get("/", eveetController.getAllEvents);
router.get('/date', eveetController.getEventbyDate);

module.exports = router;
