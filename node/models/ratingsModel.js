
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const { DateTime } = require('mssql');


// const mongoose   = require('mongoose'), timestamps = require('mongoose-timestamp')

const ratingsSchema = mongoose.Schema(
    {
        volunteerId: {type: String, required: true},      
        organization: {type: String, required: true},
        selectedHospital: {type: String, required: true},
        department: {type: String, required: true},
        anotherLanguage: {type: String, required: true},
        preferredHours: {type: String, required: false},
        preferredDays: {type: String, required: true},
      

    },
    {versionKey : false} 
);
function ratingsdModel(data) {
    this.volunteerId = data.volunteerId;
    this.organization = data.organization;
    this.selectedHospital = data.selectedHospital;
    this.department = data.department;
    this.anotherLanguage = data.anotherLanguage;
    this.preferredHours = data.preferredHours;
    this.preferredDays = data.preferredDays;
    

}

const ratings = mongoose.model('ratings', ratingsSchema, 'ratings');
 
module.exports ={ratingsdModel,ratings} ;  