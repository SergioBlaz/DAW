"use strict";

function insertAfter(nuevoElemento, elementoExistente){
    //Referencia al documento
    var d = document;
    
    //Referencia al id del elementoExistente
    var idExistente = elementoExistente.getAttribute("id");

    //Referencia al padre el nodo existente
    var elementoPadre = d.getElementById(idExistente).parentNode;

    //Inserción del nuevo elemento tras el elemento existente
    elementoPadre.insertBefore(nuevoElemento, elementoExistente.nextSibling);    
}
