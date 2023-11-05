//localhost:8000/users/
const express = require('express');
const newRequestsController = require('../controllers/newRequestsController');
const router = express.Router();

router.route('/').get(async(req, res) => {
   const result = await newRequestsController.getAllnewRequests();
   res.json(result);
});

// router.route('/:id').get(async(req, res) => {
//     const result = await newRequestsController.getNewRequestsById(req.params.id);
//     res.json(result);
// });

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await newRequestsController.addNewRequests(obj);
    console.log(result)
    res.json(result);
});

// router.route('/').get(async(req, res) => {
//     const obj = req.body;
//     const result = await newRequestsController.fetchNewRequests(obj);
//     console.log(result)
//     res.json(result);
// });

// router.route('/').get(async(req, res) => {
//     const obj = req.body;
//     const result = await newRequestsController.fetchData(obj);
//     console.log(result) 
//     res.json(result);
// });

// router.route('/').get(async(req, res) => {
//     const obj = req.body;
//     const result = await newRequestsController.getNewRequests(obj);
//     console.log(result)
//     res.json(result);
// });

// router.route('/').get(async(req, res) => {
//     const obj = req.body;
//     const result = await newRequestsController.findMatchingVolunteers(obj);
//     console.log(result)
//     res.json(result);
// });

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await newRequestsController.updateNewRequests(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = newRequestsController.deleteNewRequests(req.params.id);
    res.json(result);
})

module.exports = router;