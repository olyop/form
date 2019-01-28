const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    first: {
      type: String,
      required: true
    },
    last: String
  },
  biography: String,
  twitter: {
    type: String,
    validate: {
      validator: text => text.indexOf('https://twitter.com/') === 0,
      message: 'Twitter handle must start with https://twitter.com/'
    }
  },
  facebook: {
    type: String,
    validate: {
      validator: text => text.indexOf('https://www.facebook.com/') === 0,
      message: 'Facebook must start with https://www.facebook.com/'
    }
  },
  linkedin: {
    type: String,
    validate: {
      validator: text => text.indexOf('https://www.linkedin.com/') === 0,
      message: 'LinkedIn must start with https://www.linkedin.com/'
    }
  },
  profilePicture: Buffer,
  created: {
    type: Date,
    default: Date.now
  }
})

const bookSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  title: String,
  summary: String,
  isbn: String,
  thumbnail: Buffer,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  },
  ratings: [
    {
      summary: String,
      detail: String,
      numberOfStars: Number,
      created: {
        type: Date,
        default: Date.now
      }
    }
  ],
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = { authorSchema, bookSchema }
