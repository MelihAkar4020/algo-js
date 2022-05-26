const readlineSync = require("readline-sync");

let A = [];
let B = [];


function calcDistance(P1, P2){
dist = 0;
   dist = Math.sqrt(Math.abs(P1[0] - P2[0])**2 + Math.abs(P1[1] - P2[1])**2 )
return dist;
}


console.log("LA distance entre le point A et B est de " + Math.round(calcDistance(A, B)*100)/100);  

