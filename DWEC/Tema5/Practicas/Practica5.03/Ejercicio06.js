"use strict";

window.onload = () => {
    var d = document;

    var disco

    //Evento para el botón guardar.
    d.getElementById("guardar").addEventListener("click" ,(e) => {
        disco = nuevoDisco();
        comprobarDatos();
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
        alamcen.innerHTML += `<tr><td>${disco.Nombre}</td><td>${disco.Interprete}</td><td>${disco.Anyo}</td><td>${disco.Tipo}</td><td>${disco.Estanteria}</td><td>${disco.Prestado}</td></tr>`;
    }

    //Función para comprobar que los datos introducidos son correctos
    function comprobarDatos(){
        
        var nombreTest = /^[A-Za-z]{5}/;
        var anyoTest = /\d{4}/;
        var localizacionTest = /ES-\d{3}[A-Z]{2}/;

        if(!nombreTest.test(disco.Nombre)){
            d.getElementById("nombre").setAttribute("class","error");
        } else {
            d.getElementById("nombre").removeAttribute("class");
        }
        if(!nombreTest.test(disco.Interprete)){
            d.getElementById("interprete").setAttribute("class","error");
        } else {
            d.getElementById("interprete").removeAttribute("class");
        }
        if(!anyoTest.test(disco.Anyo)){
            d.getElementById("anyo").setAttribute("class","error");
        } else {
            d.getElementById("anyo").removeAttribute("class");
        }
        if(!localizacionTest.test(disco.Estanteria)){
            d.getElementById("localizacion").setAttribute("class","error");
        } else {
            d.getElementById("localizacion").removeAttribute("class");
        }
    }
}