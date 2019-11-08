const express = require('express')
const Route = express.Router()
const passport = require('passport');
// const redis = require('../helpers/redis');
const isAuthorization = passport.authenticate('jwt', { session: false });
const jobController = require('../controllers/job')

Route
    .get('/', jobController.getJob)
    .get('/:id' , jobController.getJobById)
    .post('/', jobController.addJob)
    .patch('/:id',jobController.updateJob)
    .delete('/:id',jobController.deleteJob)
  
module.exports = Route