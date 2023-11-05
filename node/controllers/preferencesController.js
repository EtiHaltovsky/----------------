// const preferences = require('../models/PreferencesModel');
// const __make_matrix = require('../__make_matrix'); // Update the path accordingly

const preferences=require('../models/PreferencesModel')
// const distance= require('../distance')
const addPreferences = async (obj) => {
      try{

        const r = new preferences(obj);
//         debugger; // Set breakpoint here
// console.log(r,obj)
        await (r.save())
        debugger; // Set breakpoint here

        return r;
      }
      catch(err){
        return err;
      }
    };
    

// const PreferencesModel = require('./models/PreferencesModel');
// const Munkres.prototype.__make_matrix = async (n, val) => {
  // const munkres = require('munkres-js');

  
 
  
  // הכנסת המשקלים של האילוצים לתאים המתאימים במטריצה
  // for (var i = 0; i < n; ++i) {
  //   for (var j = 0; j < n; ++j) {
  //     if (j === i) {
  //       matrix[i].push(val);
  //     } else {
  //       matrix[i].push(0);
  //     }
  //   }
  // }


__make_matrix = async function () {

  //שולפת את מאיפה לאיפה של בקשה
    try {
    const PreferencesModel=require('../models/PreferencesModel')
    const volunteerModel=require('../models/volunteerModel')
const newRequestsModel=require('../models/newRequestsModel')

  const newRequests = await newRequestsModel.find();//בקשות 
  // console.log("newRequests", newRequests)
  // const newRequests = await newRequestsModel.find({}).maxTimeMS(15000); // Increase timeout to 15,000 milliseconds (15 seconds)

    // const volunteer = await volunteerModel.find();//מתנדבים 
   
// Extract "from" and "where" fields from each request
const fromArray = newRequests.map((request) => request.from);
const whereArray = newRequests.map((request) => request.destination);

// Print the extracted fields
//console.log("From Array:", fromArray);
//console.log("Where Array:", whereArray);
    // const volunteersSkills = await volunteersSkillsModel.find();//כיתוב אילוצים
    const preferences = await PreferencesModel.find();//העדפות - דירוגים
const n = preferences.length;
const newMatrix = Array.from({ length: n+1 }, () => Array.from({ length: n+1 }, () => null))

  //console.log(n)
  for (var i = 1, j = 0; i < n+1; i++) {
    newMatrix[i][j] = preferences[i-1].volunteerId;
  }
const prefName = ['selectedLanguage', 'firstAidKnowledge', 'selectedCar','way A','way B']//להוסיף מרחק א ומרחק ב
  //להגדיר מערך עם כל האילוצים.....
  for (var j = 1, i = 0; j < n+1; j++) {
    newMatrix[i][j] = prefName[j-1];
  }

  //קריאה לvolunteers
  //במערך filter שיביא לי את האובייקט לפי הפרפרנס במקום i.volunteerId
  const volunteers = await volunteerModel.find({ disabledVehicle: true });

  for (var i = 1; i < n + 1; i++) {

    for (var j = 1; j < n+1; j++) {
    if (prefName[j - 1] === 'way A') {
      let volunteerData = volunteers.find(v => v.id === preferences[i - 1].volunteerId);
      if (volunteerData) {
        let distance = volunteerData.fromArray;
        // שליחת המרחק לפונקציה המתאימה
        // doSomethingWithDistance(distance);
      }
    } else if (prefName[j - 1] === 'way B') {
      let volunteerData = volunteers.find(v => v.id === preferences[i - 1].volunteerId);
      if (volunteerData) {
        // שליחת המידע הנדרש לפונקציה המתאימה
        // doSomethingWithVolunteerData(volunteerData);
      }
    }
  
    newMatrix[i][j] = preferences[i - 1][prefName[j - 1]];
  }

}

// console.log(newMatrix)
return newMatrix;


} catch (error) {
  console.error('Error retrieving preferences:', error);
  return error;
}

// return newMatrix;
};



  const getAllPreferences = async () => {
    try {
      const re = await preferences.find().limit(2).exec();;
      return re
    }
    catch(err) {
      return err
    }
  };
  
  const getPreferencesById = async ( _id ) => {
    console.log(_id)
    const pref = await preferences.findById(_id);
    console.log(pref)
    return pref;
  };
  
  

  
  const updatePreferences = async (obj) => {
    console.log("obj", obj)
    try{
      await preferences.findByIdAndUpdate(obj._id.toJSON('new ObjectId'), obj);
      return "Updated!"
    }
    catch(err){
      return err;
    }
  };
  
  const deletePreferences = async (id) => {
    await preferences.findByIdAndDelete(id);
      return 'Deleted!';
    }  

  module.exports = {
    getAllPreferences,
    __make_matrix,
    getPreferencesById,
    addPreferences,
    updatePreferences,
    deletePreferences,
  }; 

 