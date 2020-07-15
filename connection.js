const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'moviesapp',
  password: process.env.DB_PASS
})

module.exports = connection

