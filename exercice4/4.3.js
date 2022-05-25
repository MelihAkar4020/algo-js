const readlineSync = require("readline-sync");

let tab1 = [];

function rand10(max) {
    return Math.floor(Math.random() * max);
}
  
function multiRand(max) {
    for (i = 0; i < nombreVariable; i++) {
        tab1.push(rand10(11)) ;
        
    }
    return tab1
   
} 

const nombreVariable= new Number(readlineSync.question("Combien de nombre voulez vous dans le tableau ? "));

console.log(multiRand(nombreVariable))