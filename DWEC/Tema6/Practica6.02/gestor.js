"use strict";

import {addTarea, delTarea, endTarea} from "./includes/pendientes.js";
import {saveTarea, backTarea, showTareas} from "./includes/acabadas.js";
import {antesTarea, despuesTarea} from "./includes/arrastrarTareas.js";

window.onload = () => {
let d = document;

var cTareas = 0; 
    
    //Evento para añadir funcionalidad a los botones estáticos y los que se generan de forma dinámica.
    d.addEventListener("click", (e) => {
        if (e.target.id == 'add'){
            addTarea(d.querySelector('textarea').value,d.getElementById('pendientes'),cTareas);
            d.querySelector('textarea').value = "";
            cTareas++;
        }else if ( e.target.id == 'sho'){
            showTareas(d.getElementsByClassName("acabadaOculta"));
        } else if ( e.target.value == 'Borrar'){
            delTarea(d.getElementById('pendientes'),e.target.name);
        } else if ( e.target.value == 'Acabar'){
            endTarea(d.getElementById('acabadas'),e.target.name);
        } else if ( e.target.value == 'Volver'){
            backTarea(d.getElementById('pendientes'),e.target.name);
        } else if ( e.target.value == 'Archivar'){
            saveTarea(e.target.name);
        }
    }, false);

    //Evento para mover las tareas.
    var elementoArrastrado;
    
    //Guardo el elemento que voy a arrastrar.
    d.addEventListener("dragstart", (e) => {
        elementoArrastrado = e.target;
    },false);

    //Prevengo el funcionamiento por defecto.
    d.addEventListener("dragover", (e) => {
        e.preventDefault();
    }, false);

    //Dependiendo del id de los elementos en los que voy a soltar el elemento seleccionado realizo
    //una acción u otra y si están dentro de la lista pendientes al hacer drop se pueden reordenar.
    d.addEventListener("drop",(e) => {
        e.preventDefault();

        if(e.target.id == "acabadas"){
            endTarea(d.getElementById('acabadas'),elementoArrastrado.id);

        } else if(e.target.id == "pendientes") {
            backTarea(d.getElementById('pendientes'),elementoArrastrado.id);

        }
        
        //Guardo el elemneto sobre el que estoy al soltar para ordenar las tareas dentro de pendientes
        var elemento = e.target;
        
        if(elemento.parentNode.id == "pendientes" && elemento.draggable === true){

            //Guardo las medidas del elemento
            var sizeElemento = elemento.getBoundingClientRect();
            
            //Selecciono la posición del ratón y le resto la altura del elemento para obtener la posición del 
            //ratón en referencia al elemento sobre el que estoy
            var y = e.clientY - sizeElemento.top;
            
            //Si la posición del ratón es superior a la mitad de abajo del elemento se insertará después
            if( y >= (elemento.offsetHeight/2)){
                despuesTarea(elementoArrastrado, e.target);

            //Si la posición del ratón es inferior a la mitad de arriba del elemento se insertará antes
            } else if ( y < (elemento.offsetHeight/2)){
                antesTarea(elementoArrastrado, e.target);

            }
        }

    }, false);   
}