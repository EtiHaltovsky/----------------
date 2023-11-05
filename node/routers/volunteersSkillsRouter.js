//localhost:8000/users/
const express = require('express');
const volunteersSkillsController = require('../controllers/volunteersSkillsController');
const router = express.Router();
// const newRequestsController = require('../controllers/newRequestsController');
// const newrequests = require('../models/newRequestsModel');

// router.route('/').get(async(req, res) => {
//    const result = await volunteersSkillsController.getAllVolunteersSkills();
//    res.json(result);
// });


// router.route('/').get(async(req, res) => {
//     const result = await volunteersSkillsController.getDisabledVolunteers();
//     res.json(result);
//  });
 



router.route('/').get(async(req, res) => {
    const result = await volunteersSkillsController.fetchVolunteersSkills(req, res);
    res.json(result);
 });

 router.route('/').get(async(req, res) => {
    const result = await volunteersSkillsController.displayVolunteersSkills(req, res);
    res.json(result);
 });


 
//  router.route('/').get(async(req, res) => {
//     const result = await volunteersSkillsController.findMatchingVolunteers();
//     res.json(result);
//  });


//  router.route('/').get(async (req, res) => {
//     try {
//       const { aidRecipient, requestDetails } = req.body;
  
//       // Find the request details from the newrequests table
//       const request = await newRequestsModel.findOne({ aidRecipient: aidRecipient, requestDetails: requestDetails }).exec();
  
//       if (!request) {
//         // Handle case when the request is not found
//         return res.status(404).json({ error: 'Request not found' });
//       }
  
//       // Find matching volunteers based on the request details
//       const matchingVolunteers = await findMatchingVolunteers(request);
  
//       // Return the matching volunteers
//       res.json(matchingVolunteers);
//     } catch (error) {
//       console.error('Error during request processing:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
  

// router.route('/').get(async (req, res) => {
//     try {
//       const { recipients, newrequests } = req.body;
  
//       // Find the request details from the newrequests table
//       const request = await newRequestsModel.findOne({ recipients: recipients, newrequests: newrequests }).exec();
  
//       if (!request) {
//         // Handle case when the request is not found
//         return res.status(404).json({ error: 'Request not found' });
//       }
  
//       // Find matching volunteers based on the request details
//       const matchingVolunteers = await volunteersSkillsController.findMatchingVolunteers(request);
  
//       // Return the matching volunteers
//       res.json(matchingVolunteers);
//     } catch (error) {
//       console.error('Error during request processing:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
 

// router.route('/:id').get(async(req, res) => {
//     const result = await volunteersSkillsController.getVolunteersSkillsById(req.params.id);
//     res.json(result);
// });

router.route('/').post(async(req, res) => {
    const obj = req.body;
    const result = await volunteersSkillsController.addVolunteersSkills(obj);
    console.log(result)
    res.json(result);
});

router.route('/:id').put(async(req, res) => {
    const obj = req.body;
    const result = await volunteersSkillsController.updateVolunteersSkills(obj, req.params.id);
    res.json(result);
});

router.route('/:id').delete((req, res) => {
    const result = volunteersSkillsController.deleteVolunteersSkills(req.params.id);
    res.json(result);
})

module.exports = router;