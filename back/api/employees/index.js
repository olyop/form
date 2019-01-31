const express = require('express')

const mongoose = require('mongoose')
const moment = require('moment')
const path = require('path')

const { Employee } = require('../../db/models')

const newDateObj = date => ({
  year: Number(date.format('YYYY')),
  month: Number(date.format('MM')),
  day: Number(date.format('DD'))
})

const app = express.Router()

app.get('/', (req, res, nxt) => {
  Employee.find(
    {},
    (err, users) => {
      if (err) { nxt(err) }
      res.type('application/json')
      res.send(users)
    }
  )
})

app.post('/', (req, res, nxt) => {
  Employee.create(
    { ...req.body, dateCreated: newDateObj(moment()) },
    (err, doc) => {
      if (err) { nxt(err) }
      res.type('application/json')
      res.send(doc)
    }
  )
})

app.delete('/', (req, res, nxt) => {
  const _id = req.body._id
  Employee.deleteOne(
    { _id },
    err => {
      if (err) { nxt(err) }
      res.send({ _id })
    }
  )
})

module.exports = app
