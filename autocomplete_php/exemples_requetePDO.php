
<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=mabase', 'root', 'pass');
} catch (PDOException $e) {
    echo $e->getMessage();
}

$sql = "SELECT * FROM personne";
$ps = $pdo->prepare($sql);
$ps->execute();
while ($p = $ps->fetch()) {
    echo $p['nom'];
}


$ps = $pdo->prepare("INSERT INTO personne (nom,prenom,sexe) VALUES (?,?,?)");
$ps->execute(['Richard', 'Joe', 'Masculin']);
//Dans le cas d'un formulaire
$ps->execute([$_POST['nom'], $_POST['prenom'], $_POST['sexe']]);





$ps = $pdo->prepare("INSERT INTO personne (nom,prenom,sexe) VALUES (:nom,:firstname,:sex)");
$ps->execute([
    'nom' => 'Herard',
    'firstname' => 'Herard',
    'sex' => 'Masculin'
]);


//Dans le cas ou on a un formulaire
$ps->execute([
    'nom' => $_POST['prenom'],
    'prenom' => $_POST['prenom'],
    'sexe' => $_POST['sexe']
]);



$sql = "SELECT nom, prenom FROM personne WHERE prenom = ?";
 
$ps = $pdo->prepare($sql);
$ps->execute(['Pierre']);
//$ps->execute([$_POST['Pierre']);
while ($p = $ps->fetch()) {
    echo $p['prenom'];
}



$personne = $pdo->query('SELECT * FROM personne');
if($personne === false){
   die('Erreur SQL');
}
$personnes = $personne->fetchAll();
echo'<pre>';
print_r(($personnes));
echo'</pre>';


$ps = $pdo->prepare("INSERT INTO personne (nom,prenom,sexe) VALUES (:name,  :prenom,:sexe)");
$ps->bindParam(':name', 'Herard');
$ps->bindParam(':prenom', 'Herard');
$ps->bindParam(':sexe', 'Masculin');
$ps->execute();