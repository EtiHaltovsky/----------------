//localhost:8000/users/
const express = require('express');
const volunteerController = require('../controllers/volunteerController');
const router = express.Router();


router.route('/').get(async(req, res) => {
    console.log(11111)
    const result = await volunteerController.getcheckVolunteer();
    res.json(result);
 });
 
 router.route('/:password/:email').get(async(req, res) => {
    console.log("req",req.params)
    const result = await volunteerController.getUserById(req.params);
  
    res.json(result);
});

//  router.route('/').get(async(req, res) => {
//     const result = await volunteerController.getHandyVolunteers();
//     res.json(result);
//  });

router.route('/').post(async(req, res) => {
    const obj = req.body;
    console.log(obj)
    const result = await volunteerController.addVolunteer(obj);
    console.log(result)
    res.json(result);
});


router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await volunteerController.updateVolunteer(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = volunteerController.deleteVolunteer(req.params.id);
    res.json(result);
})


module.exports = router;

// router.route('/').get(async(req, res) => {
//     const result = await volunteerController.getDisabledVolunteers();
//     res.json(result);
//  });
 
 
// router.get('/requests/:requestId/volunteers', volunteerController.filterVolunteers);

 
 
// router.route('/:id').get(async(req, res) => {
//     const result = await volunteerController.getVolunteerById(req.params.id);
//     res.json(result);
// });

// router.route('/').get(async(req, res) => {
//    const result = await volunteerController.getAllVolunteers();
//    res.json(result);
// });

// router.route('/').get(async(req, res) => {
//    const result = await volunteerController.findMatchingVolunteers();
//    res.json(result);
// });

// router.route('/:id').get(async(req, res) => {
//     const result = await volunteerController.getVolunteerById(req.params.id);
//     res.json(result);
// });