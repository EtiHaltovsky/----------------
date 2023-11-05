
// const { Timestamp } = require('mongodb');
// const mongoose = require('mongoose');
// const { DateTime } = require('mssql');


// // const mongoose   = require('mongoose'), timestamps = require('mongoose-timestamp')

// const PreferencesSchema = mongoose.Schema(
//     {
//         volunteerId: {type: String, required: false},
//         selectedLanguage: {type: Number, required: true},
//         firstAidKnowledge: {type: Number, required: true},
//         selectedCar: {type: Number, required: false},  

//     },
//     {versionKey : false} 
// );

// // userSchema.set('strictQuery', false);

// const Preferences = mongoose.model('Preferences', preferencesSchema);

// // const Preference = mongoose.model('Preference', PreferencesSchema, 'Preferences');
 
// module.exports = Preferences;  






const mongoose = require('mongoose');

const preferencesSchema = new mongoose.Schema({
    volunteerId: {type: String, required: true},
    selectedLanguage: {type: Number, required: true},
    firstAidKnowledge: {type: Number, required: true},
    selectedCar: {type: Number, required: true},

}, { versionKey: false });

// function PreferenceModel(data) {
//     this.volunteerId = data.volunteerId;
//     this.selectedLanguage = data.selectedLanguage;
//     this.firstAidKnowledge = data.firstAidKnowledge;
//     this.selectedCar = data.selectedCar;
 

// }



const preference = mongoose.model('preference', preferencesSchema,'preferences');
  
module.exports = preference;

// const preference = mongoose.model('preference', preferencesSchema,'preferences');
// module.exports = { preference };
// module.exports = { PreferenceModel, preference };
