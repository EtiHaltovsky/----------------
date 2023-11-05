const express = require('express');
const distanceController = require('../controllers/distanceController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   await distanceController.getDistanceFromDB();
   
   res.send("Distances calculated successfully");
});

module.exports = router;
