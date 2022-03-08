"use strict";

function multiplicar(num){
    var resultado;

    for (var i=0; i<11; i++){
        console.log(`${num} x ${i} = ${num*i}`);
    }
}

function tablas(num, fun){
    var limite = 2;
    for(var i=num; i>=limite; i--){
        fun(i);    
    }

}

tablas(2,multiplicar);
