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

// (2) SEARCHING FOR?
$data = [];

  // SEARCH FOR PAYS
  
    // You might want to limit number of results on massive databases
    // SELECT * FROM XYZ WHERE `FIELD` LIKE ? LIMIT 20
    $stmt = $pdo->prepare("SELECT * FROM apps_countries ");
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
      $data[] = $row['country_name'];
    };
    
 
print_r($data);

// (3) RETURN RESULT

echo json_encode($data);
$pdo = null;

?>