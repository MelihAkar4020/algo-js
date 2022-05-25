const readlineSync = require("readline-sync");


function calcSurface(a, b) {
    return a * b;
  }
  
const length= new Number(readlineSync.question("Quel est la longueur du rectangle ? "));
const width= new Number(readlineSync.question("Quel est la largeur du rectangle ? "));

console.log("l'air du rectangle est de " +  calcSurface(length, width));


