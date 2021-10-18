"use strict";

//Función que crea un temporizador con los datos obtenidos y muestra la cuenta atrás
function temporizador(min, seg){

    if(seg<=59 && seg >=0 && min >=0){
        var totalTime = ((min*60)+seg)*1000;
        var minutos = min;
        var segundos = seg;
        
        //Intervalo que calula y actualiza cada segundo el tiempo que ha pasado hasta que finalice el tiempo introducido
        var interval = setInterval(() => {
            reemplazarTexto(`${minutos}:${segundos}`);

            if(segundos > 0){
                segundos -- ;
            } else if(segundos == 0 && minutos >=1 ){
                minutos--;
                segundos = 59;
            } else if(segundos == 0 && minutos == 0) {
                segundos = 59;
            }

        }, 1000);

        var timeout = setTimeout(() => {
            reemplazarTexto("TIMEOUT!!");
            clearInterval(interval);
        }, totalTime+1000);

    }else{
        reemplazarTexto("Error. Datos no válidos.")
    }
}

//Función para reemplazar texto con una id (elemento p)
function reemplazarTexto(contenido){
    var d = document;
    var pOld = d.querySelector('#rep');
    var pNew = d.createElement('p');
    pNew.setAttribute("id","new");
    pNew.innerHTML = contenido;
    pOld.parentNode.replaceChild(pNew,pOld);
    pNew.setAttribute("id","rep");
}