const express = require('express')
const Route = express.Router()

const categories = require('./routes/categories')

Route
 .use('/categories', categories)

 module.exports = Route