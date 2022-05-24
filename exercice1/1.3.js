const readlineSync = require("readline-sync");

var firstName = readlineSync.question("What's your first name ? ");

console.log('Hello ' + firstName + " !");