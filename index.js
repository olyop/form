const express = require('express')

const cookieParser = require('cookie-parser')
const responseTime = require('response-time')
const createError = require('http-errors')
const compression = require('compression')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const logger = require('morgan')
const helmet = require('helmet')
const uuid = require('uuid/v4')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

// import api router
const api = require('./src/api')

const app = express()

mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true },
  err => { if (err) throw err }
)

// middleware stack
app.use(logger('dev'))
app.use(responseTime())
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// serve static website
app.use(express.static(path.join(__dirname, 'build')))

// route api requests
app.use('/api', api)

// catch 404 and forward to error handler
app.use((err, req, res, nxt) => nxt(createError(404)))

// error handler
app.use((err, req, res, nxt) => {
  res.status(err.status || 500)
  res.send(err.stack)
})

module.exports = app
