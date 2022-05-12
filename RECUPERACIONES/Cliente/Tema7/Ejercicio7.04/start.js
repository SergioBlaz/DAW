"use strict"

import { getPromise } from "./includes/promises.js"
import { showFilms } from "./includes/print.js"

window.onload = async () => {
    let d = document
    let url = "https://swapi.py4e.com/api/films"
    
    //Limpiamos la info que se pueda estar mostrando y añadimos los datos de respuesta al elemento peliculas.
    d.querySelector("#info").innerHTML = ""
    d.querySelector("#peliculas").appendChild(showFilms(await getPromise(url)))    
}