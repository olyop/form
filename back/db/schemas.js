const mongoose = require('mongoose')
const { Schema } = mongoose

const employeeSchema = new Schema({
  dateCreated: {
    year: Number,
    month: Number,
    day: Number
  },
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  gender: { type: String, default: 'male' },
  dob: {
    year: Number,
    month: Number,
    day: Number
  },
  mobileNumber: {
    countryCode: String,
    phoneNumber: String
  },
  email: { type: String, required: true },
  state: { type: String, default: 'nsw' },
  emailUpdates: { type: Boolean, default: false }
})

module.exports = { employeeSchema }
