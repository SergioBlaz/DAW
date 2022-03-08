"use strict";

//Función para llamar a la api de peliculas de estudios ghibli
export function llamarPeliculas(){
    return new Promise((resolve, reject) =>{
        const url = "https://ghibliapi.herokuapp.com/films";
        var httpRequest = new XMLHttpRequest();
        httpRequest.open("GET",url,true);
        httpRequest.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        
        httpRequest.addEventListener("readystatechange", (e)=>{
            if(httpRequest.readyState== 4 && httpRequest.status == 200){
                resolve(JSON.parse(httpRequest.response));
            }
            if(httpRequest.status > 300){
                reject("<p class=error>A sucedido un error inesperado</p>");
            }
        });

        httpRequest.send();

    });
}
//Función para llamar a los personajes que aparecen en la película que se haya seleccionado.
export function llamarPersonajes(personaje){
    return new Promise((resolve,reject) =>{
        const url = personaje;

        var httpRequest = new XMLHttpRequest();

        httpRequest.open("GET",url,true);
        httpRequest.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        httpRequest.addEventListener("readystatechange", (e)=>{
            if(httpRequest.readyState== 4 && httpRequest.status == 200){
                resolve(JSON.parse(httpRequest.response));
            }
            if(httpRequest.status > 300){
                reject("<p class=error>A sucedido un error inesperado</p>");
            }
        });

        httpRequest.send();
    });
}