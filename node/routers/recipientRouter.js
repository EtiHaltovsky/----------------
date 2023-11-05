//localhost:8000/users/
const express = require('express');
const recipientController = require('../controllers/recipientController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await recipientController.getAllRecipient();
   res.json(result);
});

router.route('/:id').get(async(req, res) => {
    const result = await recipientController.getRecipientById(req.params.id);
    res.json(result);
});

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await recipientController.addRecipient(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await recipientController.updateRecipient(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = recipientController.deleteRecipient(req.params.id);
    res.json(result);
})

module.exports = router;