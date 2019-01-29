const mongoose = require('mongoose')
const { Schema } = mongoose

const employeeSchema = new Schema({
  firstName: { type: String, required: true },
  familyName: { type: String, required: true },
  gender: { type: String, default: 'male' },
  dob: { type: Date, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, default: 'nsw' },
  emailUpdates: { type: Boolean, default: false }
})

module.exports = { employeeSchema }
