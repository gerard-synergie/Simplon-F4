<?php

require_once 'CompteBancaire.php'; // require vs include (gestion des erreurs) rôle du once

class CompteEpargne extends CompteBancaire
{
    private $tauxInteret;

    public function __construct($devise, $solde, $titulaire, $tauxInteret)
    {
        // dans le constructeur, héritage des methodes et propriétés de la classe mère
        parent::__construct($devise, $solde, $titulaire);
        $this->tauxInteret = $tauxInteret; //on rajoute la propriété supplémentaire
    }

    public function getTauxInteret()
    {
        return $this->tauxInteret;
    }

    public function calculerInterets($ajouterAuSolde = false)
    {
        $interets = $this->getSolde() * $this->tauxInteret;

        if ($ajouterAuSolde == true)
            $this->setSolde($this->getSolde() + $interets);
        
        return $interets;
    }

    public function __toString()
    {
        return parent::__toString() . 
        '. Son taux d\'interet est de ' . $this->tauxInteret * 100 . '%.';
    }
}
?>