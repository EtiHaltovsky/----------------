const volunteers = require('../models/volunteerModel');

const ratings = require('../models/ratingsModel');

const mongoose = require('mongoose');
const newrequests = require('../models/newRequestsModel');

async function getDistanceFromDB() {
  const axios = require('axios');
  const https = require('https');
  newrequest = await newrequests.find();
  volunteer = await volunteers.find();
  const volunteerOrigin = volunteer.address;
  const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json';
  const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM';
  const inNeedOrigin = newrequest.map((request) => request.from);
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
    console.log(`The current distance between the volunteer's current location and the person in need is ${volunteerCurrentDistance}.`);
    axios.get(endpoint, {
        params: {
          origins: volunteerDestination,
          destinations: inNeedOrigin,
          key: apiKey
        }
      })
      .catch(error => {
        console.error(error);
      });
    });
}
    module.exports = {
        getDistanceFromDB,
      };