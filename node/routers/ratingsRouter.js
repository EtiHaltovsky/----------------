//localhost:8000/users/
const express = require('express');
const ratingsController = require('../controllers/ratingsController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await ratingsController.getAllRatings();
   res.json(result);
});

router.route('/').get(async(req, res) => {
    const result = await ratingsController.getRatingsQueries();
    res.json(result);
 });
 

router.route('/:id').get(async(req, res) => {
    const result = await ratingsController.getRatingsById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await ratingsController.addRatings(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await ratingsController.updateRatings(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = ratingsController.deleteRatings(req.params.id);
    res.json(result);
})

module.exports = router;