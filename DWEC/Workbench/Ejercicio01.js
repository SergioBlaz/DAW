"use strict";
import {mostrarPeliculas,llamarPersonaje, mostrarSinopsis} from "./includes/mostrar.js";

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
                    JSON.parse(httpRequest.response).results.map((v) => {
                        if(`o${v.episode_id}` == e.target.id){

                            console.log(v.characters[0]);
                            for(let i=0; i<10; i++){
                                llamarPersonaje(v.characters[0]);
                                //llamarPersonaje(v.characters[i]);
                            }
                        }
                    });

                }

            },
            true);
        }
    }, 
    true);

    httpRequest.send();
    


}