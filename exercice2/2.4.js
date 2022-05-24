const readlineSync = require("readline-sync");

for (i = 1; i <= 100; i += 1)
{
  if(i%2 == 0) {
    console.log( 'le nombre paire est   ' + i + ' et sa moitiée est ' + i/2 );
  }
  else{
    console.log( 'le nombre impaire est ' + i + '  et son triple est ' + i*3 );
  }
}