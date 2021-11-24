"use strict";

let d = document;
//Función para insertar un elemento antes que otro.
function antesTarea(elemento, e){
    elemento.parentNode.insertBefore(elemento, e);
    
}

//Función para insertar un elemento después de otro.
function despuesTarea(elemento, e){
    elemento.parentNode.insertBefore(elemento, e.nextSibling);
}

export {antesTarea, despuesTarea};