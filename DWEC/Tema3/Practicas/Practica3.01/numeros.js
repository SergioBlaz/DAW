"use strict";

//Función que devuelve verdadero si el numero es palindromo y falso si el numero no lo es
//Utilizo el constructor number para devolver un numero y no una string para poder utilizar "==="
function esPalindromo(numero) {
    var numeroReves = Number(numero.toString().split("").reverse().join(""));
    
    return numeroReves === numero ? true : false;
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

//Función que guarda los numeros que son palindromos y primos a la vez en una array y la guarda;
function sonPrimosyPalindromos(){
    var primosYpalindromos=[];

    for( let i=0; i<100001; i++){

        if(esPalindromo(i) && esPrimo(i)){
            primosYpalindromos.push(i);
        }
    }

    return primosYpalindromos;
}

console.log("Estos son los número primos y palindromos del 0 al 100000: ")

sonPrimosyPalindromos().forEach((value)=>{
    console.log(value);
})