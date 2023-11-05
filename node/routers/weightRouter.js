//localhost:8000/users/
const express = require('express');
const weightControllers = require('../controllers/weightController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await weightControllers.getAllWeights();
   res.json(result);
});

router.route('/:id').get(async(req, res) => {
    const result = await weightControllers.getWeightById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await weightControllers.addWeight(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await weightControllers.updateWeight(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = weightControllers.deleteWeight(req.params.id);
    res.json(result);
})

module.exports = router;