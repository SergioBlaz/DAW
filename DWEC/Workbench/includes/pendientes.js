"use strict";

let d = document;

//Función para añadir tareas nuevas a la lista de pendientes.
function addTarea(cTareas){

    //Seleccion del texto a implementar
    var textoImplementar = document.querySelector('textarea').value;

    if(document.querySelector('textarea').value != ""){

        
        document.querySelector('textarea').value = "";

        //Creación de los elementos que contiene la tarea.
        var pendientes = document.getElementById('pendientes');

        var contenedorTarea  = document.createElement('div');
        contenedorTarea.setAttribute("class","tarea");
        contenedorTarea.setAttribute("id",`tarea${cTareas}`);
        contenedorTarea.setAttribute("draggable", true);
        
        var textoTarea = document.createElement('p');
        
        var botonesTarea = document.createElement('p');
        botonesTarea.setAttribute("class","botones");
        
        botonesTarea.innerHTML += `<input type=button value=Acabar class=end, name=tarea${cTareas}>`;

        botonesTarea.innerHTML += `<input type=button value=Borrar class=del, name=tarea${cTareas}>`;
        
        //Añadir e implementar el texto y los botones al contenedor de Pendientes.
        textoTarea.innerHTML = textoImplementar;
        contenedorTarea.appendChild(textoTarea);
        contenedorTarea.appendChild(botonesTarea);
        pendientes.appendChild(contenedorTarea);       
    }
}

//Función para borrar una tarea de la lista de pendientes.
function delTarea(idDel){
    pendientes.removeChild(document.getElementById(idDel));
}

//Función para añadir a la lista Acabadas las tareas en Pendientes.
function endTarea(idEnd){

    document.getElementById('acabadas').appendChild(document.getElementById(idEnd));
    document.getElementById(idEnd).setAttribute("class","acabada");
    var botonesEnd = document.getElementById(idEnd).lastChild.childNodes;
    botonesEnd[0].setAttribute("value",'Archivar');
    botonesEnd[1].setAttribute("value",'Volver');

}

export {addTarea, endTarea, delTarea} ;