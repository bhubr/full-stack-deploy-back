const express = require('express')

const app = express()

app.listen(5000, (err) => {
  if (err) console.error(err)
  else console.log(`Listening on port 5000`)
})

