
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const { DateTime } = require('mssql');
// const { DateTime } = require('mssql');

const newrequestsSchema = mongoose.Schema(
    {
        fieldOfVolunteering: { type: String, required: true },
        disabledVehicle: { type: Boolean, required: true },
        firstAidKnowledge:{ type: Boolean, required: true },
        selectedLanguage:{ type: Boolean, required: true },
        selectedDay: { type: String, required: true },
        preferredHours: { type: String, required: true },
        from: { type: String, required: true },
        destination: { type: String, required: true },
        selectedDate: { type: Date, required: false },

    },
    { versionKey: false }
);

// userSchema.set('strictQuery', false);

const newrequests = mongoose.model('newrequests', newrequestsSchema, 'newrequests');

module.exports = newrequests;  