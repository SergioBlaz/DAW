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

function mostrarPersonaje(data){
    console.log(data);
}

function llamarPersonaje(pUrl){
    const url = pUrl;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url,true);
    httpRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    httpRequest.addEventListener("readystatechange", ()=>{
        if(httpRequest.readyState == 3){
            console.log("Cargando...");
        }
        if(httpRequest.readyState == 4 && httpRequest.satus == 200){
            //Este código es asíncrono//
            console.log("A");
            mostrarPersonaje(JSON.parse(httpRequest.response));
            
            //
        }
    },
    true);
}



export {mostrarPeliculas,llamarPersonaje, mostrarSinopsis};