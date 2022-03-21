"use strict"

//Función para cambiar los botones de una tarea
export const botonesAcabadas = (tarea) => {
    tarea.childNodes[4].innerHTML =`<input type=button name="store" class="btn-tarea" value="Archivar">
                                    <input type=button name="back" class="btn-tarea" value="Pendiente">`
    return tarea
}

//Función para mostrar las tareas archivadas
export const showTareas = (tareas) => {
    for(let i=0; i<tareas.length; i++){
       tareas[i].style.display = "inline"
    }
}