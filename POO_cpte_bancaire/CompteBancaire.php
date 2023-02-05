<?php


//certaines conventions de nommage conduisent à appeler ce fichier CompteBancaire.class.php

class CompteBancaire
{
    private $devise;  // cf private vs protected vs public
    private $solde;
    private $titulaire;

    public function __construct($devise, $solde, $titulaire) //methode "magique" PHP
    {   
        //rappel sur le $this, comme en javascript référence l'instance à l'intérieur de la classe
        $this->devise = $devise; 
        $this->solde = $solde;
        $this->titulaire = $titulaire;
    }

    //getter
    public function getDevise()
    {
        return $this->devise;
    }

    public function getSolde()
    {
        return $this->solde;
    }

    
    //setter
    protected function setSolde($newsolde)
    {
        $this->solde = $newsolde;
    }

    public function getTitulaire()
    {
        return $this->titulaire;
    }

    public function crediter($montant) {
        $this->solde += $montant;
    }

   //methode magique php
    public function __toString()
    {
        return "Le solde du compte de $this->titulaire est de " . $this->solde . " " . $this->devise;
    }
}
?>