"use strict";
//Referencia al documento
var d = document;

//Selección de la etiqueta con el id #info
var info = d.querySelector('#info');

//Selección de todas las etiquetas <p></p>
var parrafos = d.querySelectorAll('p');

//Mostrar cantidad de parrafos en el documento
addToInfo(`Este es el número de parrafos del texto: ${parrafos.length}.`,info,d);

//Mostrar contenido del segundo parrafo
addToInfo(`Este es el contenido del segundo párrafo: ${parrafos[1].innerHTML}`,info,d);

//Selección de todos los enlaces del documento
var enlaces = d.querySelectorAll('a');

//Mostrar cantidad de enlaces del documento
addToInfo(`Este es el número de enlaces del documento: ${enlaces.length}.`, info, d);

//Mostrar la dirección del primer enlace del documento
addToInfo(`Esta es la dirección del primer enlace del documento: ${enlaces[0]}`,info,d);

//Mostrar la dirección del penúltimo enlade del documento
addToInfo(`Esta es la dirección del penúltimo enlace del documento: ${enlaces[enlaces.length-2]}`,info,d);

//funcion para añadir parrafos al final del div #info
function addToInfo(contenido, contenedor, doc){

    //Creo el parrafo que voy a añadir dentro del div
    var pToAdd = doc.createElement("p");

    //Meto el contenido dentro del parrafo creado
    pToAdd.innerHTML = contenido;

    //Inserto al final del contenedor el parrafo cno el contenido
    contenedor.appendChild(pToAdd);
}