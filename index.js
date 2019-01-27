const express = require('express')

const cookieParser = require('cookie-parser')
const responseTime = require('response-time')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const fs = require('fs')

// import api router
const apiRouter = require('./api')

// paths
const accessLogFile = path.join(__dirname, 'access.log')
const buildFolder = path.join(__dirname, 'build')
const apiFolder = path.join(__dirname, 'api')

const app = express()

app.use(responseTime())
app.use(morgan(
  'dev',
  { stream: fs.createWriteStream(accessLogFile, { flags: 'a' }) }
))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// serve static website
app.use(express.static(buildFolder))

// route api requests
app.use(apiFolder, apiRouter)

// catch 404 and forward to error handler
app.use('/', (err, req, res, nxt) => nxt(createError(404)))

// error handler
app.use('/', (err, req, res, nxt) => {
  res.status(err.status || 500)
  res.send(err.stack)
})

module.exports = app
