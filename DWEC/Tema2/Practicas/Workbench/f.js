"use strict";

var alu = {
    nombre: "Angel",
    apellidos: "Martínez Arques",
    edad: 18,
    aficiones: ["Pesca", "Cría de berberechos"],
    notas: {
        primera: 8,
        segunda: 7,
        tercera: 10
    },
    impNombre: function(){return `El nombre en ${this.nombre} ${this.apellidos}`},
    impSaluda: (feo) => {return `¡Hola ${feo}!`}
};

function mostrarObjetos(pObjeto){
    for(var propiedad in pObjeto){
        if(){
            
        }
    }
}

mostrarObjetos(alu);