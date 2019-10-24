const express = require('express')
const Route = express.Router()

const redis = require('../helpers/redis');
const isAuthorization = require('../helpers/auth')
const jobController = require('../controllers/job')

Route
    .get('/' , redis.getCached , jobController.getJob)
    .post('/', jobController.addJob)
    .patch('/:id',jobController.updateJob)
    .delete('/:id', jobController.deleteJob)
  
module.exports = Route