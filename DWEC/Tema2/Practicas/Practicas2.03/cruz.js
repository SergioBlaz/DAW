"use strict";

function dibujarCruz(num){
    var linea="";
    var contador=0;
    var limite = num/3;

    for(let i=0; i< num; i++){
        
        for(let j=0; j<num; j++){
            
            if(j<limite || j>(num-limite)){

                if(i<limite || i>(num-limite)){
                    
                    linea += "#";
                } else {
                    linea +=".";
                }
            } else {
                linea +=".";
            }
            
        }
        contador++
        console.log(linea+contador);
        linea="";
    }
    
}

dibujarCruz(21);