const readlineSync = require("readline-sync");

var minAge= new Number(readlineSync.question("QUel est l'age minimum ? "));
var maxAge= new Number(readlineSync.question("Quel est l'age maximal' ? "));
var currentAge= new Number(readlineSync.question("Quel est l'age actuel ? "));


if(minAge >= maxAge){
    console.log("L'age minimum ne peut pas etre égal ou supérieur à l'age maximum");
}

else if((currentAge > minAge ) && (currentAge < maxAge)) {

    
    console.log(`l'age actuel ( ${currentAge} ) se trouve bien entre l'age min ( ${minAge} ) et l'age max( ${maxAge} ) ` );
} 
