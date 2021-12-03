"use strict";

//Función para mostrar las películas recibidas del objeto JSON.
function mostrarPeliculas(peliculas){
    let listaPeliculas = document.createElement("ul");

    peliculas.results.map((v) => {
        listaPeliculas.innerHTML += `<li>${v.title}</li>`;
    });

    return listaPeliculas;
}