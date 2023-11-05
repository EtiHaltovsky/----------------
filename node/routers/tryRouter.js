const express = require('express');
const tryController = require('../controllers/tryController');
const router = express.Router();



router.route('/').get(async(req, res) => {
   const result = await tryController.getDistance();
   res.json(result);
});
// router.route('/').get(async(req, res) => {
//     const result = await tryController.sortDistancesByDistanceAscending();
//     res.json(result);
//  });
module.exports = router;