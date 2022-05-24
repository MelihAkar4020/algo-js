const readlineSync = require("readline-sync");
var sum= 0;
var i=0;
var num= new Number(readlineSync.question("Choisis un nombre "));

for (i = 0; i<num; i ++)
{
    let num= new Number(readlineSync.question("Choisis un nouveau nombre "));
    sum += num;
}

console.log(sum);