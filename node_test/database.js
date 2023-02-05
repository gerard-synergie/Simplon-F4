var mysql = require('mysql')
var connection = mysql.createConnection({   
    host: "localhost",   
    user: "phpmyadmin",  
    password: "Ipdcdb2m" , 
    database:"test"});
const express = require('express')
const app = express();
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database test connected')
})
module.exports = connection