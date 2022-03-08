"use strict";

//Referencia a los elementos contenidos en body
let hijosBody = document.body.childNodes;

/*Función para recorrer el DOM en busca de la palabra "sexo",si la encuentra
la sustituye por "Contenido Bloqueado" */
function sustituirContenido(){
    for(let i =0; i< hijosBody.length; i++){
        
        //Cambio el contenido de los hijos por el deseado
        hijosBody[i].innerHTML = hijosBody[i].textContent.replaceAll('sexo','<i id="censura">Contenido Bloqueado</i>');
    }
}

sustituirContenido();