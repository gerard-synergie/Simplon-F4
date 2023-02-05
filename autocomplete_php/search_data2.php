<?php
// (1) CONNECT TO DATABASE
$host = 'localhost';
$dbname = 'exo_velos';
$user = 'phpmyadmin';
$password = 'Ipdcdb2m';
$charset = 'utf8';
$pdo = new PDO(
	"mysql:host=$host;dbname=$dbname;charset=$charset", $user, $password, [
		PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		PDO::ATTR_EMULATE_PREPARES => false,
	]
);
$match = [];
$sql = ("SELECT  country_name FROM apps_countries WHERE country_name LIKE ?");
$pays = $pdo->prepare($sql);
$search = htmlspecialchars($_POST['search']);
$pays->execute(['%'.$search.'%']);
if($pays === false){
   die('Erreur SQL');
}
while ($row = $pays->fetch(PDO::FETCH_ASSOC)) {
	array_push($match, $row['country_name']);
}

//print_r($match);
echo json_encode($match);


?>