const readlineSync = require("readline-sync");

var age = new Number(readlineSync.question("Quel age avez-vous ? "));
if (age >= 18) {
    console.log("You are an adult");
} 
  else {
    console.log("You are not yet an adult");
  } 