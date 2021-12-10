"use strict";

//Función para mostrar las películas recibidas del objeto JSON.
export function mostrarPeliculas(peliculas){
    let listaPeliculas = document.createElement("ul");

    peliculas.results.map((v) => {
        listaPeliculas.innerHTML += `<li id=o${v.episode_id}>(${v.episode_id})${v.title}</li>`;
    });

    return listaPeliculas;
}

//Función para mostrar la Sinopsis del objeto JSON recibido por parámetro.
export function mostrarSinopsis(peliculas,id){
    let sinopsis = "";
    peliculas.results.map((v) => {
        if(`o${v.episode_id}` == id){
            sinopsis = `<p>${v.opening_crawl}</p>`;
        }
    })
    return sinopsis;
}

export function mostrarPersonaje(personaje){
    return personaje = `<li>${personaje.name}</li>`
}

export function mostrarInfoPersonaje(personaje){
    return personaje = `<li>Nombre: ${personaje.name}</li><li>Peso: ${personaje.mass}</li><li>Altura: ${personaje.height}</li><li>Color de ojos: ${personaje.eye_color}</li><li>Color de pelo: ${personaje.hair_color}</li><li>Color de piel: ${personaje.skin_color}</li>`;
}