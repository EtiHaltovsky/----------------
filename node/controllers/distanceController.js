
const volunteers = require('../models/volunteerModel');
const newrequests = require('../models/newRequestsModel');
const axios = require('axios');
// const {__make_matrix}=require('../controllers/munkersController')
const {make_cost_matrix}=require('../controllers/munkersController')

async function getDistanceFromDB() {
  try {
  // const volunteersList = await volunteers.find({disabledVehicle:true});
  const newRequests = await newrequests.find();

  let volunteersList=null;
  let distance=null;
    const apiKey = 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM';
    const endpoint = 'https://maps.googleapis.com/maps/api/distancematrix/json';
  for(const req of newRequests){
    const kindOfReq=req.fieldOfVolunteering;
    const carCheck=req.disabledVehicle
    if(carCheck==false)
     volunteersList = await volunteers.find({fieldOfVolunteering:kindOfReq});
else
     volunteersList = await volunteers.find({fieldOfVolunteering:kindOfReq,disabledVehicle:carCheck});
    console.log("req ",req.from)
    let arr=[];
     const destination = req.from;

     for(const reqVolunteer of volunteersList)
     {
      const addressvol=reqVolunteer.address;
      const response = await axios.get(endpoint, {
        params: {
          origins: addressvol,
          destinations: destination,
          key: apiKey
        }
      });
      const result = response.data;
      console.log("result",result)
       distance = result?.rows?.[0]?.elements?.[0]?.distance?.value || 0;

       arr.push({ "volunteer": reqVolunteer.volunteerId, "distance": distance });
       console.log(distance)
      // console.log("beforeee sortingggggggggggggggggggggg",arr)
      arr.sort((a, b) => a.distance - b.distance);
    // console.log(arr)
    //  await __make_matrix(arr)
     await make_cost_matrix(arr)

      // for (const obj of arr) {
      //   console.log(`Volunteer: ${obj.volunteer}, Distance: ${obj.distance}`);
      // }

      // console.log("after sortingggggggggggggggggggggg",arr)
     }
  }
     
    // await Promise.all(volunteersList.map(async (volunteer) => {
    //   const volunteerOrigin = volunteer.address;
    // const results = await Promise.all(volunteersList.map(async (volunteer) => {
    //   const volunteerOrigin = volunteer.address;
      
    //     const response = await axios.get(endpoint, {
    //       params: {
    //         origins: volunteerOrigin,
    //         destinations: destination,
    //         key: apiKey
    //       }
    //     });
    //     const result = response.data;

    //     if (result && result.rows && result.rows.length > 0 && result.rows[0].elements && result.rows[0].elements.length > 0) {
    //       const distance = result.rows[0].elements[0].distance.text;
    //       console.log(`Distance from ${volunteerOrigin} to ${destination}: ${distance}`);
    //     } else {
    //       console.log(`No distance information available for ${volunteerOrigin} to ${destination}`);
    //     }

    //     }));
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    getDistanceFromDB,
};