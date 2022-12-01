// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

document.addEventListener('load',clearScreen());
// This function display values
//function display(value) {
   // document.getElementById("result").value += value;
//}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function displayValue(){
    document.getElementById("result").value += value;
}


document.querySelectorAll('input[type=button]').forEach((item,index) => {
    item.addEventListener('click', arrow => {
        document.body.style.backgroundImage = `url("${background_list[index]}")`
    })})
console.log(buttons);

buttons.forEach(function(btn) {
    //console.log(btn.value);
    btn.addEventListener('click', alert('coucou'));
  });

  document.querySelectorAll(".select").forEach((item, index) => { // here
    item.addEventListener('click', arrow => {
    document.body.style.backgroundImage = `url("${background_list[index]}")`
})})
//buttons.addEventListener('click', displayValue);
 
