
// const https = require('https');
// const volunteerModel = require('../models/volunteerModel');
// const newRequestsModel = require('../models/newRequestsModel');

// async function getDistancesFromDatabase() {
// //   const lastVolunteer = await volunteerModel.findOne().sort({ _id: -1 });
//   const newRequests = await newRequestsModel.find();
// //   console.log("newRequests",newRequests);

//   const volunteer = await volunteerModel.findOne();
//   const origin = volunteer.address;
// //   const fromVolunteer=volunteer.address
//   const destinations = newRequests.map((request) => request.from);
//   let  distance=null;
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   destinations.forEach((destination) => {
//     const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM'; // הוסף כאן את מפתח ה-API שלך
//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

//     https.get(url, (res) => {
//       let data = '';

//       res.on('data', (chunk) => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         const result = JSON.parse(data);
//         console.log("result",result);
//         for (let i = 0; i < result.rows.length; i++)
//         // distance = result.rows[i].elements[0].distance;
//         distance = result.rows[0].elements[i].distance;

//     // console.log("distance",distance);
//         console.log(`Distance to ${destination}: ${distance}`);
//         console.log(`from ${origin}: ${distance}`);
// //         console.log(`Distance to ${destination}: ${distance.text}`);
// // console.log(`from ${fromVolunteer}: ${volunteer.address}`);

//       });
//     }).on('error', (err) => {
//       console.log("Error: " + err.message);
//     });
//   });
// }

// // כעת תוכל לקרוא לפונקציה getDistancesFromDatabase כדי לבדוק את המרחקים ממסד הנתונים
// getDistancesFromDatabase().catch((err) => {
//   console.error(err);
// });

// const https = require('https');
// const volunteerModel = require('../models/volunteerModel');
// const newRequestsModel = require('../models/newRequestsModel');

// async function getDistancesFromDatabase() {
//   const volunteers = await volunteerModel.find();
//   const newRequests = await newRequestsModel.find();

//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   volunteers.forEach((volunteer) => {
//     const origin = volunteer.address;

//     newRequests.forEach((request) => {
//       const destination = request.from;
//       const apiKey = 'YOUR_API_KEY'; // הוסף כאן את מפתח ה-API שלך
//       const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

//       https.get(url, (res) => {
//         let data = '';

//         res.on('data', (chunk) => {
//           data += chunk;
//         });

//         res.on('end', () => {
//           const result = JSON.parse(data);
//           if (result.status === 'OK') {
//             const distance = result.rows[0].elements[0].distance.text;
//             console.log(`Distance from ${origin} to ${destination}: ${distance}`);
//           } else {
//             console.log(`Failed to retrieve distance from ${origin} to ${destination}`);
//           }
//         });
//       }).on('error', (err) => {
//         console.log("Error: " + err.message);
//       });
//     });
//   });
// }

// // כעת תוכל לקרוא לפונקציה getDistancesFromDatabase כדי לבדוק את המרחקים ממסד הנתונים
// getDistancesFromDatabase().catch((err) => {
//   console.error(err);
// });


// // כעת תוכל לקרוא לפונקציה getDistancesFromDatabase כדי לבדוק את המרחקים ממסד הנתונים
// getDistancesFromDatabase().catch((err) => {
//   console.error(err);
// });



// async function getDistanceFromDB() {
//   const https = require('https');
//   newrequest = await newrequests.find();
//   volunteer = await volunteers.findOne();
//   const origin = volunteer.address;
//   const destinations = newrequest.map((request) => request.from);
//   let distance=0;
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   destinations.forEach((destination, i) => {
//     const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM';
//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

//     https.get(url, (res) => {
//       let data = '';

//       res.on('data', (chunk) => {
//         data += chunk;
//       });

//       // res.on('end', () => {
//       //   const result = JSON.parse(data);
//       //   console.log('result', result);

//       //   if (
//       //     result.status === 'OK' &&
//       //     result.rows.length > 0 &&
//       //     result.rows[0].elements.length > i &&
//       //     result.destination_addresses.length > i
//       //   ) {
//       //     const distance = result.rows[0].elements[i].distance;
//       //     console.log(`Distance to ${result.destination_addresses[i]}: ${distance}`);
//       //     console.log(`from ${origin}: ${distance}`);
//       //   } else {
//       //     console.log(`Distance to ${destination}: Not found`);
//       //     console.log(`from ${origin}: Not found`);
//       //   }
//       // });

//       res.on('end', () => {
//         const result = JSON.parse(data);
//         const elements=result.rows
//         for(let i =0;i<result.rows;i++){
//         console.log("result.rows[0].elements", result.rows[i].elements)
//         console.log(`from ${origin}`)
//         console.log(`Distance to ${destination}`)

//          distance = result.rows[i].elements[0].distance.text;
//       }
//         console.log(`Distance to ${destination}: ${distance}`);
//         console.log(`from ${origin}: ${distance}`);
//       });
//     }).on('error', (err) => {
//       console.log('Error: ' + err.message);
//     });
//   });
// }

const volunteers = require('../models/volunteerModel');

const ratings = require('../models/ratingsModel');

const mongoose = require('mongoose');
const newrequests = require('../models/newRequestsModel');

async function getDistanceFromDB() {
  const axios = require('axios');

  // Define the API endpoint and parameters

  const https = require('https');
  newrequest = await newrequests.find();
  volunteer = await volunteers.find();
  const volunteerOrigin = volunteer.address;
  // const volunteerDestination = newrequest.map((request) => request.from);
  const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json';
  const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM'; // Replace with your own API key
  const inNeedOrigin = newrequest.map((request) => request.from); // Replace with the location of the person in need

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

  axios.get(endpoint, {
    params: {
      origins: volunteerOrigin,
      destinations: inNeedOrigin,
      key: apiKey
    }
  })
    .then(response => {
      const result = JSON.parse(data);
      let elements = result.rows
      //         for(let i =0;i<result.rows;i++){
      const volunteerCurrentDistance = response.data.rows[0].elements[0].distance.text;
      // const volunteerCurrentDuration = response.data.rows[0].elements[0].duration.text;
      // let matrix = [volunteer.id][volunteerCurrentDistance]
      console.log(`The travel time between the volunteer's current location and the person in need is ${volunteerCurrentDuration}.`);
      console.log(`The current distance between the volunteer's current location and the person in need is ${volunteerCurrentDistance}.`);
      // console.log(`המרחק הנוכחי בין מיקומו הנוכחי של המתנדב לאדם הנזקק הוא ${volunteerCurrentDistance}.`);
      //   console.log(`זמן הנסיעה בין מיקומו הנוכחי של המתנדב לבין הנזקק הינו ${volunteerCurrentDuration}.`);

      // Make the HTTP request to the API for the volunteer's location after travel
      // axios.get(endpoint, {
      //   params: {
      //     origins: volunteerDestination,
      //     destinations: inNeedOrigin,
      //     key: apiKey
      //   }
      // })
      // .then(response => {
      //   // Parse the response and extract the distance and duration information
      //   const volunteerTravelDistance = response.data.rows[0].elements[0].distance.text;
      //   const volunteerTravelDuration = response.data.rows[0].elements[0].duration.text;
      //   // console.log(`המרחק בין מיקומו של המתנדב לאחר הנסיעה לבין הנזקק הוא ${volunteerTravelDistance}.`);
      //   // console.log(`זמן הנסיעה בין מיקומו של המתנדב לאחר הנסיעה לבין הנזקק הינו ${volunteerTravelDuration}.`);
      //   console.log(`The distance between the volunteer's location after travel and the person in need is ${volunteerTravelDistance}.`);
      //   console.log(`The travel time between the volunteer's location after travel and the person in need is ${volunteerTravelDuration}.`);
      // })
      // .catch(error => {
      //   console.error(error);
      // });
    })
    .catch(error => {
      console.error(error);
    });
}




module.exports = {
  getDistanceFromDB,
};
