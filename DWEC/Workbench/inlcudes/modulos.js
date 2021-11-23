"use strict";

export class Modulos {
    constructor(pNom, pHoras){
        this.nombre = pNom;
        this.horas = pHoras;
        this.profesorado = new Array();
    }

    getNombre = function(){
        return this.nombre;
    }

    impartirModulo = function(pProf){
        //Comprobar prototype de profesorado    
        this.profesorado.push(pProf);
    
    }

    getProfesorado = function() {
        let profesorado = d.createElement("tr");
        
        profesorado.forEach((value) => {
            profesorado.innerHTML+= `<td>${value.nombre}</td>`
        });
        
        return profesorado;
    }

}