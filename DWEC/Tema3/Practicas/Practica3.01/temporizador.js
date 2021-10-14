"use strict";

function temporizador(min, seg) {    

    if(seg<=59 && seg >=0 && min >=0){
        var totalTime = ((min*60)+seg)*1000;
        var minutos = min;
        var segundos = seg;
        
        //Intervalo que calula y actualiza cada segundo el tiempo que ha pasado hasta que finalice el tiempo introducido
        var interval = setInterval(() => {
            console.log(`Quedan ${minutos}:${segundos} `);
            
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
            console.log("TIEMPO!!");
            clearInterval(interval);
        }, totalTime+1000);
    }else{
        console.log("EROR: Datos introducidos no válidos!")
    }
}
temporizador(0,3);