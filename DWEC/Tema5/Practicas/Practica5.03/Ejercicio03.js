"use strict";

window.onload = () => {
    var d = document;

    //Evento para el botón guardar.
    var boton = d.getElementById("guardar");
    boton.addEventListener("click" ,(e) => {
        mostrarDisco();
    },false);

    //Función constructor de objetos del tipo disco.
    function constructorDiscos(pNombre, pInterprete, pAnyo, pTipo, pLocalizacion, pPrestado){
        return {
            Nombre: pNombre,
            Interprete: pInterprete,
            Anyo: pAnyo,
            Tipo: pTipo,
            Estanteria: pLocalizacion,
            Prestado: pPrestado,
        }
    }
    
    //Función para recoger los datos del formulario y crear un nuevo objeto disco.
    function nuevoDisco(){
        return constructorDiscos(d.getElementById("nombre").value,d.getElementById("interprete").value,d.getElementById("anyo").value,d.getElementById("seleccion").options[d.getElementById("seleccion").selectedIndex].value, d.getElementById("localizacion").value, d.getElementById("prestado").checked);
    }
    
    //Función para mostrar los discos creados por pantalla.
    function mostrarDisco(){
        var alamcen = d.querySelector("tbody");
        var disco = nuevoDisco();
        if(disco.Nombre != "" || disco.Interprete != "" || disco.Anyo != "" || disco.Estanteria != ""){
            alamcen.innerHTML += `<tr><td>${disco.Nombre}</td><td>${disco.Interprete}</td><td>${disco.Anyo}</td><td>${disco.Tipo}</td><td>${disco.Estanteria}</td><td>${disco.Prestado}</td></tr>`;
        }
    }

}