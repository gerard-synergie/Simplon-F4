-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 16 déc. 2022 à 09:31
-- Version du serveur : 10.6.11-MariaDB-0ubuntu0.22.04.1
-- Version de PHP : 8.1.2-1ubuntu2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Simplon`
--

-- --------------------------------------------------------

--
-- Structure de la table `metier`
--

CREATE TABLE `metier` (
  `id_metier` int(11) NOT NULL,
  `metier` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `metier`
--

INSERT INTO `metier` (`id_metier`, `metier`) VALUES
(1, 'developpeur web'),
(2, 'chauffeur de taxi'),
(3, 'boulanger'),
(4, 'patissier'),
(5, 'plaquiste'),
(6, 'ebeniste'),
(7, 'menuisier'),
(8, 'serveur');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id_user` int(10) UNSIGNED NOT NULL,
  `prenom` varchar(40) NOT NULL,
  `nom` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mdp` varchar(255) DEFAULT NULL,
  `fk_ville` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id_user`, `prenom`, `nom`, `email`, `mdp`, `fk_ville`) VALUES
(1, 'Berbert', 'Ledromadaire', 'bebert@dromadaire.net', NULL, 5),
(2, 'Craquouille', 'Lagrenouille', 'craq@grenouille.com', NULL, 2),
(3, 'Max', 'Lamenace', 'max@lamenace.com', NULL, 1),
(4, 'jojo', 'lepabo', 'jojo@lepabo.net', NULL, 3);

-- --------------------------------------------------------

--
-- Structure de la table `user_metier`
--

CREATE TABLE `user_metier` (
  `id_user_metier` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date DEFAULT NULL,
  `fk_user` int(11) UNSIGNED NOT NULL,
  `fk_metier` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user_metier`
--

INSERT INTO `user_metier` (`id_user_metier`, `date_debut`, `date_fin`, `fk_user`, `fk_metier`) VALUES
(1, '2013-08-01', '2014-09-10', 4, 3),
(2, '2018-05-05', NULL, 4, 1);

-- --------------------------------------------------------

--
-- Structure de la table `ville`
--

CREATE TABLE `ville` (
  `id_ville` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `ville`
--

INSERT INTO `ville` (`id_ville`, `nom`) VALUES
(1, 'Marseille'),
(2, 'Aix en Provence'),
(3, 'Berre'),
(4, 'toulon'),
(5, 'Paris');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `metier`
--
ALTER TABLE `metier`
  ADD PRIMARY KEY (`id_metier`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `fk_ville` (`fk_ville`);

--
-- Index pour la table `user_metier`
--
ALTER TABLE `user_metier`
  ADD PRIMARY KEY (`id_user_metier`),
  ADD KEY `fk_metier` (`fk_metier`),
  ADD KEY `fk_user` (`fk_user`);

--
-- Index pour la table `ville`
--
ALTER TABLE `ville`
  ADD PRIMARY KEY (`id_ville`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `metier`
--
ALTER TABLE `metier`
  MODIFY `id_metier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `user_metier`
--
ALTER TABLE `user_metier`
  MODIFY `id_user_metier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `ville`
--
ALTER TABLE `ville`
  MODIFY `id_ville` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`fk_ville`) REFERENCES `ville` (`id_ville`);

--
-- Contraintes pour la table `user_metier`
--
ALTER TABLE `user_metier`
  ADD CONSTRAINT `user_metier_ibfk_1` FOREIGN KEY (`fk_metier`) REFERENCES `metier` (`id_metier`),
  ADD CONSTRAINT `user_metier_ibfk_2` FOREIGN KEY (`fk_user`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
