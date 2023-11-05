const axios = require('axios');

// Define the API endpoint and parameters
const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json';
const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM'; // Replace with your own API key
const volunteerOrigin = 'אשדוד'; // Replace with the volunteer's current location
const volunteerDestination = 'בני ברק'; // Replace with the volunteer's location after travel
const inNeedOrigin = 'ירושלים'; // Replace with the location of the person in need

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Make the HTTP request to the API for the volunteer's current location
axios.get(endpoint, {
  params: {
    origins: volunteerOrigin,
    destinations: inNeedOrigin,
    key: apiKey
  }
})
.then(response => {
  // Parse the response and extract the distance and duration information
  const volunteerCurrentDistance = response.data.rows[0].elements[0].distance.text;
  const volunteerCurrentDuration = response.data.rows[0].elements[0].duration.text;


console.log(`The travel time between the volunteer's current location and the person in need is ${volunteerCurrentDuration}.`);
console.log(`The current distance between the volunteer's current location and the person in need is ${volunteerCurrentDistance}.`);
// console.log(`המרחק הנוכחי בין מיקומו הנוכחי של המתנדב לאדם הנזקק הוא ${volunteerCurrentDistance}.`);
//   console.log(`זמן הנסיעה בין מיקומו הנוכחי של המתנדב לבין הנזקק הינו ${volunteerCurrentDuration}.`);

  // Make the HTTP request to the API for the volunteer's location after travel
  axios.get(endpoint, {
    params: {
      origins: volunteerDestination,
      destinations: inNeedOrigin,
      key: apiKey
    }
  })
  .then(response => {
    // Parse the response and extract the distance and duration information
    const volunteerTravelDistance = response.data.rows[0].elements[0].distance.text;
    const volunteerTravelDuration = response.data.rows[0].elements[0].duration.text;
    // console.log(`המרחק בין מיקומו של המתנדב לאחר הנסיעה לבין הנזקק הוא ${volunteerTravelDistance}.`);
    // console.log(`זמן הנסיעה בין מיקומו של המתנדב לאחר הנסיעה לבין הנזקק הינו ${volunteerTravelDuration}.`);
    console.log(`The distance between the volunteer's location after travel and the person in need is ${volunteerTravelDistance}.`);
    console.log(`The travel time between the volunteer's location after travel and the person in need is ${volunteerTravelDuration}.`);
  })
  .catch(error => {
    console.error(error);
  });
})
.catch(error => {
  console.error(error);
});
