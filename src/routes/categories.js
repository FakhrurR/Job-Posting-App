const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/categories')

Route
    .get('/' , categoryController.getCategory)
    .post('/', categoryController.addCategory)
    .patch('/', categoryController.updateCategories)
    .delete('/', categoryController.deleteCategories)
  

module.exports = Route