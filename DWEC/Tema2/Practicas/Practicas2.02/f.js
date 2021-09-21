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
    impNombre: function(){return `El nombre es ${this.nombre} ${this.apellidos}`},
    impSaluda: (feo) => {return `¡Hola ${feo}!`}
};

function mostrarObjetos(pObjeto){
    for(var propiedad in pObjeto){
        if(typeof pObjeto[propiedad] === "function"){
            
            console.log(`La propieda ${propiedad} es una función.`);

        }else if(Array.isArray(pObjeto[propiedad])){
            
            console.log(`La propiedad ${propiedad} es un array y su contenido es [${pObjeto[propiedad]}]`);
            
        } else if(typeof pObjeto[propiedad]=== "object"){
            for(var propiedad2 in pObjeto[propiedad]){
                console.log(`La propiedad ${propiedad} es un objeto y tiene la propiedad ${propiedad2}, su contenido es ${pObjeto[propiedad][propiedad2]}`)
            }

        } else if(typeof pObjeto[propiedad] === "string"){

            console.log(`La propiedad ${propiedad} es un string y tiene el valor ${pObjeto[propiedad]}`);

        } else if(typeof pObjeto[propiedad] === "number"){
            
            console.log(`La propiedad ${propiedad} es un número y tiene el valor ${pObjeto[propiedad]}`);

        }
    }
}

mostrarObjetos(alu);