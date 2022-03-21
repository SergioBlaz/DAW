"use strict"
let d = document

//Función que muestra u oculta un elemento del DOM.
export const toggle = (e) => {
    e.style.display === "none" ? e.style.display = "block" : e.style.display = "none"
}

//Función para mover un elemento de contenedor.
export const moveTarea = (tarea, contenedor) => {
    contenedor.appendChild(tarea)
}

//Función que cuenta los elementos dentro de 2 contenedores. Primero los suma para saber el total y después resta el primero al segundo.
const contadorTareas = () => {
    return `Tareas:${(d.getElementById("tareas-pendientes").childNodes.length-1)}/${(d.getElementById("tareas-pendientes").childNodes.length-1) + (d.getElementById("tareas-acabadas").childNodes.length-1)}`
}

//Función que actualiza en el elemento con Id contador las tareas.
export const actualizarTareas = () => {
    d.getElementById("contador").innerHTML = `${contadorTareas()}`
}