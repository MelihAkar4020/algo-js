const readlineSync = require("readline-sync");


let joursSemaine= 
   ["Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche"];

let numberWeek= new Number(readlineSync.question("Choisis un nombre entre 1 et 7 ! "));

while (numberWeek < 1 || numberWeek > 7 ){
    console.log("Le nombre inscrit n'est pas compris entre 1 et 7 ")

     numberWeek =readlineSync.question("Choisis un nombre entre 1 et 7 ! ");
}

console.log("Le jour de la semaine choisi est le " + joursSemaine[numberWeek - 1])