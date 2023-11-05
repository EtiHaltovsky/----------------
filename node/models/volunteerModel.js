
const mongoose = require('mongoose');

const volunteerSchema = mongoose.Schema(
    {
      volunteerId: {type: String, required: true},
      volunteerName: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      password:{type: String, required: true},
      address: {type: String, required: true},
      // city: {type: String, required: true},
      fieldOfVolunteering: {type: String, required: true},
      branch: {type: String, required: true},
      disabledVehicle: {type: Boolean, required: true}

    },
    {versionKey : false} 
);

const volunteer = mongoose.model('volunteer', volunteerSchema, 'volunteers');

module.exports = volunteer;
