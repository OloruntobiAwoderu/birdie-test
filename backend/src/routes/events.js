const express = require("express");
const eveetController = require("../controllers/events");
const { validateDateorId } = require("../middleware/index");

const router = express.Router();

router.get("/", eveetController.getAllEvents);
router.get("/date", validateDateorId, eveetController.getEventbyDate);

module.exports = router;
