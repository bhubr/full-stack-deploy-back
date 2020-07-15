const express = require('express')
const connection = require('../connection')

const router = express.Router()

router.get('/', (req, res) => {
  connection.query('SELECT * from movie', (err, movies) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: err.message })
    }
    res.json(movies)
  })
})

router.post('/', (req, res) => {
  const sqlInsert = 'INSERT INTO movie SET ?'
  connection.query(sqlInsert, [req.body], (err, stats) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: err.message })
    }
    const newMovie = { ...req.body, id: stats.insertId }
    return res.status(201).json(newMovie)
  })
})

module.exports = router
