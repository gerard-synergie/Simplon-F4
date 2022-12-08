//On récupère le tableau des boutons
const buttons = document.getElementsByName('button');
console.log(buttons);

//On définit l'écran d'affichage
const textDisplay = document.getElementById("result");

//On initialise les variabbles utilisées
var resultCalc = false; // le résultat d'un calcul
var compute = false; // on demande le calcul oui/non
var mathOp; // l'opérateur mathématique (+, -, *....)


// This function clear all the values
function clearScreen() {
    textDisplay.value = "";
    resultCalc = false;
    compute = false;
    opMath = "";
}

// Au chargement, on efface tout
document.addEventListener('load',clearScreen());


// calcul du résultat en fonction de l'opérateur "o"
function calculate(o){
    switch (o) {
        
        case "+":
            resultCalc += parseFloat(textDisplay.value);
            textDisplay.value = resultCalc;
            break;

        case "-":
            resultCalc -= parseFloat(textDisplay.value);
            textDisplay.value = resultCalc;
            break;

        case "*":
            resultCalc *= parseFloat(textDisplay.value);
            textDisplay.value = resultCalc;
            break;

    case "/":
            resultCalc /= parseFloat(textDisplay.value);
            textDisplay.value = resultCalc;
            break;
        
        default:
            break;
    }
}

// On récupère l'opérateur mathématique
function getMathOp(id){
    switch (id) {
            
        case "add":
            if (!compute) {
                mathOp = "+";
                resultCalc = parseFloat(textDisplay.value);
                compute = true;
            } else {
                calculate(mathOp);
                mathOp = "+";
            }                    
            break;

        case "minus":
            if (!compute) {
                mathOp = "-";
                resultCalc = parseFloat(textDisplay.value);
                compute = true;
            } else {
                calculate(mathOp);
                mathOp = "-";
            }                    
            break;

        case "multiply":
            if (!compute) {
                mathOp = "*";
                resultCalc = parseFloat(textDisplay.value);
                compute = true;
            } else {
                mathOp = "*";
                calculate(mathOp);
            }                    
            break;

        case "divide":
            if (!compute) {                
                mathOp = "/";
                resultCalc = parseFloat(textDisplay.value);
                compute = true;
            } else {
                mathOp = "/";
                calculate(mathOp);
            }                    
            break;    
            
        default:
            calculate(mathOp);
            mathOp = "";
            compute = false;
            break;
    }
}


// On affiche l'entrée clavier
function displayValue(){

    // si c'est un bouton, id = btnX id[0]="b", id[3]= X
    if(this.id[0] == "b"){
        
        if (!compute) {
            textDisplay.value += this.id[3];
        } else {
            textDisplay.value = this.id[3];
        }
    // le point décimal "dp"
    } else if(this.id == "dp"){   
        if (!compute) {
                textDisplay.value += ".";
            } else {
                textDisplay.value = ".";
            }  
    // le symbole d'effacement                   
    } else if(this.id == "c"){
        clearScreen();        
    } 
     else {
        getMathOp(this.id);
    }
   
}
// on ajoute l'écouteur d'événement sur le tableau des botons
Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener("click", displayValue);
});
