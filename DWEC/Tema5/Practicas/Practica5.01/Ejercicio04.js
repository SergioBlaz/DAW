"use strict";

window.onload = () => {
    
    var d = document;

    //Creación del contenedor de los elementos, las imagenes y un botón
    var contenedor = d.createElement("div");

    var imgPapelera = d.createElement("img");
    imgPapelera.setAttribute("src","img/pvacia.png");
    imgPapelera.setAttribute("alt","papelera vacia");
    imgPapelera.setAttribute("class","soltable");
    
    var imgPapel = d.createElement("img");
    imgPapel.setAttribute("src","img/papel.png");
    imgPapel.setAttribute("alt","bola de papel");
    
    var vaciar = d.createElement("input");
    vaciar.setAttribute("type","button");
    vaciar.setAttribute("id","vaciar");
    vaciar.setAttribute("value","Sacar la basura");

    //Evento para prevenir el comportamiento por defecto del elemento que estemos
    //arrastrando
    d.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);

    //Evento para cambiar las propiedades cuando el elemento que se ha seleccionado
    //se suelte encima del elemento con la clase soltable
    d.addEventListener("drop", (e) => {
        e.preventDefault();
        if(e.target.className =="soltable"){
            imgPapelera.setAttribute("src","img/pllena.png");
            imgPapel.style.display = "none";
        };
    },false );
    
    //Botón para vaciar la papelera llena
    vaciar.addEventListener("click", () =>{
        imgPapelera.setAttribute("src","img/pvacia.png");
    }, false);
    
    //Añadir al contenedor todos los elementos
    contenedor.appendChild(imgPapelera);
    contenedor.appendChild(imgPapel);
    contenedor.appendChild(vaciar);
    d.body.appendChild(contenedor);
};