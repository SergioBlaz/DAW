"use strict";

window.onload = () => {
let d = document;

let cTareas = 0; 
    
    //Evento para añadir funcionalidad a los botones estáticos y los que se generan de forma dinámica.
    d.addEventListener("click", (e) => {
        if (e.target.id == 'add'){
            addTarea();
            
        }else if ( e.target.id == 'sho'){
            showTareas();

        } else if ( e.target.value == 'Borrar'){
            delTarea(e.target.name);

        } else if ( e.target.value == 'Acabar'){
            endTarea(e.target.name);

        } else if ( e.target.value == 'Volver'){
            backTarea(e.target.name);

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
            endTarea(elementoArrastrado.id);

        } else if(e.target.id == "pendientes") {
            backTarea(elementoArrastrado.id);

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

    //Función para insertar un elemento antes que otro.
    function antesTarea(elemento, e){
        elemento.parentNode.insertBefore(elemento, e);
        
    }
    //Función para insertar un elemento después de otro.
    function despuesTarea(elemento, e){
        elemento.parentNode.insertBefore(elemento, e.nextSibling);
    }

    //Función para añadir tareas nuevas a la lista de pendientes.
    function addTarea(){

        //Seleccion del texto a implementar
        var textoImplementar = d.querySelector('textarea').value ;

        //Creación de los elementos que contiene la tarea.
        var pendientes = d.getElementById('pendientes');
        var contenedorTarea  = d.createElement('div');
        contenedorTarea.setAttribute("class","tarea");
        contenedorTarea.setAttribute("id",`tarea${cTareas}`);
        contenedorTarea.setAttribute("draggable", true);
        var textoTarea = d.createElement('p');
        var botonesTarea = d.createElement('p');
        botonesTarea.setAttribute("class","botones");
        
        //Creación del botón Acabar.
        var botonAcabar = d.createElement('input');
        botonAcabar.setAttribute("type","button");
        botonAcabar.setAttribute("value","Acabar");
        botonAcabar.setAttribute("class","end");
        botonAcabar.setAttribute("name",`tarea${cTareas}`);

        //Creación del botón Borrar.
        var botonBorrar = d.createElement('input');
        botonBorrar.setAttribute("type","button");
        botonBorrar.setAttribute("value","Borrar");
        botonBorrar.setAttribute("class","del");
        botonBorrar.setAttribute("name",`tarea${cTareas}`);

        //Añadir e implementar el texto y los botones al contenedor de Pendientes.
        textoTarea.innerHTML = textoImplementar;
        botonesTarea.appendChild(botonAcabar);
        botonesTarea.appendChild(botonBorrar);
        contenedorTarea.appendChild(textoTarea);
        contenedorTarea.appendChild(botonesTarea);
        pendientes.appendChild(contenedorTarea);
        cTareas++;
    }

    //Función para borrar una tarea de la lista de pendientes.
    function delTarea(idDel){
        pendientes.removeChild(d.getElementById(idDel));
    }
    
    //Función para añadir a la lista Acabadas las tareas en Pendientes.
    function endTarea(idEnd){

        d.getElementById('acabadas').appendChild(d.getElementById(idEnd));
        d.getElementById(idEnd).setAttribute("class","acabada");
        var botonesEnd = d.getElementById(idEnd).lastChild.childNodes;
        botonesEnd[0].setAttribute("value",'Archivar');
        botonesEnd[1].setAttribute("value",'Volver');

    }

    //Función para archivar(ocultar) una tarea de la lista de acabadas.
    function saveTarea(idSave){
        d.getElementById(idSave).setAttribute("class","acabadaOculta");
    }

    //Función para volver a poner una tarea en la lista de pendientes.
    function backTarea(idBack){
        pendientes.appendChild(d.getElementById(idBack));
        d.getElementById(idBack).setAttribute("class","tarea");
        var botonesEnd = d.getElementById(idBack).lastChild.childNodes;
        botonesEnd[0].setAttribute("value",'Acabar');
        botonesEnd[1].setAttribute("value",'Borrar');
    }

    //Función para mostrar las tareas finalizadas y ocultas.
    function showTareas(){
        var ocultas = d.getElementsByClassName("acabadaOculta");
        //El bucle tiene que ser desde el final para poder recorrer todos los elementos.
        for(let i=ocultas.length-1 ; i >= 0; i--){
            ocultas.item(i).setAttribute("class","acabada");
        }
    }
}