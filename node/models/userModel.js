// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema(
//     {
//         userName: {type: String, required: true},
//         password: {type: String, required: true}
//     },
//     {versionKey : false} 
// );

// // userSchema.set('strictQuery', false);

// const User = mongoose.model('user', userSchema, 'users');

// module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
            userName: {type: String, required: true},
            password: {type: String, required: true}
        },

    

);

const User = mongoose.model("User", UserSchema);

module.exports = User;
module.exports = app;


//   name: {
//     type: String,
//     required: true,
//   },
//   age: {
//     type: Number,
//     default: 0,
//   },