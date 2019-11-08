const express = require('express')
const Route = express.Router()
const upload = require('../helpers/multer');
const companyController = require('../controllers/company')
const passport = require('passport');
// const redis = require('../helpers/redis');
const isAuthorization = passport.authenticate('jwt', { session: false });

Route
    .get('/' , companyController.getCompany)
    .get('/:id' , companyController.getCompanyById)
    .post('/', upload.single('logo'),companyController.addCompany)
    .patch('/:id',upload.single('logo'), companyController.updateCompany)
    .delete('/:id',companyController.deleteCompany)
  

module.exports = Route