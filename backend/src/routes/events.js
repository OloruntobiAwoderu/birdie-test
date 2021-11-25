const express = require("express");
const eveetController = require("../controllers/events");
const { validateDateorId } = require("../middleware/index");

const router = express.Router();

router.get("/", eveetController.getAllEvents);
router.get("/date", validateDateorId, eveetController.getEventbyDate);
router.get("/date/:id", validateDateorId, eveetController.getEventsbyDateAndId);

module.exports = router;
