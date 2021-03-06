const mysql = require('mysql');
require('dotenv').config()

const con = mysql.createConnection({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PSW,
    database : process.env.DB_NAME,
    multipleStatements: true
});

module.exports = con;