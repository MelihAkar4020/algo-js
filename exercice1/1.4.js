const readlineSync = require("readline-sync");

var firstName = readlineSync.question("What's your first name ? ");
var name = readlineSync.question("What's your name ? ");
var city = readlineSync.question("Where do you live ? ");

console.log('Your name is ' + name + ' ' + firstName + ' and you live in ' + city + " !");
