"use strict";

function fecha(){
    var dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sábado","Domingo"];
    var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Sptiembre","Octubre","Noviembre","Diciembre"];
    
    //Intervalo que muestra la fecha cada 5 segundos seleccionando de las arrays dias y meses para que estén debidamente formateados.
    var intervalo = setInterval( ()=> {
        var fecha = new Date();

        var mensaje = `Hoy es ${dias[fecha.getDay()]} ${fecha.getDate()} de ${meses[fecha.getMonth()]} 
        de ${fecha.getFullYear()} y son las ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}.
        ¡Espero que pase un buen día!`;

        console.log(mensaje);
        
    },5000)
}

fecha();