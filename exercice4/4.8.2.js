const readlineSync = require("readline-sync");


let tempsClients = []; 




function tempsAttente(tempsClients, nombreCaisse, ncaisse) {
    let sum = 0 ;
    let min = 0;
    
    if(nombreCaisse == 1){
        let sum=0;
        for (i=0; i<= tempsClients.length; i++){
            
            if(tempsClients[i] >= 0){
                sum += tempsClients[i]  ;
            }
        }
        return sum      
    }

    else 
    {
        for (i=0; i< tempsClients.length; i++){
            
            /*  ncaisse[ncaisse.indexOf(Math.min(... ncaisse))].push(tempsClients[i]); */
            ncaisse.splice(ncaisse.indexOf(Math.min(... ncaisse)), 1, tempsClients[i] + Math.min(... ncaisse));
        }
        console.log(Math.max(...ncaisse));
        return Math.max(...ncaisse)      
    }
}


let nombreClient= Number(readlineSync.question("Combien y a t-il de client ? "));

    for (let i = 0; i < nombreClient; i++) {
        let tempsClientFlash= Number(readlineSync.question("Quelle est le temps du client numero " + (i + 1) + " ? " ));
        tempsClients.push(tempsClientFlash);
    }

    let nombreCaisse= Number(readlineSync.question("Combien y a t-il de caisses libres ? "));

    let ncaisse = new Array(nombreCaisse).fill(0) ;



console.log(tempsClients);
console.log("Toute les caisse seront vide dans " + tempsAttente(tempsClients, nombreCaisse, ncaisse) + " minutes") ;
console.log(ncaisse);