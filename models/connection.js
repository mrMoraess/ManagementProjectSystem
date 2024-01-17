const mysql = require("mysql2")

require("dotenv").config()

const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT  
})

module.exports = connection