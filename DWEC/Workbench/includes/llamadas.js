"use strict";
function consultaPersonaje(pUrl){
    const url = pUrl;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url,true);
    httpRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    httpRequest.addEventListener("readystatechange", () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            return JSON.parse(httpRequest.response).name;
        }
    }, 
    true);
}

export {consultaSinopsis, consultaPeliculas, consultaPersonaje}