const https = require('https');

    

// function getDistance(origin, destinations, apiKey) {
//   const results = [];
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
//           // All distances have been retrieved
//           processResults(results);
//         }
//       });
//     }).on('error', (err) => {
//       console.log("Error: " + err.message);
//     });
//   });
// }

// function processResults(results) {
//   // Sort distances in ascending order
//   // results.sort((a, b) => a.distance - b.distance);

//   // Print or use the sorted results as needed
//   console.log(results);
// }

// const origin = 'בני ברק';
// const destinations = ['תל אביב', 'חיפה', 'ירושלים'];

// getDistance(origin, destinations, 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');


function getDistance(origin, dest, apiKey) {
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${dest}&key=${apiKey}`;
  
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      const result = JSON.parse(data);
      // console.log(result);
      // console.log(( result.rows))
      const {rows} = JSON.parse(data);
      
      console.log(result)
            // console.log(rows[0].elements[0].distance);
      
      // עכשיו ניתן לעבד את התוצאה בהתאם לצרכי היישומון שכם.
    });

  }).on('error', (err) => {
    console.log("Error: " + err.message);
  });
}

// קריאה לפונקציה עם פרמטרים של כתובת המקור, היעד ומפתח ה-API שלכם.
getDistance('בני ברק', 'אשדוד', 'AIzaSyAzi5xrPktm4GkJklHhu8yB-IBHn8Sz-tM');

    module.exports = {
      getDistance,
    };