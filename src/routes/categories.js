const express = require('express')
const Route = express.Router()

const categoryController = require('../controllers/categories')

Route
    .get('/' , categoryController.getCategory)
    .get('/:id' , categoryController.getCategoryById)
    .post('/', categoryController.addCategory)
    .patch('/:id', categoryController.updateCategory)
    .delete('/:id', categoryController.deleteCategory)
  

module.exports = Route