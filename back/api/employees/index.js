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

app.get('/', (req, res) => {
  Employee.find().exec(
    (err, users) => {
      if (err) throw err
      res.type('application/json')
      res.send(users)
    }
  )
})

app.post('/', (req, res) => {
  Employee.create(
    { ...req.body, dateCreated: newDateObj(moment()) },
    (err, doc) => {
      if (err) { throw err }
      else { res.send(doc) }
    }
  )
})

module.exports = app
