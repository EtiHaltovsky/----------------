const https = require('https');

const volunteerModel = require('./models/volunteerModel')
const newRequestsModel = require('./models/newRequestsModel');


getDistance = async function (origin, destinations, apiKey) {

 //פונקצית מרחק עובדת!!!!
// function getDistance(origin, destinations, apiKey) {
  const results = [];
  newRequests = await newRequestsModel.find();//העדפות - דירוגים
  volunteer = await volunteerModel.find();//בקשות  
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const origin = volunteer.address;
  console.log(origin)

const destinations = newRequests.from;
  console.log(destinations)
 
  destinations.forEach((destination) => {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        const result = JSON.parse(data);
        const distance = result.rows[0].elements[0].distance;
        results.push({ destination, distance });

        if (results.length === destinations.length) {
          // All distances have been retrieved
          processResults(results);
        }
      });
    }).on('error', (err) => {
      console.log("Error: " + err.message);
    });
  });
}

// function processResults(results) {
//   // Process the distance results here
//   results.forEach((result) => {
//     console.log(`Destination: ${result.destination}`);
//     console.log(`Distance: ${result.distance.text}`);
//     console.log('---');
//   });
// }
function processResults(results) {
  // Process the distance results here
  console.log(results);
  // console.log(results.rows)
}
// Example usage
// const origin = volunteer.address;
//   console.log(origin)

// const destinations = newRequests.from;
//   console.log(destinations)

getDistance(origin, destinations, 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');