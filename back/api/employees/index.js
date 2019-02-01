const express = require('express')

const mongoose = require('mongoose')
const moment = require('moment')
const path = require('path')

const { Employee } = require('../../db/models')

const newDateObj = date => ({
  year: parseInt(date.format('YYYY'), 10),
  month: parseInt(date.format('MM'), 10),
  day: parseInt(date.format('DD'), 10)
})

const app = express.Router()

app.get('/', (req, res, nxt) => {
  Employee.find(
    {},
    (err, users) => {
      if (err) { nxt(err) }
      res.json(users)
    }
  )
})

app.post('/', (req, res, nxt) => {
  Employee.create(
    { ...req.body, dateCreated: newDateObj(moment()) },
    (err, doc) => {
      if (err) { nxt(err) }
      res.json(doc)
    }
  )
})

app.delete('/', (req, res, nxt) => {
  const _id = req.body._id
  Employee.deleteOne(
    { _id },
    err => {
      if (err) { nxt(err) }
      res.json({ _id })
    }
  )
})

module.exports = app
