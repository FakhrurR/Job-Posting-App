const express = require('express')
const Route = express.Router()

const jobController = require('../controllers/job')

Route
    .get('/' , jobController.getJob)
    .get('/search' , jobController.searchJob)
    .post('/', jobController.addJob)
    .patch('/:id', jobController.updateJob)
    .delete('/:id', jobController.deleteJob)
  

module.exports = Route