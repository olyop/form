const express = require('express')
const uuid = require('uuid/v4')
const path = require('path')
const moment = require('moment')
const fs = require('fs')

const router = express.Router()

const newDateObj = date => ({
  year: date.format('YYYY'),
  month: date.format('MM'),
  day: date.format('DD')
})

router.get('/', (req, res) => {
  let file = path.join(__dirname, 'people.json')
  res.type('application/json')
  fs.createReadStream(file).pipe(res)
})

router.post('/', (req, res) => {
  res.send({
    ...req.body,
    date: newDateObj(moment()),
    key: uuid()
  })
})

module.exports = router
