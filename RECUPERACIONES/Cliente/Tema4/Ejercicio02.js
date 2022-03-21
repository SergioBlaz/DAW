"use strict";

window.onload = () => {
    var numeros = 0
    const tabla = document.createElement("table")

    //Función que devuelve true si el número que recibe por parámetro es primo, de lo contrario devuelve false.
    const esPrimo = (n) => {
        if(n == 0 || n == 1 || n ==4 ){
            return false;
        }
        for ( let i=2; i< n / 2 ; i++){
            if ( n % i == 0){
                return false;
            }
        }
        return true;
    }

    //Función que recorre todos los elementos que tengan el nombre primo y les pinta el fondo rojo.
    const pintarPrimos = () => {
        document.getElementsByName("primo").forEach((e)=>{
            e.style.backgroundColor = "red"
            e.style.fontStyle = "bold"
        })
    }

    //Inserción del botón para pintar los elementos.
    document.body.innerHTML += `<button id=primos value=primos>Primos</button>`

    //Creación de la tabla con los números del 0 al 10000.
    for(let i = 0; i<100; i++){
        const fila = document.createElement("tr")
        for(let j = 0; j<100; j++){
            esPrimo(numeros) ? fila.innerHTML += `<td name=primo>${numeros}</td>` : fila.innerHTML += `<td>${numeros}</td>`
            numeros++
        }
        tabla.appendChild(fila)
    }
    document.body.appendChild(tabla)   
    
    //Funcionalidad del botón para pintar los números primos.
    document.getElementById("primos").addEventListener("click", () => {
        pintarPrimos()
    },false)
}