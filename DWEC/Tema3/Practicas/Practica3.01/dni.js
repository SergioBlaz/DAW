"use strict";

function solicitarDNI() {
    var numeroDNI;
    var codigoControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var letrasDNI = "";
    var contador = 1;
    console.log("Por favor, espere 20 segundos. Gracias.")
    
    //Intervalo que lee el numero de DNI cada 20 segundos, calcula la letra que le pertenece según el orden de la variable
    //codigoControl y la añade a un array, cuando reciba -1 detiene la ejecucion y muestra la array
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