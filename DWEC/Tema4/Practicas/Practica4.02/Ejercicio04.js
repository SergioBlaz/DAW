"use strict";

let imagenes = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];

let d = document;


//Función para mostrar imagen en el documento
function mostrarImagen(){
    let cont = d.createElement('div');
    let imagen = d.createElement('img');
    let i=0;
    var intervalo = setInterval(()=>{

    switch (i) {
        case 0:
            imagen.setAttribute("alt","Gundyr")
            break;
        case 1:
            imagen.setAttribute("alt","Abbys Watcher")
            break;    
        case 2:
            imagen.setAttribute("alt","Ancient Dragon")
            break;
        case 3:
            imagen.setAttribute("alt","Phantom Dancer")
            break;
        default:
            break;
    }

        imagen.setAttribute("src",`${imagenes[i]}`);
        imagen.setAttribute("id",'transicion');
        i++;
        cont.appendChild(imagen);
        d.body.appendChild(cont);
        if(i>3){
            i=0;
        };

    },3000);


}
mostrarImagen();