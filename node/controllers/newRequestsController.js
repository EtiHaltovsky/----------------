const newrequests = require('../models/newRequestsModel');

const axios = require('axios');

const getAllnewRequests = async () => {
  try {
    const re = await newrequests.find();
    return re
  }
  catch(err) {
    return err
  }
};

const getNewRequestsById = ( id ) => {

  return newrequests.findById(id);
};


// async function fetchNewRequests() {
//   try {
//     const database = client.db('UniteVolunteerDB'); // הכנס את שם מסד הנתונים שלך
//     const collection = database.collection('newrequests'); // הכנס את שם הטבלה במסד הנתונים שלך

//     const documents = await collection.find().toArray();
//     console.log(documents);
//   } catch (error) {
//     console.error('Failed to fetch new requests', error);
//   }
// }


// const fetchData = async () => {
//   try {
//     const result = await axios.get('http://localhost:8000/newrequests');
//     const data = result.data; // הנתונים מטבלה newrequests
//     const matrix = []; // מטריצה ריקה לשמירת הנתונים
//     console.log(data); // Check the value of data
//     console.log(Array.isArray(data)); // Check if data is an array
//     // data.forEach((item) => {
//     //   const rowData = [item.typeOfHelp, item.disabledVehicle, item.selectedDay,item.spreferredHours,item.from,item.destination,item.selectedDate]; // הוספת הנתונים של כל שורה למערך השורה
//     //   matrix.push(rowData); // הוספת השורה למטריצה
//     // });

//     console.log(matrix); // הדפסת המטריצה בקונסול
//   } catch (error) {
//     console.error(error);
//   }
// };

// fetchData();

// // שלוף את הנתונים מטבלת "newrequests"
// // fetchNewRequests();




// const MongoClient = require('mongodb').MongoClient;

// // Connection URL
// const url = 'mongodb://localhost:27017';

// // Database Name
// const dbName = 'UniteVolunteerDB';

// // Collection Name
// const collectionName = 'newrequests';

// // Matrix to store the data
// let matrix = [];

// // Connect to the database
// MongoClient.connect(url, function (err, client) {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }

//   console.log('Connected successfully to the database');

//   // Get the database
//   const db = client.db(dbName);

//   // Get the collection
//   const collection = db.collection(collectionName);

//   // Find documents in the collection
//   collection.find().toArray(function (err, documents) {
//     if (err) {
//       console.error('Error retrieving documents:', err);
//       client.close();
//       return;
//     }

//     // Iterate over the documents and populate the matrix
//     documents.forEach(function (document) {
//       // Extract the relevant details from the document and add them to the matrix
//       const details = {
//         field1: document.field1,
//         field2: document.field2,
//         // Add more fields as needed
//       };

//       matrix.push(details);
//     });

//     // Print the matrix
//     console.log(matrix);

//     // Close the database connection
//     client.close();
//   });
// });







// async function getNewRequests() {
//   try {
//     const newRequests = await newrequests.find({}).exec();
//     return newRequests;
//   } catch (error) {
//     console.error('Error during retrieval of new requests:', error);
//     throw error;
//   }
// }


async function getcheckQuery() {
  try {
    const checkQuery = await volunteer.find({
      firstAidKnowledge:'כן'
    }).exec();
    
    const volunteerMatrix = checkQuery.map((volunteer) => {
      return [
        volunteer.volunteerId,
        volunteer.fieldOfVolunteering
      ];
    });
  
    return volunteerMatrix;
  } catch (error) {
    console.error('Error during retrieval of disabled volunteers:', error);
    throw error;
  }
}

// async function getcheckVolunteerLanguage() {
//   try {
//     const checkVolunteerLanguage = await volunteer.find({
//       selectedLanguage:'כן'
//     }).exec();
    
//     const volunteerMatrix = checkVolunteerLanguage.map((volunteer) => {
//       return [
//         volunteer.volunteerId,
//         volunteer.fieldOfVolunteering
//       ];
//     });
  
//     return volunteerMatrix;
//   } catch (error) {
//     console.error('Error during retrieval of disabled volunteers:', error);
//     throw error;
//   }
// }





const addNewRequests = async (obj) => {
  try {
    const r = new newrequests(obj);
    await (r.save())
    return r;
  }
  catch (err) {
    return err;
  }
};

const updatenewRequests = async (obj) => {
  console.log("obj", obj)
  try {
    await newrequests.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
    return "Updated!"
  }
  catch (err) {
    return err;
  }
};

const deletenewRequests = async (id) => {
  await newrequests.findByIdAndDelete(id);
  return 'Deleted!';
}

module.exports = {
  getAllnewRequests,
  // getNewRequestsById,
  // getNewRequests,
  addNewRequests,
  updatenewRequests,
  deletenewRequests,
  // fetchNewRequests,
  // fetchData,
};