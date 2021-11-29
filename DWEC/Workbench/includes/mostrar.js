"use strict";

function mostrarPeliculas(peliculas){

    let listaPeliculas = document.createElement("ul");

    peliculas.results.map((v) => {
        listaPeliculas.innerHTML += `<li id=o${v.episode_id}>(${v.episode_id})${v.title}</li>`;
    });

    return listaPeliculas;
}

function mostrarSinopsis(peliculas,id){
    let sinopsis = "";

    peliculas.results.map((v) => {

        if(`o${v.episode_id}` == id){
            sinopsis = `<p>${v.opening_crawl}</p>`;
        }

    })
    return sinopsis;
}

function mostrarPersonaje(personajes){
    let listaPersonajes = document.createElement("ul");

    personajes.results.map((v) => {
        listaPersonajes.innerHTML += `<li>${v.name}</li>`;
    })

    return listaPersonajes;
}



export {mostrarPeliculas, mostrarSinopsis};