const express = require('express')
const passport = require('passport');
const Route = express.Router()
const userController = require('../controllers/user')
const upload = require('../helpers/multer');
const isAuthorization = passport.authenticate('jwt', { session: false });

Route
    .get('/' , userController.getUser)
    .get('/:id' , userController.getUserById)
    .post('/signup',upload.single('photo'), userController.signupUser)
    .post('/login', userController.loginUser)
    .patch('/:id', isAuthorization,upload.single('photo'),userController.updateUser)
    .delete('/:id', isAuthorization,userController.deleteUser)
  

module.exports = Route