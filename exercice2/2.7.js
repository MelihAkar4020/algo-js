const readlineSync = require("readline-sync");
var sum= 0;
var i=0;
const num= new Number(readlineSync.question("Choisis un nombre "));

for (i = 0; i<num; i ++)
{
   let numSum= new Number(readlineSync.question("Choisis un nouveau nombre "));
    sum += numSum;
}
console.log(sum);