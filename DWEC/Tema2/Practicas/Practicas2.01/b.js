"use strict";
//Declaracion variables
var puntosJuan = [89,120,103];
var puntosMiguel = [97,134,105];
var puntosMaria = [97,134,105];

//Funcion para calcular medias
function Calcularmedia(puntos){
    var media=0;
    for( var i=0;i<puntos.length;i++){
        media = media + puntos[i];
    }
    media = media/3;
    return media;
}

//Funcion de comparación para ordenar
function comparar(a, b) {
    return a.value - b.value;
}

//Creacion de un array con el nombre del equipo y de la puntuación media calculada con la funcion Calcularmedia
var mediasOrdenadas = [
    {name: 'Miguel', value: Calcularmedia(puntosMiguel)},
    {name: 'Maria', value: Calcularmedia(puntosMaria)},
    {name: 'Juan', value: Calcularmedia(puntosJuan)}
];

//Ordenado de la array por comparacion con la funcion comparar
mediasOrdenadas.sort(comparar);

//Filtrado de valores para saber cual a sido el valor más alto o si a habido un empate
if(mediasOrdenadas[2].value>mediasOrdenadas[1].value){
    console.log("El equipo de "+mediasOrdenadas[2].name+" ha ganado con una puntuación media de "+mediasOrdenadas[2].value);
} else if(mediasOrdenadas[2].value==mediasOrdenadas[1].value){
    console.log("Los equipos de "+mediasOrdenadas[2].name+" y "+mediasOrdenadas[1].name+" han empatado.");
} else {
    console.log("Un error inesperado a ocurrido.");
}