"use strict";

var alumnado = {
    id:1,
    nombre:"Sergio",
    apellido1:"Blázquez",
    apellido2:"Carrasco",
    aficiones:["Jugar a videojuegos","Beber cerveza"],
    notas: {
        primera: 6,
        segunda: 7,
        tercera: 8
    },
    calcularMedia: function(){
       return (this.notas.primera + this.notas.segunda + this.notas.tercera) / 3; 
    },
    impAficiones : function(){
        console.log(`Aficiones : ${this.aficiones}`);
    },
    impInforme: function(alum){
        console.log("Informe completo del alumno.");
        for(var prop in alum){
            if (typeof alum[prop] === "string" || typeof alum[prop]=== "number"){
                console.log(`${prop} : ${alum[prop]}`);
            } else if (typeof alum[prop] === "function"){
                console.log(`${prop} es una función.`);
            }else if (Array.isArray(alum[prop])){
                console.log(`${prop} : ${alum[prop]}`)
            }
            else if (typeof alum[prop] === "object"){
                for (var prop2 in alum[prop]){
                    console.log(`La propiedad ${prop} contiene ${prop2} con el valor ${alum[prop][prop2]}`);
                }
            }
            
        }
    }
}
var media = alumnado.calcularMedia();
console.log(media);
alumnado.impAficiones();
alumnado.impInforme(alumnado);