const express = require('express')

const path = require('path')
const fs = require('fs')

const router = express.Router()

// import routes
const peopleRouter = require('./people')

// routes
router.use('/people', peopleRouter)

module.exports = router
