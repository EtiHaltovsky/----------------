const express = require('express');
const queryController = require('../controllers/queryController');
const router = express.Router();
const { getVolunteersWithDisabledVehicle } = require('../controllers/queryController');

router.route('/').get(async(req, res) => {
    const result = await queryController.getVolunteersWithDisabledVehicle();
    res.json(result);
 });

 module.exports = router;
