const express = require('express')

const fs = require('fs')

const app = express.Router()

// import routes
const employees = require('./employees')

// routes
app.use('/employees', employees)

module.exports = app
