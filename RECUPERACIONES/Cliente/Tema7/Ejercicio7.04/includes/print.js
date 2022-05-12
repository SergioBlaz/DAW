"use strict"
import { getPromAll, getPromise } from "./promises.js"

//Función que recibe un JSON y devuelve una lista no ordenada. Cada elemento de la lista contiene un evento que muestra una sinopsis
export const showFilms = res => {
    let peliculas = document.createElement("ul")
    peliculas.setAttribute("name","peliculas")
    res.results.map( peli => {
        
        let list = document.createElement("li")
        list.setAttribute("id",`f${peli.episode_id}`)
        list.innerHTML = `[${peli.episode_id}] ${peli.title}`
        peliculas.appendChild(list)

        //Evento al propio elemento lista
        list.addEventListener("click", async () => {
            document.querySelector("#sinopsis").innerHTML = showSinopsis(await getPromise(peli.url))
            getPromAll(newCharArray(peli.characters))
        })
    })
    return peliculas
}

//Función que devuelve la propiedad opening_crawl del JSON que reibe como parámetro
export const showSinopsis = res => {
    return res.opening_crawl
}

//Función que recibe un JSON y devuelve un elemento li con el atributo .name
export const showName = res => {
    let li = document.createElement("li")
    li.textContent = res.name
    return li
}

//Función que recibe un array y devuelve otra con solo los 10 primeros enlaces
const newCharArray = char =>{
    const charArray = []
    for(let i=0; i<10; i++){
        charArray[i] = fetch(char[i]).then(r => r.json())
    }
    return charArray
}

//Función que recibe un array de json y devuelve su nombre
export const showCharacters = arr => {
    let ul = document.createElement("ul")
    arr.map(v => {
        ul.appendChild(showName(v))
    })
    return ul
}
