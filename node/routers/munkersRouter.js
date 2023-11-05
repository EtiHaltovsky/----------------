const express = require('express');
const munkersController = require('../controllers/munkersController');
const router = express.Router();

router.route('/').get(async (req, res) => {
   const result = await munkersController.make_cost_matrix();
   console.log("*****************************", result)
   res.json(result);
});

module.exports = router;