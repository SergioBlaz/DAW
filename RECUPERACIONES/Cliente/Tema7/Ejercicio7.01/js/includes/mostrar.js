"use strict"

const d = document

//Función que recibe una consulta transformada a JSON y devuelve una lista no ordenada con algunos de sus atributos.
export const mostrarPeliculas = (res) => {
    var peliculas = d.createElement("ul")
    peliculas.setAttribute("name","peliculas")
    res.results.map( peli => {
        peliculas.innerHTML += `<li id=${peli.episode_id}>[${peli.episode_id}] ${peli.title}</li>`
    })
    return peliculas
}

//Función que recibe una consulta de películas y un id, comprueba la coincidencia y en esta devuelve un string.
export const mostrarSinopsis = (res, id) => {
    let snp
    res.results.map( peli => {
        if(peli.episode_id == id){
            snp = `<p>${peli.opening_crawl}</p>`
        }
    })
    return snp
}