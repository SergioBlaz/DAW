"use strict";
import {mostrarPeliculas, mostrarSinopsis} from "./includes/mostrar.js";

window.onload = () =>{
    const url = "https://swapi.dev/api/films";

    var httpRequest = new XMLHttpRequest();

    httpRequest.open("GET",url,true);
    
    httpRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    
    httpRequest.addEventListener("readystatechange", () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200){

            document.getElementById("peliculas").appendChild(mostrarPeliculas(JSON.parse(httpRequest.response)));
            
            document.addEventListener("click", (e) => {    
                if(e.target.nodeName == "LI"){    
                    document.getElementById("sinopsis").innerHTML = mostrarSinopsis(JSON.parse(httpRequest.response),e.target.id);
                    
                    
                }

            },
            true);
        }
    }, 
    true);

    httpRequest.send();
    


}