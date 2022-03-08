"use strict";

function dibujarMarco(num, num2){
    var linea="";
    var contador=0;


    for(let i=0; i< num; i++){
        
        for(let j=0; j<num; j++){
            
            if( i<num2 || i>(num-num2) || j<num2 || j>(num-num2)){
                linea +="#"
            } else {
                linea +=".";
            }
            
        }
        contador++
        console.log(linea+contador);
        linea="";
    }
    
}

dibujarMarco(21,7);