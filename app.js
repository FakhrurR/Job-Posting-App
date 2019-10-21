const express = require('express')
const bodyParser = require('body-parser')
const configs = require('./src/configs/configs')

const app = express()
const port = configs.port
const routerNavigator = require('./src/index')

app.listen(port, () => {
    console.log(`\n Server listening on port ${port}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/', routerNavigator)

module.exports = app


