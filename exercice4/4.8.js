const readlineSync = require("readline-sync");


let tempsClients = []; 



/*

        
}
*/






function sumTab(tab){
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
    return sum
}


function tempsAttente(tempsClients, nombreCaisse) {
    let sum =0 ;

    if(nombreCaisse == 1){
        let sum=0;
        for (i=0; i<= tempsClients.length; i++){
            
            if(tempsClients[i] >= 0){
                sum += tempsClients[i]  ;
            }
        }
        return sum      
    }
/*
    function caisseAjouter(caisseB) {
        eval(` caisse${caisseB} `); 
*/

    else  if(nombreCaisse == 2){
        let sum=0;
        for (i=0; i<= tempsClients.length; i++){
            
            if(Math.abs(sumTab(caisse1) - sumTab(nombreCaisse) )<= Math.abs(sumTab(caisse2) - sumTab(nombreCaisse) )){
                return "gauche";
            }  
            else {
                return "droite"
             
            }
        }
        return sum      
    }
    else
    {
        for (i=0,y= i + 1 ; y <= nombreCaisse ; y++){
       if ( eval(` sumTab(caisse${i}) <= sumTab(caisse${y}) push `));
        }
    }
 return sum
}


let nombreClient= new Number(readlineSync.question("Combien y a t-il de client ? "));

    for (let i = 0; i < nombreClient; i++) {
        let tempsClientFlash= new Number(readlineSync.question("Quelle est le temps du client numero " + (i + 1) + " ? " ));
        tempsClients.push(tempsClientFlash);
    }

    let nombreCaisse= new Number(readlineSync.question("Combien y a t-il de caisses libres ? "));

    for (let i = 0; i < nombreCaisse; i++) {
     
            eval(`var caisse${i + 1} = [];`);
           }



console.log(tempsClients);
console.log("Toute les caisse seront vide dans " + tempsAttente(tempsClients, nombreCaisse) + " minutes");