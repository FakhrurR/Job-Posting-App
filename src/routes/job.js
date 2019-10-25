const express = require('express')
const Route = express.Router()
const redis = require('../helpers/redis');
// const isAuthorization = passport.authenticate('jwt', { session: false });
const jobController = require('../controllers/job')

Route
    .get('/' , jobController.getJob)
    .post('/', jobController.addJob)
    .patch('/:id',jobController.updateJob)
    .delete('/:id', jobController.deleteJob)
  
module.exports = Route