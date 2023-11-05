const mongoose = require('mongoose');
const volunteer = require('../models/volunteerModel');
const newrequests = require('../models/newRequestsModel');

async function getVolunteersWithDisabledVehicle() {
  try {
    // Find new requests that require a disabled vehicle
    const newRequests = await newrequests.find({ disabledVehicle: true });

    if (newRequests.length === 0) {
      // If there are no new requests that require a disabled vehicle, return an empty array
      return [];
    }

//     const volunteerIds = newRequests.map((request) => request.volunteerId);
// return volunteerIds;

    // // Find volunteers with disabled vehicles
    const volunteersMatch = await volunteer.find({
      // _id: { $in: volunteerIds },
      disabledVehicle: true,
     
    });

     console.log(volunteersMatch);
    if (volunteersMatch.length === 0) {
      // If there are no new requests that require a disabled vehicle, return an empty array
      return [];
    }
 return volunteersMatch;

    // Return the found volunteers with disabled vehicles
    // return newRequests;
  } catch (error) {
    console.error('Error during retrieval of volunteers with disabled vehicles:', error);
    throw error;
  }
}



// async function getVolunteersWithDisabledVehicle() {
//   try {
    
//     const newRequests = await newrequests.find({ needDisabledVehicle: true });

//     if (newRequests.length === 0) {
//       // If there are no new requests, return an empty array
//       return [];
      
//     }
// else
// return newRequests;
//        console.log(newRequests);
//     // // Get the volunteer IDs from the new requests
//     // const volunteerIds = newRequests.map((request) => request.volunteerId);
//     // // const volunteerIds = newRequests.map((request) => request.volunteerId);
//     // // Find volunteers with disabled vehicles
//     // const volunteers = await volunteer.find({
//     //   _id: { $in: volunteerIds },
//     //   // disabledVehicle: "1",
//     //   disabledVehicle: true,
//     // });

//     // // Return the volunteers with disabled vehicles
//     // return volunteers;
//   } catch (error) {
//     console.error('Error during retrieval of volunteers with disabled vehicles:', error);
//     throw error;
//   } finally {
//     // Disconnect from the MongoDB database
//     // await mongoose.disconnect();
//   }
// }

// // Usage example
// getVolunteersWithDisabledVehicle()
//   .then((volunteers) => {
//     console.log('Volunteers with disabled vehicles:', volunteers);
//   })
//   .catch((error) => {
//     console.error('Error during retrieval of volunteers with disabled vehicles:', error);
//   });



module.exports = {
  getVolunteersWithDisabledVehicle,
};