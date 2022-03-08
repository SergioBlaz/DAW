"use strict";

import {mostrarPeliculas, llamarPersonajes, mostrarSinopsis} from "./includes/mostrar.js";

window.onload = () =>{
    //Llamada a la api de Star Wars
    const url = "https://swapi.dev/api/films";
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("GET",url,true);
    httpRequest.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded"
    );
    document.getElementById("info").innerHTML = "<p>Cargando películas...</p>";
    //Evento para el cambio de estado de la llamada a la api
    httpRequest.addEventListener("readystatechange", () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200){
            
            document.getElementById("info").innerHTML = "";

            //Unicamente cuando la api nos responda se añadirán las películas al DOM
            document.getElementById("peliculas").appendChild(mostrarPeliculas(JSON.parse(httpRequest.response)));
            
            //Y a su vez se habilitará un evento click al DOM para seleccionar la película
            document.addEventListener("click", (e) => {    
                if(e.target.nodeName == "LI" && e.target.parentNode.parentNode.id == "peliculas"){    
                    
                    //Si se hace click en una película se mostrará la sinopsis de esta
                    document.getElementById("sinopsis").innerHTML = mostrarSinopsis(JSON.parse(httpRequest.response),e.target.id);

                    document.getElementById("personaje").innerHTML = "";

                    //Con el objeto JSON, recorrerlo y llamar con un método a los 10 primeros personajes que aparecen.
                    JSON.parse(httpRequest.response).results.map((v) => { 
                        if(`o${v.episode_id}` == e.target.id){
                            
                            for(let i=0; i<10; i++){
                                llamarPersonajes(v.characters[i]);
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