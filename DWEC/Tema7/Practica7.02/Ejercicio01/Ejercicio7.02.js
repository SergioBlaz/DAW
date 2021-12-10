"use strict";

import{llamarPeliculas, llamarPersonajes} from "./includes/llamadas.js";

import{mostrarDescripcion, mostrarImagen, mostrarPeliculas, mostrarPersonaje} from "./includes/mostrar.js";

window.onload = () => {
    //Llamar a la función que solicita información a la api.
    llamarPeliculas()
    .then((response)=>{
        
        //Se muestran las películas disponibles en el DOM.
        document.getElementById("films").innerHTML = "<h2>Films</h2>"
        document.getElementById("films").appendChild(mostrarPeliculas(response));

        //Evento click para mostrar la descripción de la película y sus personajes.
        document.addEventListener("click", (e)=>{
            if(e.target.nodeName == "LI" && e.target.parentNode.parentNode.id == "films"){

                document.getElementById("description").innerHTML = `<h2>Description</h2> <p class=film-desc>${mostrarDescripcion(response,e.target.id)}</p>`;
                document.getElementById("image").innerHTML = `<h2>Image</h2>`;
                document.getElementById("image").appendChild(mostrarImagen(response, e.target.id));

                document.getElementById("people").innerHTML = "";
                document.getElementById("people").innerHTML = "<h2>People</h2>";
                document.getElementById("people").innerHTML += "<ul id=ul-people></ul>";

                //Recorrer la respuesta de la api para mostrar los personajes
                response.map((v)=>{

                    if(v.id == e.target.id){    

                        if(v.people[0] != "https://ghibliapi.herokuapp.com/people/"){

                            for(let i=0; i<v.people.length; i++){

                                //Función que llama a la api para mostrar los personajes.
                                llamarPersonajes(v.people[i])
                                .then((responseP)=>{
                                    document.getElementById("ul-people").innerHTML += mostrarPersonaje(responseP);

                                })
                                //Control de errores de los personajes.
                                .catch((rejectP)=>{
                                    document.getElementById("info").innerHTML = rejectP;
                                });
                            }
                        }
                        //Control de errores de los personajes.
                        else{
                            document.getElementById("ul-people").innerHTML = "<p class=error>No people founded</p>"
                        }
                    }
                })
            }
        },
        true);
        
    })
    //Control de errores de las películas.
    .catch((reject)=>{
        document.getElementById("info").innerHTML = reject;
    });

}