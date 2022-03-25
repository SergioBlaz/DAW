"use strict"
const d = document

//Función que realiza una consulta de cada pelicula que se le pase por parámetro.
export const consultaPersonaje = (url) =>{
    var request = new XMLHttpRequest()
    request.open("GET",url)
    request.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    )
    //Evento para el cambio de estado en la petición.
    request.addEventListener("readystatechange",() => {
        if(request.readyState == 4 && request.status == 200){
            d.querySelector("#personajes").innerHTML +=  `<li>${JSON.parse(request.response).name}</li>`
        }
    })
    request.send()
}