"use strict";

let d = document;

//Contador de las tareas añadidas
let cTareas=0;

//Funcion para añadir funcionalidad a los botones
function botones(){
    
    //Boton para añadir
    var botonAdd = d.getElementById('add');
    botonAdd.onclick = function() {addTarea()};

    //Botón para mostrar
    var botonShow = d.getElementById('sho');
    botonShow.onclick = function() {showTareas()};
}

botones();

//Función para añadir tareas nuevas a la lista de pendientes
function addTarea(){
    //Seleccion del texto a implementar
    var textoImplementar = d.querySelector('textarea').value ;

    //Creación de los elementos que contiene la tarea
    var pendientes = d.getElementById('pendientes');
    var contenedorTarea  = d.createElement('div');
    contenedorTarea.setAttribute("class","tarea");
    contenedorTarea.setAttribute("id",`tarea${cTareas}`);
    var textoTarea = d.createElement('p');
    var botonesTarea = d.createElement('p');
    botonesTarea.setAttribute("class","botones");
    
    //Creación de los botones
    var botonAcabar = d.createElement('input');
    botonAcabar.setAttribute("type","button");
    botonAcabar.setAttribute("value","Acabar");
    botonAcabar.setAttribute("class","end");
    botonAcabar.setAttribute("onclick",`endTarea(${cTareas})`)
    var botonBorrar = d.createElement('input');
    botonBorrar.setAttribute("type","button");
    botonBorrar.setAttribute("value","Borrar");
    botonBorrar.setAttribute("class","del");
    botonBorrar.setAttribute("onclick",`delTarea(${cTareas})`)
    cTareas++;

    //Añadir e implementar el texto y los botones al contenedor de Pendientes
    textoTarea.innerHTML = textoImplementar;
    botonesTarea.appendChild(botonBorrar);
    botonesTarea.appendChild(botonAcabar);
    contenedorTarea.appendChild(textoTarea);
    contenedorTarea.appendChild(botonesTarea);
    pendientes.appendChild(contenedorTarea);
}

//Función para borrar una tarea de la lista de pendientes
function delTarea(idDel){
    console.log(d.getElementById(`tarea${idDel}`));
    pendientes.removeChild(d.getElementById(`tarea${idDel}`));
}

//Función para acabar una tarea pendiente y añadirla a la lista de acabadas
function endTarea(idEnd){
    d.getElementById('acabadas').appendChild(d.getElementById(`tarea${idEnd}`));
    d.getElementById(`tarea${idEnd}`).setAttribute("class","acabada");
    var botonesEnd = d.getElementById(`tarea${idEnd}`).lastChild.childNodes;
    botonesEnd[0].setAttribute("value",'Archivar');
    botonesEnd[0].setAttribute("onclick",`saveTarea(${idEnd})`);
    botonesEnd[1].setAttribute("value",'Volver');
    botonesEnd[1].setAttribute("onclick",`backTarea(${idEnd})`);
}

//Función para archivar una tarea de la lista de acabadas
function saveTarea(idSave){
    d.getElementById(`tarea${idSave}`).setAttribute("class","acabadaOculta");
}

//Función para volver a poner una tarea en la lista de pendientes
function backTarea(idBack){
    pendientes.appendChild(d.getElementById(`tarea${idBack}`));
    d.getElementById(`tarea${idBack}`).setAttribute("class","tarea");
    var botonesEnd = d.getElementById(`tarea${idBack}`).lastChild.childNodes;
    botonesEnd[0].setAttribute("value",'Acabar');
    botonesEnd[0].setAttribute("onclick",`endTarea(${idBack})`);
    botonesEnd[1].setAttribute("value",'Borrar');
    botonesEnd[1].setAttribute("onclick",`delTarea(${idBack})`);

}

//Función para mostrar las tareas finalizadas y ocultas
function showTareas(){
    var ocultas = d.getElementsByClassName("acabadaOculta");
   
    //El bucle tiene que ser desde el final para poder recorrer todos los elementos
    for(let i=ocultas.length-1 ; i >= 0; i--){
        console.log(i);
        ocultas.item(i).setAttribute("class","acabada");
    }
}