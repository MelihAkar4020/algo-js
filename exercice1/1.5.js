const readlineSync = require("readline-sync");

let num1 = new Number(readlineSync.question("QUel est le premier nombre ? "));
let num2 = new Number(readlineSync.question("Quel est le seconde nombre ? "));

console.log('Vos deux nombres sont le ' + Math.trunc(num1)  + ' et le ' + num2) ;
console.log('Le produit des deux nombre vaut ' + (Math.trunc(num1) * num2) ) ;