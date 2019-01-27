const express = require('express')

const responseTime = require('response-time')
const createError = require('http-errors')
const compression = require('compression')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const fs = require('fs')

// import api router
const api = require('./src/api')

const app = express()

// logger
app.use(morgan('dev'))
app.use(morgan(
  'dev',
  { stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' }) }
))

app.use(responseTime())
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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
