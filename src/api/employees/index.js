const express = require('express')

const moment = require('moment')
const uuid = require('uuid/v4')
const path = require('path')
const fs = require('fs')

const app = express.Router()

const newDateObj = date => ({
  year: date.format('YYYY'),
  month: date.format('MM'),
  day: date.format('DD')
})

app.get('/', (req, res) => {
  const file = path.join(__dirname, 'employees.json')
  res.type('application/json')
  fs.createReadStream(file).pipe(res)
})

app.post('/', (req, res) => {
  res.send({
    ...req.body,
    key: uuid(),
    date: newDateObj(moment())
  })
})

module.exports = app
