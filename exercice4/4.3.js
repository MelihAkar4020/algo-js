const readlineSync = require("readline-sync");

let tab1 = [];

function rand10(max) {
    return Math.floor(Math.random() * max);
}
  
function multiRand(a, tab) {
    for (i = 0; i < a; i++) {
        tab.push(rand10(11)) ;
        
    }
    return tab
   
} 

const nombreVariable= new Number(readlineSync.question("Combien de nombre voulez vous dans le tableau ? "));

console.log(multiRand(nombreVariable, tab1))