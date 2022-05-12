"use strict"

import { showCharacters } from "./print.js"

//Función que realiza una consuta a la api de Star Wars y devuelve un JSON con las películas
export const getPromise = async (url) => {
    return (await fetch(url)).json()
}

export const getPromAll = req => {
    Promise.all(req)
    .then(resp => document.querySelector("#personajes").appendChild(showCharacters(resp)))
}

