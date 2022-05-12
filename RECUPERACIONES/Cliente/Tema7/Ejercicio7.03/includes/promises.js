"use strict"
import {showName} from "./print.js"

let d = document

//Evento para cada personaje de la película
export const getCharacters = (fi, i) => {
    fetch(fi.characters[i])
    .then(resp => resp.json())
    .then(charac => {
        //Muestro los personajes y añado un evento a cada uno de ellos para que al hacer click se muestren sus vehiculos y naves
        d.querySelector("#personajes").appendChild(showName(charac))
        d.querySelector("#personajes>li:last-child").addEventListener("click", () => {
            d.querySelector("#vehiculos").innerHTML = ""
            d.querySelector("#naves").innerHTML = ""
            getVehicles(charac)
            getStarships(charac)
        })
    })
}

//Función que recibe una consulta para mostrar los vehiculos.
//Si es mayor a cero por cada vehículo se realiza una consulta y se muestra por pantalla.
const getVehicles = character => {
    if(character.vehicles.length != 0 ){
        character.vehicles.forEach(sp => {
            fetch(sp)
            .then(res => res.json())
            .then(vehicle => d.querySelector("#vehiculos").appendChild(showName(vehicle)))
        });
    } else {
        d.querySelector("#vehiculos").innerHTML = `<p>Este personaje no tiene vehiculos</p>`
    }
}

//Función que recibe una consulta para mostrar las naves.
//Si es mayor a cero por cada vehículo se realiza una consulta y se muestra por pantalla.
const getStarships = character => {
    if(character.starships.length != 0){
        character.starships.forEach(sh => {
            fetch(sh)
            .then(res => res.json())
            .then(starship => d.querySelector("#naves").appendChild(showName(starship)))
        })
    }else{
        d.querySelector("#naves").innerHTML = `<p>Este personaje no tiene naves</p>`
    }
}