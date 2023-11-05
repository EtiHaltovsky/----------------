const mongoose = require('mongoose');

const recipientSchema = mongoose.Schema(
    {
      recipientId: {type: String, required: true},
      recipientName: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String, required: true},
      password: {type: String, required: true},
      address: {type: String, required: true},
      city: {type: String, required: true},
      kindOfHelp: {type: String, required: true},
      branch: {type: String, required: true},
      needDisabledVehicle: {type: Boolean, required: true}

    },
    {versionKey : false} 
);

const recipient = mongoose.model('recipient', recipientSchema, 'recipients');
 
module.exports = recipient;  