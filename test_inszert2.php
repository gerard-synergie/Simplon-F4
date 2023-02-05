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
/* La prmière façon de procéder
$ps = $pdo->prepare("INSERT INTO apps_countries(country_code,country_name) VALUES (?,?)");
$ps->execute(['CK', 'Cocagne']);
//Dans le cas d'un formulaire
//$ps->execute([$_POST['nom'], $_POST['prenom'], $_POST['sexe']]);
*/

//La deuxième 
$ps = $pdo->prepare("INSERT INTO apps_countries(country_code,country_name) VALUES (:code, :pays)");
$ps->execute([
    'code' => 'BB',
    'pays' => 'Bleu'
]);

?>