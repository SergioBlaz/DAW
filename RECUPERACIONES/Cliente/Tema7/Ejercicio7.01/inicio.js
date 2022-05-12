"use strict"

import { mostrarPeliculas, mostrarSinopsis } from "./js/includes/mostrar.js"
import { consultaPersonaje } from "./js/includes/consultas.js"

window.onload = () => {
    let d = document
    const url = "https://swapi.py4e.com/api/films"
    var request = new XMLHttpRequest()
    request.open("GET",url)

    //Evento para el cambio de estado en la petición.
    request.addEventListener("readystatechange",() => {
        if(request.readyState == 4 && request.status == 200){

            //Limpiamos la información para el usuario y añadimos todas las películas una vez nos haya respondido la consulta.
            d.querySelector("#info").innerHTML = ""
            d.querySelector("#peliculas").appendChild(mostrarPeliculas(JSON.parse(request.response)))

            //Evento para cada elemento(pelicula) para mostrar su sinopsis tras hacer click en su nombre.
            d.querySelectorAll("#peliculas>ul>li").forEach(e => {
                e.addEventListener("click", () => {
                    d.querySelector("#sinopsis").innerHTML = mostrarSinopsis(JSON.parse(request.response),e.id)
                    d.querySelector("#personajes").innerHTML = ""

                    //Recorrer la respuesta y mostrar 10 personajes.
                    JSON.parse(request.response).results.map(el => {
                        if(el.episode_id == e.id){
                            for(let i = 0; i<10; i++){
                                consultaPersonaje(el.characters[i])
                            }
                        }
                    })
                })
            }) 
        }
    })
    request.send()
}