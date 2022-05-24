const readlineSync = require("readline-sync");

var num1 = new Number(readlineSync.question("QUel est le premier nombre ? "));
var num2 = new Number(readlineSync.question("Quel est le seconde nombre ? "));

console.log('Vos deux nombres sont le ' + num1 + ' et le ' + num2) ;
console.log('La somme des deux nombre vaut ' + (num1 + num2) ) ;