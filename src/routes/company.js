const express = require('express')
const Route = express.Router()

const companyController = require('../controllers/company')

Route
    .get('/' , companyController.getCompany)
    .get('/:id' , companyController.getCompanyById)
    .post('/', companyController.addCompany)
    .patch('/:id', companyController.updateCompany)
    .delete('/:id', companyController.deleteCompany)
  

module.exports = Route