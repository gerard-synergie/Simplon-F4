<?php


require 'CompteBancaire.php';
require 'CompteEpargne.php';

$compteJean = new CompteBancaire("euros", 150, "Jean"); // instance de la classe CompteBancaire
echo $compteJean . '<br />';
$compteJean->crediter(100);
echo $compteJean . '<br />';

$comptePaul = new CompteEpargne("dollars", 200, "Paul", 0.05); // instance de la classe CompteEpargne
echo $comptePaul . '<br />'; 
echo 'Interets pour ce compte : ' . $comptePaul->calculerInterets() ; //argument false par défaut 
' ' . $comptePaul->getDevise() . '<br />';
$comptePaul->calculerInterets(true);
echo $comptePaul . '<br />';
?>