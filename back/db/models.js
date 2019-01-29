const mongoose = require('mongoose')

const { employeeSchema } = require('./schemas')

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = { Employee }
