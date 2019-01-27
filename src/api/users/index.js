const express = require('express')

const app = express.Router()

app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10)
  const query = req.query.query
  res.send({ id, query })
})

module.exports = app
