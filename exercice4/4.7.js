const readlineSync = require("readline-sync");

let leftElevator = 0;
let rightElevator = 0;
let floor = 0;


function elevator(left, right, current){
    if(Math.abs(left - current)<Math.abs(right - current)){
        return "gauche";
    }  
    else {
        return "droite"
     
    }

}

 leftElevator= new Number(readlineSync.question("A quel étage se situe l'ascenceur de gauche ? "));
 rightElevator= new Number(readlineSync.question("A quel étage se situe l'ascenceur de droite ? "));
 floor= new Number(readlineSync.question("A quel étage vous situez vous ? "));

console.log("L'ascenceur de " + elevator(leftElevator, rightElevator, floor) + " va arriver !" );
