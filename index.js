const express = require('express')
const cors = require('cors')
require('dotenv').config()
const moviesRouter = require('./routes/movies')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/movies', moviesRouter)

const port = process.env.PORT || 5000

app.listen(port, (err) => {
  if (err) console.error(err)
  else console.log(`Listening on port ${port}`)
})

