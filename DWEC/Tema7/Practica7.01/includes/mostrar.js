"use strict";
//Función para mostrar las películas recibidas del objeto JSON.
function mostrarPeliculas(peliculas){
    let listaPeliculas = document.createElement("ul");
    peliculas.results.map((v) => {
        listaPeliculas.innerHTML += `<li id=o${v.episode_id}>(${v.episode_id})${v.title}</li>`;
    });
    return listaPeliculas;
}

//Función para mostrar la Sinopsis del objeto JSON recibido por parámetro.
function mostrarSinopsis(peliculas,id){
    let sinopsis = "";
    peliculas.results.map((v) => {
        if(`o${v.episode_id}` == id){
            sinopsis = `<p>${v.opening_crawl}</p>`;
        }
    })
    return sinopsis;
}

//Función para llamar a la api de star wars, por un pensonaje concreto y cuando este responda añadirlo a una lista.
function llamarPersonajes(pUrl){
    const url = pUrl;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url,true);
    httpRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    httpRequest.addEventListener("readystatechange", () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            //Unicamente cuando la api nos responde se añade el personaje al DOM
            document.getElementById("personaje").innerHTML += `<li>${(JSON.parse(httpRequest.response).name)}</li>`;
        }
    },
    true);
    
    httpRequest.send();
}
export {mostrarPeliculas, llamarPersonajes, mostrarSinopsis};