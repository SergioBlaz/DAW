"use strict"

import { showFilms, showSinopsis } from "./includes/print.js"
import { getCharacters } from "./includes/promises.js"

window.onload = () => {
    let d = document
    fetch("https://swapi.py4e.com/api/films")
    .then(resp => resp.json())
    .then(data => {
        
        //Limpiamos la info que se pueda estar mostrando y añadimos los datos de respuesta al elemento peliculas.
        d.querySelector("#info").innerHTML = ""
        d.querySelector("#peliculas").appendChild(showFilms(data))

        //Para cada elemento en la lista de películas añadimos un evento que muestra su sinopsis.
        d.querySelectorAll("#peliculas>ul>li").forEach(film => {
            film.addEventListener("click", () => {
                d.querySelector("#sinopsis").innerHTML = showSinopsis(data,film.id)
                d.querySelector("#personajes").innerHTML = ""
                
                /* Recorremos todas las películas que nos han devuelto. Después comprobamos que su ID sea el mismo
                que la película sobre la que hemos clicado y realizamos 10 consultas que corresponden a los
                personajes de esta película. */
                data.results.map(fi => {
                    if(fi.episode_id == film.id){
                        for(let i=0; i<10; i++){
                            getCharacters(fi, i, d)
                        }
                    }
                })
            }, false)
        })
    }) 
}