
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const { DateTime } = require('mssql');


// const mongoose   = require('mongoose'), timestamps = require('mongoose-timestamp')

const volunteersSkillsSchema = mongoose.Schema(
    {
        volunteerId: {type: String, required: true},
        selectedLanguage: {type: String, required: true},
        firstAidKnowledge: {type: String, required: true},
        selectedCar: {type: String, required: false},
        organization: {type: String, required: true},
        selectedHospital: {type: String, required: true},
        department: {type: String, required: true},
        anotherLanguage: {type: String, required: true},
        // qualities: {type: String, required: true},
        preferredHours: {type: String, required: false},
        preferredDays: {type: String, required: true},
      

    },
    {versionKey : false} 
);

// userSchema.set('strictQuery', false);

const volunteersSkills = mongoose.model('volunteersSkills', volunteersSkillsSchema, 'volunteersSkills');
 
module.exports = volunteersSkills;  