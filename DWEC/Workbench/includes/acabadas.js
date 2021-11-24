"use strict";
let d = document;

//Función para archivar(ocultar) una tarea de la lista de acabadas.
function saveTarea(idSave){
    d.getElementById(idSave).setAttribute("class","acabadaOculta");
}

//Función para volver a poner una tarea en la lista de pendientes.
function backTarea(idBack){
    pendientes.appendChild(d.getElementById(idBack));
    d.getElementById(idBack).setAttribute("class","tarea");
    var botonesEnd = d.getElementById(idBack).lastChild.childNodes;
    botonesEnd[0].setAttribute("value",'Acabar');
    botonesEnd[1].setAttribute("value",'Borrar');
}

//Función para mostrar las tareas finalizadas y ocultas.
function showTareas(){
    var ocultas = d.getElementsByClassName("acabadaOculta");
    //El bucle tiene que ser desde el final para poder recorrer todos los elementos.
    for(let i=ocultas.length-1 ; i >= 0; i--){
        ocultas.item(i).setAttribute("class","acabada");
    }
}

export {saveTarea, backTarea, showTareas};