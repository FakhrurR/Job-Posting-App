const express = require('express')
const passport = require('passport');
const Route = express.Router()
const userController = require('../controllers/user')
const isAuthorization = passport.authenticate('jwt', { session: false });

Route
    .get('/' , userController.getUser)
    .get('/:id' , userController.getUserById)
    .post('/signup', userController.signupUser)
    .post('/login', userController.loginUser)
    .patch('/:id', isAuthorization,userController.updateUser)
    .delete('/:id', isAuthorization,userController.deleteUser)
  

module.exports = Route