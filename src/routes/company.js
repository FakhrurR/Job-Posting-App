const express = require('express')
const Route = express.Router()
const upload = require('../helpers/multer');
const companyController = require('../controllers/company')

Route
    .get('/' , companyController.getCompany)
    .get('/:id' , companyController.getCompanyById)
    .post('/', upload.single('logo'),companyController.addCompany)
    .patch('/:id', companyController.updateCompany)
    .delete('/:id', companyController.deleteCompany)
  

module.exports = Route