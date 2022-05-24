const readlineSync = require("readline-sync");

var num1 = new Number(readlineSync.question("QUel est le premier nombre ? "));
var num2 = new Number(readlineSync.question("Quel est le seconde nombre ? "));

console.log('Le quotient des deux nombres est de ' + (num1/num2) ) ;

console.log('Le reste des deux nombres est de ' + (num1%num2) ) ;
