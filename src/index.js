const express = require('express')
const Route = express.Router()

const categories = require('./routes/categories')
const company = require('./routes/company')
const job = require('./routes/job')
const user = require('./routes/user')

Route
 .use('/categories', categories)
 .use('/company', company)
 .use('/job', job)
 .use('/user', user)

 module.exports = Route