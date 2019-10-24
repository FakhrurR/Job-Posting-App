const express = require('express')
const Route = express.Router()

const userController = require('../controllers/user')

Route
    .get('/' , userController.getUser)
    .post('/signup', userController.signupUser)
    .post('/login', userController.loginUser)
    .patch('/:id', userController.updateUser)
    .delete('/:id', userController.deleteUser)
  

module.exports = Route