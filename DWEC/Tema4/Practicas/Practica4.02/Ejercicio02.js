"use strict";
//Referencia al documento
let d = document;

let numeros = 0;

//Función para crear una tabla de 100 x 100 con números del 1 al 10000
//Si son primos les atribuye la id "primo"
function crearTabla(){

    let tabla = d.createElement('table');

    for(let i=0; i<100 ; i++){
        let trTabla = d.createElement('tr');
        
        for(let j=0; j<100; j++){
        let tdTabla = d.createElement('td');
            
        if(esPrimo(numeros)){
            tdTabla.setAttribute("name","primo");
        }

        tdTabla.innerHTML = numeros;
        trTabla.appendChild(tdTabla);
        numeros++;

        }
        tabla.appendChild(trTabla);

    }
    d.body.appendChild(tabla);
}

//Función que devuelve verdadero si el numero es primo y falso si no lo es
function esPrimo(numero){
    if(numero == 0 || numero == 1 || numero ==4 ){
        return false;
    }
    for ( let i=2; i< numero / 2 ; i++){
        if ( numero % i == 0){
            return false;
        }
    }
    return true;
}

//Función que comprueba si tienen el nombre primo y pone el fondo rojo y el color blanco
function calcularPrimos(){

    let numerosPrimos = d.getElementsByName('primo');

    for(let i =0; i< numerosPrimos.length; i++){
        numerosPrimos[i].style.backgroundColor="red";
        numerosPrimos[i].style.color="white";
    }

}

crearTabla();
