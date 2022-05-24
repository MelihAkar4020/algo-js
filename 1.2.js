const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your first name ? ");
let name = readlineSync.question("What's your name ? ");
let city = readlineSync.question("Where do you live ? ");

console.log('Your name is ' + name + ' ' + firstName + ' and you live in ' + city + " !");