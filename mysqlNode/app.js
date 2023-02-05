const mysql = require('mysql');
const db = mysql.createConnection({   host: "localhost",   user: "phpmyadmin",  
 password: "Ipdcdb2m" , database:"exo_velos"});
db.connect(function(err) {   if (err) throw err;   console.log("Connecté à la base de données Velos!"); });
const express = require('express')
const app = express();