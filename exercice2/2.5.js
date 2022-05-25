const readlineSync = require("readline-sync");

let favoriteNum= new Number(readlineSync.question("WHAt is your favorite number ?"));

while (favoriteNum != 42 ){
    console.log('Are you sure ?????');

    favoriteNum =readlineSync.question("WHAt is your favorite number ?");
}
  console.log ('Vous etes le meilleur !!! ');