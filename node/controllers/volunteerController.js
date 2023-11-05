// const {volunteer} = require('../models/volunteerModel');
const volunteer = require('../models/volunteerModel'); // Replace with the correct path to your volunteer model

const ratings = require('../models/ratingsModel');

const mongoose = require('mongoose');
const newrequests = require('../models/newRequestsModel');
// const preferences = require('../models/preferencesModel');




  // const getAllVolunteers = async () => {
  //   try {
  //     const vol = await volunteer.find();
  //     console.log(vol) 
  //     return vol
  //   }
  //   catch(err) {
  //     return err
  //   }
  // };



  const getUserById = async( obj ) => {
    const vol=  await volunteer.findOne({email:obj.email,password:obj.password})
    if(vol)
    {
      return true
    }
    else{
      return false
    }
    console.log(obj)
    // return volunteer.findById(obj);
  };


  // const getVolunteerById =async ( id ) => {
  //   const travel= await volunteer.findOne({volunteerId:id});
  //     if (travel){
  //       return true;
  //   }
  //   else{
  //       return false;
  //   }
  // };
  



// const filterVolunteers = async (req, res) => {
//   try {
//     const { requestId } = req.params;
//     const request = await newrequests.findById(requestId).lean();

//     const volunteers = await volunteer.aggregate([
//       {
//         $match: { vehicle_type: request.vehicle_type }
//       }
//     ]);

//     res.status(200).json({ volunteers });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };
   
  const addVolunteer = async (obj) => {
    try{
      const us = new volunteer(obj);
      await (us.save())
      if(us)
      return true
      else
       return false
     
    }
    catch(err){
      return err;
    }
  };
  
  const updateVolunteer = async (obj) => {
    console.log("obj", obj)
    try{
      await volunteer.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deleteVolunteer = async (id) => {
    await volunteer.findByIdAndDelete(id);
      return 'Deleted!';
    }  


    async function getcheckVolunteer() {
      try {
        const checkVolunteer = await volunteer.find({
          disabledVehicle:'כן'
        }).exec();
        
        const volunteerMatrix = checkVolunteer.map((volunteer) => {
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
    
    
    async function getHandyVolunteers() {
      try {
        // קוראים לפונקציה שמביאה את המתנדבים עם הסימון "כן" לרכב נכים
        const volunteerMatrix = await getcheckVolunteer();//מתנדבים עם רכב נכים
    
        const handyVolunteers = await ratings.find({
          volunteerId: { $in: volunteerMatrix.map(volunteerData => volunteerData[0]) },
          // preferredDays:'רביעי',
          // preferredHours:'17',
          
        }).exec();
    
        return handyVolunteers;
      } catch (error) {
        console.error('Error during retrieval of handy volunteers:', error);
        throw error;
      }
    }
    

  module.exports = {
    // getAllVolunteers,
    // getVolunteerById,
    getUserById,
    addVolunteer,
    updateVolunteer,
    deleteVolunteer,
    getcheckVolunteer,
    // getHandyVolunteers,
    // getcheckVolunteerLanguage,
    // getcheckQuery,
    // checkVolunteer,
      // filterVolunteers,
    // findMatchingVolunteers,
    // getDisabledVolunteers,
    // selectValue,
    // getVolunteers,
    // fetchAllDataFromCollection,
  };

  // async function getcheckVolunteer() {
    //   try {
    //     const checkVolunteer = await volunteer.find({
    //       disabledVehicle:'כן'
    //     }).exec();
    //     // const disabledVolunteers = await volunteer.find({ disabledVehicle: 'כן' }).exec();
    //     const volunteerMatrix = [];
    //     // Populate the matrix with volunteer data
    //     checkVolunteer.forEach((volunteer) => {
    //       const volunteerData = [
    //         volunteer.volunteerId,
    //         volunteer.fieldOfVolunteering,
    //       ];
    //       volunteerMatrix.push(volunteerData);
    //     });
    
    //     return volunteerMatrix;
    //   } catch (error) {
    //     console.error('Error during retrieval of disabled volunteers:', error);
    //     throw error;
    //   }
    // }



    // const matrix = [];

    // collection.find({}).toArray(function(err, result) {
    //   if (err) throw err;
    
    //   for (let i = 0; i < result.length; i++) {
    //     const row = []; // שורה חדשה במטריצה
    
    //     // כאן תוכל לשלב את הנתונים לתוך השורה
    //     row.push(result[i].field1);
    //     row.push(result[i].field2);
    //     // וכן הלאה
    
    //     matrix.push(row); // הוסף את השורה למטריצה
    //   }
    
    //   console.log(matrix); // תצוגה של המטריצה
    // });




    
  

    // async function getDisabledVolunteers() {
    //   try {
    //     const disabledVolunteers = await volunteer.find({ 
    //       disabledVehicle: 'כן',
    //       languageSelection: 'שפת אם'
    //     }).exec();
    //     // const disabledVolunteers = await volunteer.find({ disabledVehicle: 'כן' }).exec();
    //     const volunteerMatrix = [];
    //     // Populate the matrix with volunteer data
    //     disabledVolunteers.forEach((volunteer) => {
    //       const volunteerData = [
    //         volunteer.volunteerId,
    //         volunteer.email,
    //         volunteer.password,
    //       ];
    //       volunteerMatrix.push(volunteerData);
    //     });
    
    //     return volunteerMatrix;
    //   } catch (error) {
    //     console.error('Error during retrieval of disabled volunteers:', error);
    //     throw error;
    //   }
    // }
    



    // async function getDisabledVolunteers() {
    //   try {
    //     const disabledVolunteers = await volunteer.find({ disabledVehicle: 'כן' }).exec();
    //     return disabledVolunteers;
    //   } catch (error) {
    //     console.error('שגיאה במהלך שליפת המתנדבים:', error);
    //     throw error;
    //   }
    // }
    
    // // שימוש בפונקציה לדוגמה
    // getDisabledVolunteers()
    //   .then(disabledVolunteers => {
    //     console.log('המתנדבים שמופיעים בטבלה ויש להם רכב מוגבל:', disabledVolunteers);
    //   })
    //   .catch(error => {
    //     console.error('שגיאה:', error);
    //   });




// // Example query to find matching volunteers based on data from "newrequests" and "volunteersSkills" tables
// const findMatchingVolunteers = async () => {
//   try {
//     // Retrieve data from the "newrequests" table
//     const newRequestsData = await newrequests.find( getDisabledVolunteers());

//     // Retrieve data from the "volunteersSkills" table
//     const volunteersSkillsData = await volunteersSkills.find({ /* Add your filters for volunteers' skills */ });

//     // Perform filtering or matching logic based on the retrieved data
//     const matchingVolunteers = volunteersSkillsData.filter(volunteer => {
//       // Add your filtering or matching logic using the retrieved data from both tables
//       // For example, you can check if the volunteer's skills match the requested skills from new requests
//       return newRequestsData.some(request => request.requestedSkills.includes(volunteer.skill));
//     });

//     console.log(matchingVolunteers);
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Call the function to execute the query
// findMatchingVolunteers();



// // Example query to find matching volunteers based on data from "newrequests" and "volunteersSkills" tables
// const findMatchingVolunteers = async () => {
//   try {
//     // Retrieve data from the "newrequests" table
//     const newRequestsData = await NewRequest.find({ /* Add your filters for new requests */ });

//     // Retrieve data from the "volunteersSkills" table
//     const volunteersSkillsData = await VolunteersSkills.find({ /* Add your filters for volunteers' skills */ });

//     // Perform filtering or matching logic based on the retrieved data
//     const matchingVolunteers = volunteersSkillsData.filter(volunteer => {
//       // Add your filtering or matching logic using the retrieved data from both tables
//       // For example, you can check if the volunteer's skills match the requested skills from new requests
//       return newRequestsData.some(request => request.requestedSkills.includes(volunteer.skill));
//     });

//     console.log(matchingVolunteers);
//   } catch (err) {
//     console.error(err);
//   }
// };

// // Call the function to execute the query
// findMatchingVolunteers();
