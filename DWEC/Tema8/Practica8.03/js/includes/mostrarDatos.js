"use strict";

//Función para mostrar los datos de un producto
export const datosCompletos = (prod) => {
    return `<img src=${prod.data().imagen} height=70 width=70> ${prod.data().nombre} - ${prod.data().peso}Kg - ${prod.data().precio}€ - ${prod.data().descripcion}`
}

//Función para mostrar las listas creadas
export const datosListas = (lista) => {
    //Editar la función para que se muestre tras hacer click en una lista
    return `Nombre: ${lista.data().nombre} - Propietario: ${lista.data().propietario} - Fecha de Creación: ${lista.data().fecha} - ${articulosListas(lista.data().articulos)} `
}
//Función para mostrar los articulos de una lista creada
const articulosListas = (obj) =>{
    var articulos
    obj.forEach((e)=>{
        articulos += `<p class='articulo ocultar'>Nombre: ${e.nombre} Peso:${e.peso} Kg Precio:${e.precio} €`
    })
    return articulos
}
//Función para mostrar u ocultar los articulos de una lista
export const mostrarArticulosListas = (art) =>{
    art.forEach((e)=>{
       e.className =="mostrar" ? e.className="ocultar" : e.className="mostrar"
    })
}
//Funciónes para ocultar o mostrar las opciones de creacion de listas
export const formularioCrear = (selec) =>{
    selec ? document.querySelector("#crearLista").className = "mostrar" : document.querySelector("#crearLista").className = "ocultar"
    //doucument.querySelector("#crearLista").className.toggle("ocultar")
}
export const botonCrear = (selec) =>{
    selec ? document.querySelector("#crear").className = "mostrar" : document.querySelector("#crear").className = "ocultar"
}
export const botonAnadir = (selec) => {
    selec ? document.querySelector("#anadirProducto").className = "mostrar" : document.querySelector("#anadirProducto").className = "ocultar"
}

//Funcióm para devolver los datos de los productos que serán guardados en la lista
export const datosProductoLista = (prod) =>{
    return data = [prod.data().nombre, prod.data().peso, prod.data().precio]
}