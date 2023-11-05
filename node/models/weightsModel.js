// class weights {
//     constructor(name,id,dateOfBirth,phone,email,gender,fieldOfVolunteering,branch,disabledVehicle) {
//       this.name = name;
//       this.id=id;
//       //תחום התנדבות
//       this.fieldOfVolunteering=fieldOfVolunteering;
//       //סניף
//       this.branch=branch;
//       //האם צריך רכב נכים
//       this.disabledVehicle=disabledVehicle;
//   //האם יודע להגיש עזרה ראשונה
//     }
  
  
  // }
  const mongoose = require('mongoose');
const { Int, Bit } = require('mssql');

const weightSchema = mongoose.Schema(
    {
      weightId: {type: Int, required: true},
      weightName: {type: String, required: true},
      fieldOfVolunteering: {type: String, required: true},
      branch: {type: String, required: true},
      disabledVehicle: {type: Bit, required: true},
      KnowledgeOfFirstAid: {type: Bit, required: true}

    },
    {versionKey : false} 
);

// userSchema.set('strictQuery', false);

const weight = mongoose.model('weight', weightSchema, 'weights');

module.exports = weight;  
