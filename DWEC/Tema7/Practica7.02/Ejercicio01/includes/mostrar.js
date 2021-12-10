"use strict";

//Función para mostrar las películas recibidas del objeto JSON.
export function mostrarPeliculas(peliculas){
    let listaPeliculas = document.createElement("ul");

    peliculas.map((v) => {
        listaPeliculas.innerHTML += `<li id=${v.id}>${v.title} - ${v.original_title}</li>`;
    });

    return listaPeliculas;
}
//Función para mostrar una imagen en relación a la película.
export function mostrarImagen(peliculas, id){
    let img = document.createElement("img")

    peliculas.map((v)=>{
        if(v.id == id){
            img.setAttribute("src",v.image);
            img.setAttribute("alt",v.title);
        }
    })
    return img
}

//Función para mostrar la descripción de la película.
export function mostrarDescripcion(peliculas,id){
    let descripcion = "";

    peliculas.map((v) => {
        if(v.id == id){
            descripcion +=`${v.description}`;
        }
    })

    return descripcion
}

//Función para mostrar información de los personajes que aparecen en la película
export function mostrarPersonaje(personaje){
    return personaje = `<li>Name:${personaje.name} Age:${personaje.age} Hair color:${personaje.hair_color}</li>`
}