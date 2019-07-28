const express = require("express");
const router = express.Router();
const application_controller = require('../controllers/application_controller.js');


router.post("/validate", application_controller.validate);


module.exports = router