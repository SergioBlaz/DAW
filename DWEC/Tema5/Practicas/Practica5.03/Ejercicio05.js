"use strict";

window.onload = () => {
    var d = document;

    //Añadir de forma dinámica dos elementos al formulario.
    d.querySelector("form").innerHTML = "<select id='provincia'><option value='none'>No seleccionado</option><option value='alicante'>Alicante</option><option value='valencia'>Valencia</option><option value='castellon'>Castellón</option></select><select id='poblacion'></select><input type='button' value='Comprobar' id='comprobar'>";

    //Evento sobre el elemento select para cambiar la provincia.
    d.getElementById("provincia").addEventListener("change", () => {
        addOptions();
    },false);

    //Evento para comprobar que hay dos opciones válidas seleccionadas.
    d.addEventListener("click", (e) => {
        if(e.target.value == "Comprobar"){
            if(d.getElementById("poblacion").selectedIndex == -1 || d.getElementById("poblacion").options[d.getElementById("poblacion").selectedIndex].value == "none" || d.getElementById("provincia").options[d.getElementById("provincia").selectedIndex].value == "none"){
                d.getElementById("respuesta").innerHTML = "<p class='invalido'>Las selecciones no son válidas.</p>";
            } else {
                d.getElementById("respuesta").innerHTML = "<p class='valido'>Las selecciones son válidas.</p>";
            }
        }
    },false);

    //Funcion para añadir opciones a los select dependiento de la opción seleccionada.
    function addOptions(){
        if(d.getElementById("provincia").value == "alicante"){
            d.getElementById("poblacion").innerHTML = "<option value='none'>No seleccionado</option><option value='elche'>Elche</option><option value='alicante'>Alicante</option><option value='petrer'>Petrer</option>";
        } else if (d.getElementById("provincia").value == "valencia"){
            d.getElementById("poblacion").innerHTML = "<option value='none'>No seleccionado</option><option value='valencia'>Valencia</option><option value='xativa'>Xátiva</option><option value='torrent'>Torrent</option>";
        } else if (d.getElementById("provincia").value == "castellon"){
            d.getElementById("poblacion").innerHTML = "<option value='none'>No seleccionado</option><option value='castellon'>Castellón</option><option value='oropesa'>Oropesa</option><option value='vinaroz'>Vinaroz</option>";
        }
    }
}