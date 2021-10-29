"use strict";

//Evento que espera la carga completa del la página para ejecutar el código js
window.onload = () => {

    var d = document;

    //Semáforo para controlar si quiere saludar o no
    var saludar;

    //Función para crear dos botones y añadirlos al documento
    function botones(){
        var contenedorBotones = d.createElement("div");
        contenedorBotones.setAttribute("id","botones");

        var botonComenzar = d.createElement("input");
        botonComenzar.setAttribute("type","button");
        botonComenzar.setAttribute("id","comenzar");
        botonComenzar.setAttribute("value","Comenzar Saludos");
        
        var botonParar = d.createElement("input");
        botonParar.setAttribute("type","button");
        botonParar.setAttribute("id","parar");
        botonParar.setAttribute("value","Parar Saludos");

        contenedorBotones.appendChild(botonComenzar);
        contenedorBotones.appendChild(botonParar);
        d.body.appendChild(contenedorBotones);
    }
    
    botones();

    //Creación del contenedor para añadir los saludos    
    var contenedorSaludo = d.createElement("div");
    contenedorSaludo.setAttribute("id","saludo");
    
    //Asignación del evento click para empezar el intervalo saludar
    var botonC = d.getElementById("comenzar");
    botonC.addEventListener("click", () => {
        saludar=true;
        //Intervalo para imprimir por pantalla un saludo  
        var intervaloSaludar = setInterval( () => {
            if(saludar){
                var saludo = d.createElement("h1");
                saludo.innerHTML = "¡HOLA GUAPO!";
                contenedorSaludo.appendChild(saludo);
                d.body.appendChild(contenedorSaludo);
            } else {
                clearInterval(intervaloSaludar);
            }
        }, 2000);
    }, false);

    //Asignación del evento click para parar el intervalo
    var botonP = d.getElementById("parar");
    botonP.addEventListener("click", () => {
        if(saludar){
            saludar=false;
            console.log(saludar);
        }
    }, false);    
}