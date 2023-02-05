const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'exo_velos',
	user : 'phpmyadmin',
	password : 'Ipdcdb2m'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database velos is connected Successfully');
	}
});

module.exports = connection;
