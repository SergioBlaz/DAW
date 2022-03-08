"use strict";

//Evento que espera la carga completa del la página para ejecutar el código js
window.onload = () => {
    var d = document;

    //Generar un número aleatorio para seleccionar un color rgb
    function getRandom(){
        return Math.floor(Math.random()*256);
    }
    
    //Asiganción del evento dbclick a todo el documento para cambiar el estilo del color 
    //de fondo
    d.addEventListener("dblclick", () => {
        d.body.style.backgroundColor = `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
    }, false);

}