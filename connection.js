const mysql = require('mysql2')

const dbSettings = typeof process.env.CLEARDB_DATABASE_URL === 'string'
  ? process.env.CLEARDB_DATABASE_URL
  : {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS

  }

const connection = mysql.createPool(dbSettings)

module.exports = connection

