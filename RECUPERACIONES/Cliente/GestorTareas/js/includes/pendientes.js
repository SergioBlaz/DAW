"use strict"

//Función que recibe un titulo un contenido y elemento. Comprueba que los campos no estén vacios. 
//Inserta al final del contenedor un elemento tipo div.
export const add = (titulo, contenido, contenedor) =>{
    titulo.value != "" && contenedor.value != "" ? contenedor.appendChild(botonesPendientes(createTarea(titulo,contenido))) : console.log("Error: Campos vacíos")
}

//Función para eliminar el padre del padre de un elemento.
export const del = (e) => {
    e.remove()
}

//Función para poner los botones a una tarea de la lista de Pendientes
export const botonesPendientes = (tarea) => {
    tarea.childNodes[4].innerHTML =`<input type=button name="del" class="btn-tarea" value="Borrar"/>
                                    <input type=button name="end" class="btn-tarea" value="Acabar"/>`
    return tarea
}

//Función que recoge un titulo y un texto y devuelve una tarea con dos botones.
const createTarea = (titulo, contenido) => {
    const tarea = document.createElement("div")
    tarea.classList.add("tarea")
    tarea.setAttribute("draggable",true)
    tarea.innerHTML =   `<h3>${titulo.value}</h3>
                        <p>${contenido.value}</p>
                        <div name="container-btn-tarea" class="container-btn-tarea"></div>`
    return tarea
}