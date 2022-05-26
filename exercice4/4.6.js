const readlineSync = require("readline-sync");


function factorielle(a){
    let i, f = 1;
    
    for(i=1;i<=a;i++){

        f =  i * f


    }
    return f

}

const valeurF= new Number(readlineSync.question("la valeur factorielle de quelle nombre souhaiter vous avoir ? "));
console.log("La valeur factorielle de " + valeurF + " est " + factorielle(valeurF));