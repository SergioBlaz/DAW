"use strict";

window.onload = () => {
    
    //Evento para el botón comprobar.
    document.getElementById("comprobar").addEventListener("click", () => {

        //Recogo los dos campos y compruebo si es un anagrama.
        var esAnagrama = document.getElementById("text1").value.toLowerCase().split("").sort().join("") === document.getElementById("text2").value.toLowerCase().split("").join("");

        //Dependiendo del resultado muestro un texto u otro.
        if(esAnagrama){
            document.getElementById("respuesta").innerHTML = "<p>Si se trata de un anagrama.</p>";
        } else {
            document.getElementById("respuesta").innerHTML = "<p>No se trata de un anagrama.</p>";
        }
    },false);

}