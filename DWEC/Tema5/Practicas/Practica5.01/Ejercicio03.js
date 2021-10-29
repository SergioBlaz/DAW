"use strict";

window.onload = () =>{
    var d = document;


    var posicion;

    //contenedor para guardar el texto actualizado
    var contenedor = d.createElement("p");

    //Evento que guarda y muestra por pantalla la posición del raton cuando este
    //esté sobre el documento
    d.addEventListener("mousemove", (e) => {
        posicion = `El ratón se encuentra en X:${e.offsetX} Y:${e.offsetY}`;
        contenedor.innerHTML = posicion;
        d.body.appendChild(contenedor);
    })
}