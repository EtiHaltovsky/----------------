// const express = require('express')

// const router = express.Router();

// const userControllers = require('../controllers/usersController');
// //startPoint = localhost:8000/users

// // router.route.get('/:id', (req, res) => {
// //     const id = req.params.id;
// //     const user = users.find(u => u.id == id);
// //     res.json(user);
// // })


// //Add User
// router.route('/').post((req, res) => {
//     const newUser = req.body;
//     const result = userControllers.addUser(newUser)
//     res.json(result);
// })

// //Get User
// router.route('/').get((req, res) => {
//     const id = req.params.id;
//     const result = userControllers.getUser(id)
//     res.json(result);
// })

// //Get User By Id

// router.route('/:id').get((req, res) => {
//     const id = req.params.id;
//     const result = userControllers.getUser(id)
//     res.json(result);
// })

// //Post User

// router.route('/signin').post((req, res) => {
//     const { username, password } = req.body;
//     const user = UserService.getUserByUsername(username, password);
//     res.json(user);
// })

// router.route('/:id').put((req, res) => {
//     const { id } = req.params;
//     const { user } = req.body;
//     const updatedUser = UserService.updateUser(id, user);

//     res.json(updatedUser);
// })


// module.exports = router;




