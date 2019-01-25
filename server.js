const express = require('express')

const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')
const fs = require('fs')

// import api router
const apiRouter = require('./api')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'build')))

// serve static website
app.use('/', express.static('build'))

// route api requests
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use('/', (err, req, res, nxt) => {
  nxt(createError(404))
})

// error handler
app.use('/', (err, req, res, nxt) => {
  res.status(err.status || 500)
  res.send(err.stack)
})

module.exports = app
