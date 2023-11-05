//localhost:8000/users/
// const express = require('express');
// const userControllers = require('../Controllers/userController');
// const router = express.Router();

const express = require("express");
const userModel = require("./models");
const app = express();
// const router = express.Router();



app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// router.route('/').get(async(req, res) => {
//    const result = await userControllers.getAllUsers();
//    res.json(result);
// });

// router.route('/:id').get(async(req, res) => {
//     const result = await userControllers.getUserById(req.params.id);
//     res.json(result);
// });

// router.route('/').post(async(req, res) => {
//     const obj = req.body;
//     const result = await userControllers.addUser(obj);
//     console.log(result)
//     res.json(result);
// });

// router.route('/:id').put(async(req, res) => {
//     const obj = req.body;
//     const result = await userControllers.updateUser(obj, req.params.id);
//     res.json(result);
// });

// router.route('/:id').delete((req, res) => {
//     const result = userControllers.deleteUser(req.params.id);
//     res.json(result);
// })


// // ...
// app.post("/add_user", async (request, response) => {
//     const user = new userModel(request.body);
  
//     try {
//       await user.save();
//       response.send(user);
//     } catch (error) {
//       response.status(500).send(error);
//     }
// });
module.exports = router;