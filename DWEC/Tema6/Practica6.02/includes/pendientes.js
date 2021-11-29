"use strict";

let d = document;

//Función para añadir tareas nuevas a la lista de pendientes.
function addTarea(textoImplementar,contenedor,cTareas){

    if(textoImplementar != ""){

        var contenedorTarea  = d.createElement('div');
        contenedorTarea.setAttribute("class","tarea");
        contenedorTarea.setAttribute("id",`tarea${cTareas}`);
        contenedorTarea.setAttribute("draggable", true);
 
        var textoTarea = d.createElement('p');
        var botonesTarea = d.createElement('p');
        botonesTarea.setAttribute("class","botones");
        
        //Añadir boton para acabar la tarea.
        botonesTarea.innerHTML += `<input type=button value=Acabar class=end, name=tarea${cTareas}>`;
        
        //Añadir botón para borrar la tarea.
        botonesTarea.innerHTML += `<input type=button value=Borrar class=del, name=tarea${cTareas}>`;
        
        //Añadir e implementar el texto y los botones al contenedor de Pendientes.
        textoTarea.innerHTML = textoImplementar;
        contenedorTarea.appendChild(textoTarea);
        contenedorTarea.appendChild(botonesTarea);
        contenedor.appendChild(contenedorTarea);       
    }
}

//Función para borrar una tarea de la lista de pendientes.
function delTarea(contenedor,idDel){
    contenedor.removeChild(d.getElementById(idDel));
}

//Función para añadir a la lista Acabadas las tareas en Pendientes.
function endTarea(contenedor,idEnd){

    contenedor.appendChild(d.getElementById(idEnd));
    d.getElementById(idEnd).setAttribute("class","acabada");
    var botonesEnd = d.getElementById(idEnd).lastChild.childNodes;
    botonesEnd[0].setAttribute("value",'Archivar');
    botonesEnd[1].setAttribute("value",'Volver');

}

export {addTarea, endTarea, delTarea};