let mysql = require('mysql');
let config = require('./index.js');

let connection = mysql.createConnection(config);

let sql = `SELECT * FROM customers`;
connection.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

connection.end(); 
