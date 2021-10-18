"use strict";

/* Función para añadir a la lista un nuevo elemento li que contenga un 
    numero aleatorio
*/
function addToLista(){

    var d = document;

    var lista = d.querySelector('ul');
    
    var liToAdd = d.createElement("li");

    liToAdd.innerHTML = Math.floor(Math.random()*101);
    
    lista.appendChild(liToAdd);
} 
