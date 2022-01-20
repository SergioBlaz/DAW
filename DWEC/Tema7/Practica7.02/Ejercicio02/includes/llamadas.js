"use strict";

export function llamarpeliculas(){
    return new Promise((resolve, reject) =>{
        const url = "https://swapi.py4e.com/films";
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