"use strict"

//Función que recibe una consulta transformada a JSON y devuelve una lista no ordenada con sus atributos.
export const mostrarPeliculas = res => {
    let peliculas = document.createElement("ul")
    peliculas.setAttribute("name","peliculas")
    res.results.map( peli => {
        peliculas.innerHTML += `<li id=${peli.episode_id}>[${peli.episode_id}] ${peli.title}</li>`
    })
    return peliculas
}

//Función que recibe una consulta de películas y un id, comprueba la coincidencia y en esta devuelve un string.
export const mostrarSinopsis = (res, id) => {
    let txt
    res.results.map(peli => {
        if(peli.episode_id == id){
            txt = `<p>${peli.opening_crawl}</p>`
        }
    })
    return txt
}