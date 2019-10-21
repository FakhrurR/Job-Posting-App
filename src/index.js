const express = require('express')
const Route = express.Router()

const categories = require('./routes/categories')
const company = require('./routes/company')

Route
 .use('/categories', categories)
 .use('/company', company)

 module.exports = Route