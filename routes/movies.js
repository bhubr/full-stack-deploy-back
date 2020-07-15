const express = require('express')
const connection = require('../connection')

const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * from movie', (err, movies) => {
    res.json(movies)
  })
})

module.exports = router
