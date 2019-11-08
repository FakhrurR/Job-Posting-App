const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const configs = require('./src/configs/configs')
const cors = require('cors')
const path = require('path')

const app = express()
const port = configs.port
const routerNavigator = require('./src/index')

app.use(cors())

app.listen(port, () => {
    console.log(`\n Server listening on port ${port}`)
})

app.use(passport.initialize())
require ('./src/helpers/auth')(passport)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/public',express.static(path.join(__dirname , 'public')))

app.use('/', routerNavigator)

module.exports = app


