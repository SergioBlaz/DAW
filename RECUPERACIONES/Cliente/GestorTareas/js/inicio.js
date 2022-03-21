"use strict";

import { toggle, moveTarea, actualizarTareas } from "./includes/utilidad.js"
import { add, del, botonesPendientes } from "./includes/pendientes.js"
import { botonesAcabadas, showTareas } from "./includes/acabadas.js"
import { antesTarea, despuesTarea } from "./includes/arrastrar.js"

window.onload = () => {
    const d = document
    
    //Evento para la mostrar u ocultar el formulario para nuevas tareas    
    d.getElementById("new").addEventListener("click", () => {
        toggle(d.getElementById("form-tareas"))
    }, false)

    //Evento que inserta una nueva tarea en la lista de pendientes
    d.getElementById("add").addEventListener("click", () => {
        toggle(d.getElementById("form-tareas"))
        add(d.getElementById("form-titulo"), d.getElementById("form-contenido"),d.getElementById("tareas-pendientes"))
        d.getElementById("form-titulo").value = "", d.getElementById("form-contenido").value = ""
        actualizarTareas()
    }, false)

    //Event Delegation para añadir eventos a los elementos generados dinamicamente en el DOM.
    d.getElementById("tareas-pendientes").addEventListener("click", (e) => {
        if(e.target.name === "del"){
            del(e.target.parentNode.parentNode)
            actualizarTareas()
        } else if (e.target.name === "end"){
            moveTarea(botonesAcabadas(e.target.parentNode.parentNode),d.getElementById("tareas-acabadas"))
            actualizarTareas()
        }
    }, false)

    //Event Delegation para los botones de la lista de acabadas
    d.getElementById("tareas-acabadas").addEventListener("click", (e) => {
        if(e.target.name === "store"){
            toggle(e.target.parentNode.parentNode)
        } else if (e.target.name === "back"){
            moveTarea(botonesPendientes(e.target.parentNode.parentNode), d.getElementById("tareas-pendientes"))
            actualizarTareas()
        }
    }, false)

    //Evento para mostrar las tareas que hayan sido archivadas
    d.getElementById("show").addEventListener("click", () => {
        showTareas(d.getElementsByClassName("tarea"))
    }, false)

    //Evento para mover las tareas
    var elementoArrastrado
    d.addEventListener("dragstart", (e) => {
        elementoArrastrado = e.target
    }, false)

    //Evento para eleminar el comportamiento por defecto al pasar por encima
    d.addEventListener("dragover", (e) => {
        e.preventDefault()
    }, false)
    
    //Evento para soltar una tarea
    d.addEventListener("drop", (e) =>{
        e.preventDefault()

        //Mover tareas entre acabadas y pendientes
        if(e.target.id === "tareas-acabadas"){
            moveTarea(botonesAcabadas(elementoArrastrado), e.target)
            actualizarTareas()
        } else if (e.target.id === "tareas-pendientes") {
            moveTarea(botonesPendientes(elementoArrastrado), e.target)
            actualizarTareas()
        }

        //Mover tareas dentro de una lista
        var elemento = e.target;
        if(elemento.parentNode.id === "tareas-pendientes" || elemento.parentNode.id==="tareas-acabadas" && elemento.draggable === true){
            var sizeElemento = elemento.getBoundingClientRect()
            var y = e.clientY - sizeElemento.top
            if( y >= (elemento.offsetHeight/2)){
                despuesTarea(elementoArrastrado, e.target)
            } else if ( y < (elemento.offsetHeight/2)){
                antesTarea(elementoArrastrado, e.target)
            }
        }
    }, false)
}