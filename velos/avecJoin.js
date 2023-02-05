const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost",   user: "phpmyadmin",  
 password: "Ipdcdb2m" , database:"exo_velos"});
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données Velos!"); });
const express = require('express')
const app = express();

let sql = `
SELECT i.date, c.firstname AS prenom, c.lastname AS nom, i.summary AS montant
FROM customer c
JOIN invoice i ON i.fk_customer = c.id_customer
ORDER BY date DESC
`;
db.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

db.end(); 


