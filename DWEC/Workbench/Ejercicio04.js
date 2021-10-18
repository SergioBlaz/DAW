"use strict";

//Función para añadir a la tabla el texto y el botón
function addText(texto,boton){
    var d = document;
    var bodyTabla = d.querySelector('#bodyTabla');
    var trTabla = d.createElement('tr');

    var tdTextoTabla = d.createElement('td');
    var tdBotonTabla = d.createElement('td');

    tdBotonTabla.setAttribute("id","boton");

    tdTextoTabla.innerHTML = texto;
    tdBotonTabla.innerHTML = boton;

    trTabla.appendChild(tdTextoTabla);
    trTabla.appendChild(tdBotonTabla);

    bodyTabla.appendChild(trTabla);
}