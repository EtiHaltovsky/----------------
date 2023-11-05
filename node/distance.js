
// const https = require('https');
// const volunteerModel = require('./models/volunteerModel');
// const newRequestsModel = require('./models/newRequestsModel');

// async function getDistance(origin, destinations, apiKey) {
//   const results = [];
//   const newRequests = await newRequestsModel.find();
//   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//   destinations.forEach((destination) => {
//     const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${apiKey}`;

//     https.get(url, (res) => {
//       let data = '';

//       res.on('data', (chunk) => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         const result = JSON.parse(data);
//         const distance = result.rows[0].elements[0].distance;
//         results.push({ destination, distance });

//         if (results.length === destinations.length) {
//           processResults(results);
//         }
//       });
//     }).on('error', (err) => {
//       console.log("Error: " + err.message);
//     });
//   });
// }

// async function getLastVolunteerId() {
//   try {
//     const lastVolunteer = await volunteerModel.findOne().sort({ _id: -1 }).lean();
//     console.log("lastVolunteer", lastVolunteer);

//     if (lastVolunteer) {
//       return lastVolunteer._id;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.error("Error finding last volunteer:", error);
//     return null;
//   }
// }

// function processResults(results) {
//   console.log("results", results);
// }

// async function main() {
//   const lastVolunteerId = await getLastVolunteerId();
//   console.log("lastVolunteerId", lastVolunteerId);

//   if (lastVolunteerId) {
//     try {
//       const volunteer = await volunteerModel.findById(lastVolunteerId).lean();
//       const origin = volunteer.address;
//       console.log("origin", origin);

//       const newRequests = await newRequestsModel.find();
//       const destinations = newRequests.map((request) => request.from);
//       console.log("destinations", destinations);

//       await getDistance(origin, destinations, 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');
//     } catch (error) {
//       console.error("Error retrieving data:", error);
//     }
//   }
// }

// main().catch((err) => {
//   console.error(err);
// });


// const https = require('https');
//  //פונקצית מרחק עובדת!!!!
// function getDistance(origin, dest, apiKey) {
//   const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&key=${apiKey}`;
  
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


//   https.get(url, (res) => {
//     let data = '';

//     res.on('data', (chunk) => {
//       data += chunk;
//     });

//     res.on('end', () => {
//       const result = JSON.parse(data);
//       // console.log(result);
//       // console.log(( result.rows))
//       const {rows} = JSON.parse(data);
      
     
//             console.log(rows[0].elements[0].distance);
    
      
//       // עכשיו ניתן לעבד את התוצאה בהתאם לצרכי היישומון שכם.
//     });

//   }).on('error', (err) => {
//     console.log("Error: " + err.message);
//   });
// }

// // קריאה לפונקציה עם פרמטרים של כתובת המקור, היעד ומפתח ה-API שלכם.
// getDistance('בני ברק', 'אשדוד', 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');




/// <summary>
        //עובד חישוב זמן
        // / פונקציה המחזירה את זמן הנסיעה בדקות בין מקום אחד למשנהו
        // / <returns>זמן הנסיעה בדקות</returns>
        // const https = require('https');
        // const parseString = require('xml2js').parseString;
         
        // function DistanceInMinutes(PointA, PointB) {
        //   const url = `https://maps.googleapis.com/maps/api/distancematrix/xml?origins=${PointA}&destinations=${PointB}&mode=driving&units=imperial&sensor=false&key=AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM`;
        //   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
      
        //   return new Promise((resolve, reject) => {
        //     https.get(url, (res) => {
        //       let data = '';
        //       res.on('data', (chunk) => {
        //         data += chunk;
        //       });
        //       res.on('end', () => {
        //         parseString(data, (err, result) => {
        //           if (err) {
        //             reject(err);
        //           } else {
        //             const duration = result.DistanceMatrixResponse.row[0].element[0].duration[0].text[0];
        //             resolve(duration);
        //           }
        //         });
        //       });
        //     }).on('error', (err) => {
        //       reject(err);
        //     });
        //   });
        // }
        
        // const PointA = 'בני ברק';
        // const PointB = 'תל אביב, חיפה, ירושלים';
        
        // DistanceInMinutes(PointA, PointB)
        //   .then(duration => {
        //     console.log(duration);
        //     // Process the duration here
        //   })
        //   .catch(error => {
        //     console.error('Error:', error);
        //   });
        



        // const parseString = require('xml2js').parseString;
        // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
        // function DistanceInMinutes(PointA, PointB) {
          
        //     const url = `https://maps.googleapis.com/maps/api/distancematrix/xml?origins=${PointA}&destinations=${PointB}&mode=driving&units=imperial&sensor=false&key=AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM`;
        //     return new Promise((resolve, reject) => {
        //         https.get(url, (res) => {
        //             let data = '';
        //             res.on('data', (chunk) => {
        //                 data += chunk;
        //             });
        //             res.on('end', () => {
        //                 parseString(data, (err, result) => {
        //                     if (err) {
        //                         reject(err);
        //                     } else {
        //                         const duration = result.DistanceMatrixResponse.row[0].element[0].duration[0].value[0];
        //                         const num = parseInt(duration) / 60;
        //                         resolve(num);
        //                     }
        //                 });
        //             });
        //         }).on('error', (err) => {
        //             reject(err);
        //         });
        //     });
        // }
        // // Usage:
        //  const PointA = 'בני ברק';
        // const PointB = 'תל אביב, חיפה, ירושלים';
        
        // DistanceInMinutes(PointA, PointB)
        //   .then(duration => {
        //     console.log(duration);
        //     // Process the duration here
        //   })
        //   .catch(error => {
        //     console.error('Error:', error);
        //   });




        // // const PointA = 'בני ברק';
        // const PointB = ['תל אביב', 'חיפה', 'ירושלים'];
        // DistanceInMinutes(PointA, PointB);
        // getDistance(origin, destinations, 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');


        // DistanceInMinutes('קרית מלאכי', 'אשדוד').then((result) => {
        //     console.log(result);
        // }).catch((err) => {
        //     console.error(err);
        // });






// //חישוב מרחק ממקום למקום
// const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyA_IMFHOjVEK-Zdl-xztNALc3hM6J7Ge08'
// });
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const origin = ' תל-אביב,ישראל';
// const destination = 'בני ברק ,ישראל';

// googleMapsClient.distanceMatrix({
//   origins: [origin],
//   destinations: [destination],
//   mode: 'driving',
//   units: 'metric'
// }, (err, response) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
  
//   const distance = response.json.rows[0].elements[0].distance.value;
//   console.log(`The distance between ${origin} and ${destination} is ${distance} meters.`);
// });