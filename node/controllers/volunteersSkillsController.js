const volunteersSkills = require('../models/volunteersSkillsModel');

// const getAllVolunteersSkills = async () => {
//   try {
//     const re = await volunteersSkills.find();
//     return re
//   }
//   catch(err) {
//     return err
//   }
// };



const addVolunteersSkills = async (obj) => {
  try {
    const r = new volunteersSkills(obj);
    await (r.save())
    return r;
  }
  catch (err) {
    return err;
  }
};

const updateVolunteersSkills = async (obj) => {
  console.log("obj", obj)
  try {
    await volunteersSkills.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
    return "Updated!"
  }
  catch (err) {
    return err;
  }
};

const deleteVolunteersSkills = async (id) => {
  await volunteersSkills.findByIdAndDelete(id);
  return 'Deleted!';
}



const fetchVolunteersSkills = async () => {
  try {
    const data = await volunteersSkills.find({});
    const matrix = data.map(doc => [doc.volunteerId]);
    // const matrix = data.map(doc => [doc.name, doc.skill]);
    return matrix;
  } catch (err) {
    console.error(err);
    return null;
  }
};



module.exports = {
  // getAllVolunteersSkills,
  // getVolunteersSkillsById,
  addVolunteersSkills,
  updateVolunteersSkills,
  deleteVolunteersSkills,
  // displayVolunteersSkills,
  // fetchVolunteersSkills,
  // getDisabledVolunteers,
  // findMatchingVolunteers,

};


//   async function findMatchingVolunteers(request) {
//     try {
//       // const { typeOfHelp, disabledVehicle, from, destination, selectedDay,preferredHours,selectedDate } = request;
//       const typeOfHelp = request.typeOfHelp;
//       const disabledVehicle = request.disabledVehicle;
//       const from = request.from;
//       const destination = request.destination;
//       const selectedDay = request.selectedDay;
//       const preferredHours = request.preferredHours;
//       const selectedDate = request.selectedDate;
//       // Construct the query based on the request details
//       const query = {
//         typeOfHelp: typeOfHelp,
//         disabledVehicle: disabledVehicle,
//         // from:from,
//         // destination:destination,
//         selectedDay:selectedDay,
//         preferredHours:preferredHours,
//         // selectedDate:selectedDate,
//       };

//       // Execute the query to find matching volunteers
//       const matchingVolunteers = await VolunteersSkillsModel.find(query).exec();

//       // You can also perform additional processing or filtering on the matching volunteers if needed

//       return matchingVolunteers;
//     } catch (error) {
//       console.error('Error during search for matching volunteers:', error);
//       throw error;
//     }
//   }



// async function getDisabledVolunteers() {
//   try {
//     const disabledVolunteers = await volunteersSkills.find({
//       // selectedCar: 'רכב נכים עם מעלון',
//       // selectedLanguage: 'רמה בינונית'
//       // selectedCar: 'רכב רגיל',
//       // selectedLanguage: 'שפת אם'
//       // selectedCar: 'רכב נכים עם מעלון',
//       // selectedLanguage: 'רמה טובה'
//     }).exec();
//     // const disabledVolunteers = await volunteer.find({ disabledVehicle: 'כן' }).exec();
//     const volunteerMatrix = [];
//     // Populate the matrix with volunteer data
//     disabledVolunteers.forEach((volunteersSkills) => {
//       const volunteerData = [
//         volunteersSkills.volunteerId,
//         // volunteersSkills.email,
//         // volunteersSkills.password,
//       ];
//       volunteerMatrix.push(volunteerData);
//     });

//     return volunteerMatrix;
//   } catch (error) {
//     console.error('Error during retrieval of disabled volunteers:', error);
//     throw error;
//   }
// }



// const getVolunteersSkillsById = ( id ) => {

//   // ewRequestModel.findOne({}, {}, { sort: { _id: -1 } })
//   // .then(lastRequest => {
//   //   console.log(lastRequest.date); // שם השדה האחרון שתרצה לשלוף
//   //   // עיבוד הנתונים כאן
//   // })
//   return volunteersSkills.findById(id);
// };



// // מסלול ה־GET לתצוגת המידע
// exports.displayVolunteersSkills = (req, res) => {
//   VolunteersSkills.find({}, (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const matrix = data.map(doc => [doc.name, doc.skill]);
//     res.render('volunteersSkills', { matrix }); // שליחת המטריצה לתבנית (view) להצגה
//   });
// };


// const displayVolunteersSkills = async () => {
//   volunteersSkills.find({}, (err, data) => {
//         if (err) {
//           console.error(err);
//           return;
//         }
//         const matrix = data.map(doc => [doc.name, doc.skill]);
//         res.render('volunteersSkills', { matrix }); // שליחת המטריצה לתבנית (view) להצגה
//       });
// };


//   // מסלול ה־GET לתצוגת המידע
//   const displayVolunteersSkills = async (req, res) => {
//   try {
//     const data = await volunteersSkills.find({});
//     const matrix = data.map(doc => [doc.name, doc.skill]);
//     res.render('volunteersSkills', { matrix });
//   } catch (err) {
//     console.error(err);
//     // res.status(500).send('שגיאה בשאילתה');
//   }
// };



// async function findMatchingVolunteers(searchCriteria) {
//   // findMatchingVolunteers = async function (searchCriteria) {

//   try {
//     const { typeOfHelp, disabledVehicle, from, destination, selectedDay, preferredHours, selectedDate } = searchCriteria;

//     // Construct the query based on the search criteria
//     const query = {
//       typeOfHelp: typeOfHelp,
//       disabledVehicle: disabledVehicle,
//       // from: from,
//       // destination: destination,
//       selectedDay: selectedDay,
//       preferredHours: preferredHours,
//       // selectedDate: selectedDate,
//     };

//     // Execute the query to find matching volunteers
//     const matchingVolunteers = await newrequestsModel.find(query).exec();

//     return matchingVolunteers;
//   } catch (error) {
//     console.error('Error during search for matching volunteers:', error);
//     throw error;
//   }
// };

// exports.findMatchingVolunteers = async function (searchCriteria) {
// Function implementation
// };

