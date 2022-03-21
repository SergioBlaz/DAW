"use strict"

window.onload = () => {
   //Inserción del elemento botón.
    document.body.innerHTML += `<button id=reset>Restablecer</button>`

    //Evento para ocultar el párrafo al sacar el ratón de este.
    document.getElementsByName("text").forEach( e => {
        e.addEventListener("mouseout", e => {
            e.target.style.visibility = "hidden"
        }
        ,false)
    })

    //Evento para eliminar el párrafo al clicar sobre este.
    document.getElementsByName("text").forEach( e => {
        e.addEventListener("click", e => {
            e.target.style.display = "none"
        }
        ,false)
    })

    //Evento para restablecer la visibilidad de los elementos.
    document.getElementById("reset").addEventListener("click",e=>{
        document.getElementsByName("text").forEach( e => {
            e.style.visibility = "visible"
        },false)
    })
}