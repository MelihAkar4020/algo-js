const readlineSync = require("readline-sync");


function factorielle(a){
    let i, f = 1;

    if (a === 0)
    {
       return 1;
    }
    return a * factorielle(a-1);
  }


const valeurF= new Number(readlineSync.question("la valeur factorielle de quelle nombre souhaiter vous avoir ? "));
console.log("La valeur factorielle de " + valeurF + " est " + factorielle(valeurF));