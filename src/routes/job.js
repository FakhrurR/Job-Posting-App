const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/job')

Route
    .get('/' , categoryController.getJob)
    .post('/', categoryController.addJob)
    .patch('/', categoryController.updateJob)
    .delete('/', categoryController.deleteJob)
  

module.exports = Route