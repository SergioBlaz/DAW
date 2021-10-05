"use strict";

function calcularDNI(letra){
    var codigoControl = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var primerDNI = 48357001 ;
    var dniValidos ="";
    var numeroLetra = codigoControl.indexOf(letra);

    for(var i=0; i<999; i++){
        if((primerDNI+i)%23 == numeroLetra){
            dniValidos = dniValidos.concat("|",primerDNI+i,"| ");
        }
    }

    console.log(dniValidos);


}

calcularDNI(prompt(`Introduzca una letra mayúscula [A-Z]: `));