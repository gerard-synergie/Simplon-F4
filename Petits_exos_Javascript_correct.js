/*
Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.

Exemple:
minuteToSecond(4) ➞ 240

minuteToSecond(3) ➞ 180

*/
function minuteToSecond(minutes) {
    return  minutes * 60;
  }
  
  // Afficher la sortie
  console.log(minuteToSecond(4));
  console.log(minuteToSecond(3));



  /*
Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

Exemple:
getMax(5, 9, 1) ➞ 9

getMax(2, 3, 10) ➞ 10
  */

function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  }

// Afficher la sortie
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));


/*
Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
Sinon, retournez FALSE.

Exemple:
check(5, 20) ➞ true
// 5 + 20 = 25

check(60, 55) ➞ false
// 60 + 55 = 115
*/

function check(a, b) {
  
    return a + b < 100;
  }
// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


/*
Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.

Exemple:
hmTos(1, 10) ➞ 4200

hmTos(0, 59) ➞ 3540

hmTos(0, 0) ➞ 0
*/


function check(a, b) {
  
    return a + b < 100;
  }
// Afficher la sortie
console.log(check(5, 20));
console.log(check(60, 55));


/*
Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();

Exemple:
reverseTab([1, 2, 3]) ➞ [3, 2, 1]

reverseTab([1, 1, 2, 2, 3]) ➞ [3, 2, 2, 1, 1]
*/
function reverseTab(tab) {
    let res = [];
    for (let i = tab.length -1; i > -1; i--) {
      res.push(tab[i]);
    }
    
    return res;
  }

// Afficher la sortie
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));


/*
Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.

Exemple:
getLastElem([1, 2, 3, 4]) ➞ 4

getLastElem([‘Alex’, ‘Bob’, ‘Emily’]) ➞ ‘Emily’

*/

function getLastElem(tab) {
    return tab[tab.length - 1]
  }
// Afficher la sortie
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

