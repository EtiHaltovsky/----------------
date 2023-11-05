//localhost:8000/users/
const express = require('express');
const preferencesController = require('../controllers/preferencesController');

const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await preferencesController.getAllPreferences();
   res.json(result);
});

router.route('/').get(async(req, res) => {
    const result = await preferencesController.__make_matrix();
    res.json(result);
 });
 

router.route('/:id').get(async(req, res) => {
    // console.log(000000000000)
    const result = await preferencesController.getPreferencesById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await preferencesController.addPreferences(obj);
    console.log(result)
    res.json(result);
});

// router.route('/').get(async(req, res) => {
//     const params=req.body;
//     const result = await volunteerController.selectValue(params);
//     res.json(result);
//  });

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await preferencesController.updatePreferences(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = preferencesController.deletePreferences(req.params.id);
    res.json(result);
})

module.exports = router;