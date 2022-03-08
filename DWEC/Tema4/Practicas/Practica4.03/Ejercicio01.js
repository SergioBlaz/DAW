"use strict";
let d = document;

let pintar=false;

let color;
//Función de inicio
function inicio(){
    crearLienzo();
    borrarLienzo();
}
inicio();

//Función que recoje y guarda el color seleccionado
function seleccionarColor(selecColor){
    let colorSelec = d.getElementById('colorSeleccionado');
    
    color = selecColor;
    
    colorSelec.setAttribute("class",`celda${color}`);
}

//Función para crear la tabla/lienzo
function crearLienzo(){
    
    let lienzo = d.getElementById('lienzo');
    let tablaLienzo = d.createElement('table');
    tablaLienzo.setAttribute("id","tablaLienzo");

    

    for(let i = 0; i<30; i++){
        let trTablaLienzo = d.createElement('tr');
        for(let j = 0; j<60; j++){
            let tdTablaLienzo  = d.createElement('td');

            tdTablaLienzo.setAttribute("name","celdaLienzo");

            tdTablaLienzo.setAttribute("onclick","esPintar()");
            tdTablaLienzo.setAttribute("onmouseover","pintarCelda(this)");

            trTablaLienzo.appendChild(tdTablaLienzo);

        }

        tablaLienzo.appendChild(trTablaLienzo);

    }
    lienzo.appendChild(tablaLienzo);
    
}


//Función para cambiar la clase de la celda al pasar el raton por encima si pintar está a true
function pintarCelda(celda){
    if(pintar){
        celda.setAttribute("class",`celda${color}`);
    }
}

//Función para saber si se debe pintar o no
function esPintar(){
    if(pintar){
        pintar = false;
    } else {
        pintar = true;
    }
}

//Función para restablecer el lienzo(borrar) / todo a blanco
function borrarLienzo(){
    var celdas = d.getElementsByName("celdaLienzo");
    for(let i=0; i<celdas.length; i++){
        celdas[i].removeAttribute("class");
    }
}