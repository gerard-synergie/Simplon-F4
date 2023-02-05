const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost",   user: "phpmyadmin",  
 password: "Ipdcdb2m" , database:"exo_velos"});
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données Velos!"); });
const express = require('express')
const app = express();

let sql = `
SELECT p.name AS article, SUM(ii.qty) AS nbre_cdes,SUM(ii.price_row) AS total_cdes
FROM invoice_items ii
JOIN parts p ON p.id_part = ii.fk_part
GROUP BY p.id_part
ORDER BY total_cdes ASC
`;
db.query(sql, (error, results, fields) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(results);
});

db.end(); 
