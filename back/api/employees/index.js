const express = require('express')

const mongoose = require('mongoose')
const moment = require('moment')
const uuid = require('uuid/v4')
const path = require('path')
const fs = require('fs')

const { Employee } = require('../../db/models')
Employee.createCollection()

const app = express.Router()

const newDateObj = date => ({
  year: date.format('YYYY'),
  month: date.format('MM'),
  day: date.format('DD')
})

app.get('/', (req, res) => {
  Employee
    .find()
    .exec((err, users) => {
      res.send(users)
    })
})

app.post('/', (req, res) => {
  const newEmployee = {
    ...req.body,
    key: uuid(),
    date: newDateObj(moment())
  }
  Employee.create(newEmployee)
  res.send(newEmployee)
})

module.exports = app
