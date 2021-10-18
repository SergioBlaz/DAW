"use strict";

//Contador para el número de fila
var ij=1;

//Función para añadir a la tabla el texto y el botón
function addText(texto,boton){
    ij++;

    //Referencias al documento original
    var d = document;
    var bodyTabla = d.querySelector('#bodyTabla');
    
    //Creación de los elementos a insertar
    var trTabla = d.createElement('tr');
    var tdTextoTabla = d.createElement('td');
    var tdBotonTabla = d.createElement('td');
    var botonTabla = boton.cloneNode(true);

    //Modificación de los atributos
    tdTextoTabla.setAttribute("id",`fila${ij}`);
    tdTextoTabla.innerHTML = texto;
    botonTabla.setAttribute("onclick",`toCani('fila${ij}')`);
    
    //Insertado de elementos
    tdBotonTabla.appendChild(botonTabla);
    trTabla.appendChild(tdTextoTabla);
    trTabla.appendChild(tdBotonTabla);
    bodyTabla.appendChild(trTabla);
}

//Función para cambiar el texto a formato "CANI"
function toCani(id){
    //Referencia al documento
    var d = document;

    //Valor del elemento a cambiar
    var texto = d.getElementById(id).innerText;

    //Reemplazar y dividir la cadena de texto
    var textoCani = texto.replace(/c/g,"k").split("");
    
    //Sustituir por posición las letras sin tener en cuenta los espacios
    for(var i=0; i<textoCani.length; i++){
        if(i % 2 == 0 && textoCani[i]!=" "){
            textoCani[i] = textoCani[i].toUpperCase();
        }
    }
    //Devolver la cadena de texto debidamente formateada y añadiendole al final tres H
    var textoCaniCompleto = textoCani.join("").concat("HHH");
    
    reemplazarTextoTabla(textoCaniCompleto,id);
}

//Función para reemplazar texto con una id (elemento td)
function reemplazarTextoTabla(contenido,id){
    //Referencia al documento
    var d = document; 
    //Selección del elemento a sustituir (OJO AL SELECTOR CSS RULES -> ( # + id ))
    var tdOld = d.querySelector(`#${id}`);
    //Creación del nuevo elemento
    var tdNew = d.createElement('td');
    //Modificación del atributo id del nuevo elemento
    tdNew.setAttribute("id",id);
    //Añadido del contenido del nuevo elemento
    tdNew.innerHTML = contenido;
    //Sustitución del alemento antiguo por el nuevo
    tdOld.parentNode.replaceChild(tdNew,tdOld);
}