"use strict";

import {llamarpeliculas,llamarPersonajes} from "./includes/llamadas.js";
import {mostrarInfoPersonaje, mostrarPeliculas, mostrarPersonaje, mostrarSinopsis} from "./includes/mostrar.js";

window.onload = () =>{

    document.getElementById("info").innerHTML = "<p>Cargando películas...</p>";

    llamarpeliculas()

    .then((response) =>{

    document.getElementById("info").innerHTML = "";

    //Unicamente cuando la api nos responda se añadirán las películas al DOM
    document.getElementById("peliculas").appendChild(mostrarPeliculas(response));

    //Y a su vez se habilitará un evento click al DOM para seleccionar la película
    document.addEventListener("click", (e) => {    
        if(e.target.nodeName == "LI" && e.target.parentNode.parentNode.id == "peliculas"){    
            
            document.getElementById("personaje").innerHTML = "";    
            document.getElementById("caracteristicas").innerHTML = "";
            
            //Si se hace click en una película se mostrará la sinopsis de esta
            document.getElementById("sinopsis").innerHTML = mostrarSinopsis(response,e.target.id);
                       
            //Con el objeto JSON, recorrerlo y llamar con un método a los 10 primeros personajes que aparecen.
            response.results.map((v) => { 
                if(`o${v.episode_id}` == e.target.id){
                    
                    for(let i=0; i<10; i++){
                        
                        //LLama 10 veces a un personaje.
                        llamarPersonajes(v.characters[i])

                        //Cuando respode la llamada se muestra el personaje.
                        .then((response) =>{
                            document.getElementById("personaje").innerHTML += mostrarPersonaje(response);

                            //Si hace click en un personaje se mostrará información sobre este personaje.
                            document.addEventListener("click", (e) =>{

                                //Se comprueba que el elemento sobre el que se hace click sea de la lista de personajes y se muestra su información.
                                if(e.target.nodeName == "LI" && e.target.parentNode.id == "personaje" && e.target.textContent == response.name){

                                    document.getElementById("caracteristicas").innerHTML = `<h2>Caracteristicas</h2>`;
                                    document.getElementById("caracteristicas").innerHTML += `<ul id=caracteristica></ul>`;
                                    document.getElementById("caracteristica").innerHTML = mostrarInfoPersonaje(response);
                                                                
                                }

                            },
                            true);

                        })
                    }
                }
            });

        }
        
    },
    true);

    })
         
}