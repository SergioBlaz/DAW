"use strict";

function llamarPeliculas(){
    return promise = new Promise((resolve, reject) =>{
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
                reject("<p>A sucedido un error inesperado</p>");
            }
        });

        httpRequest.send();

    });
}

export {llamarPeliculas}