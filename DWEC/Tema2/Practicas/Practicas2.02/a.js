"use strict";

function sumar(num1,num2){
    if(arguments.length<2){
    
        var resultado="Debes introducir como mínimo 2 números";
    
    } else {

        resultado=0;
        for(var i=0; i<arguments.length; i++){
            if(typeof arguments[i] === 'number'){
                resultado+=arguments[i];
            }
        }
    }
    return resultado;
}

console.log(sumar());
console.log(sumar(4));
console.log(sumar(3,4));
console.log(sumar(2,4,5));
console.log(sumar(3,"h",3,"1"));