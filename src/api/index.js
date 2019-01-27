const express = require('express')

const fs = require('fs')

const app = express.Router()

// import routes
const users = require('./users')
const employees = require('./employees')

// routes
app.use('/users', users)
app.use('/employees', employees)

module.exports = app
