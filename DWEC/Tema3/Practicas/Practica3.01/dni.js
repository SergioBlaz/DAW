"use strict";

function solicitarDNI() {
    var numeroDNI;
    var codigoControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var letrasDNI = "";
    var contador = 1;
    console.log("Por favor, espere 20 segundos. Gracias.")

    var interval = setInterval(() => {
        numeroDNI = prompt(`Introduzca el número de su DNI (Sin letra): `);
        
        if(numeroDNI != -1){
            
            letrasDNI = letrasDNI.concat(`${contador}º->`,codigoControl[numeroDNI%23]," ");
            contador++;
        }else {
            clearInterval(interval);

        }
        if(numeroDNI == -1){
            console.log(letrasDNI);
        }

    },20000);

}

solicitarDNI();