/*
Ecrire un script qui permet d'afficher la table de multiplication d'un nombre entier n:
La valeur de n sera demandée à l’utilisateur via une boite de dialogue.
En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur.
L'affichage de résultat doit être encadré par un tableau html.
Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10.
//Source : www.exelib.net
*/

<!DOCTYPE html>
2: <html lang="fr">
3: <head>
4: <title>Premiers algorithmes sur les tableaux</title>
5: <meta charset="utf-8" />
6: </head>
7: <body>
8: 
9: <h1>Premiers algorithmes sur les tableaux</h1>
10: 
11: <script>
12: 
13: /* Affiche le contenu d'un tableau en HTML */
14: 
15: function affiche_tableau (t) {
16:   document.writeln('<p>le tableau est :</p>');
17:   document.writeln('<table border="1"><tr>');
18:   for (var i=0 ; i<t.length ; i++) {
19:       document.writeln('<td>',t[i],'</td>');
20:   }
21:   document.writeln('</tr></table>');
22: }
23: 
24: 
25: /* Calcule et affiche la moyenne des éléments d'un tableau */
26: function affiche_moyenne (t) {
27:   var somme = 0;
28:   for (var i=0 ; i<t.length ; i++) {
29:     somme = somme + t[i];
30:   }
31:   document.writeln('<p>la moyenne vaut ',(somme/t.length),'</p>');
32: }
33: 
34: /* Compte et affiche le nombre d'apparitions d'un élément dans un tableau */
35: function occurrences (x,t) {
36:   var fois = 0;
37:   for (var i=0 ; i<t.length ; i++) {
38:     if (t[i]==x) {
39:       fois = fois + 1;
40:     }
41:   }
42:   document.writeln('<p>',x,' apparait ',fois,' fois.</p>');
43: }
44: 
45: 
46: /* Compte et affiche combien ont eu 10 ou plus */
47: function onteulamoyenne (t) {
48:   var n = 0;
49:   for (var i=0 ; i<t.length ; i++) {
50:     if (t[i]>=10) {
51:       n = n + 1;
52:     }
53:   }
54:   document.writeln('<p>',n,' ont eu la moyenne.</p>');
55: }
56: 
57: /* Indique si un élément est présent dans un tableau ou non */
58: function recherche (x,t) {
59:   var i = 0;
60:   while ((i<t.length) && (t[i]!=x)) {
61:     i = i+1
62:   }
63:   if (i<t.length) {
64:     document.writeln('<p>',x,' est présent.</p>');
65:   } else {
66:     document.writeln('<p>',x,' n\'est pas présent.</p>');
67:   }
68: }
69: 
70: 
71: /* appels aux procédures définies ci-dessus */
72: 
73:   var notes = [5,12,8,20,10];
74: notes[2] = 9;
75: 
76: affiche_tableau(notes);
77: affiche_moyenne(notes);
78: occurrences(12,notes);
79: occurrences(2,notes);
80: onteulamoyenne(notes);
81: recherche(12,notes);
82: recherche(2,notes);
83: </script>
84: 
85: </body>
86: </html>
 