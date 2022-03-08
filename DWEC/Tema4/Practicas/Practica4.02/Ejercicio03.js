"use strict";
//Referencia al documento
let d = document;

//Función para hacer desaparecer un elemento CSS visibility: hidden
function desaparecer(elemento) {
    elemento.style.visibility ="hidden";
}

//Funcion para eliminar el documento CSS display: none
function eliminar(elemento){
    elemento.style.display = "none";
}

function restablecer(){
    let pRestablecer = d.getElementsByName('p');
    for(let i=0; i<pRestablecer.length; i++){
        pRestablecer[i].style.visibility = "visible";
        pRestablecer[i].style.display = "block";
    }
}