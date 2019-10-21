const express = require('express')
const Route = express.Router()

const categories = require('./routes/categories')
const company = require('./routes/company')
const job = require('./routes/job')

Route
 .use('/categories', categories)
 .use('/company', company)
 .use('/job', job)

 module.exports = Route