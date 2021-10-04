"use strict";

var textoNormal = "una cadena cani es como esta";

function textoCani(texto){

    //Reemplazar y dividir la cadena de texto
    var textoCani = texto.replace(/c/g,"k").split("");
    
    //Sustituir por posición las letras sin tener en cuenta los espacios
    for(var i=0; i<textoCani.length; i++){
        if(i % 2 == 0 && textoCani[i]!=" "){
            textoCani[i] = textoCani[i].toUpperCase();
        }
    }
    //Devolver la cadena de texto debidamente formateada y añadiendole al final tres H
    return textoCani.join("").concat("HHH");
   
}

console.log(textoCani(textoNormal));