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
        if(pProf.constructor.name == "Profesorado"){  
            this.profesorado.push(pProf);
            return true;
        } else {
            return false;
        }
    }

    getProfesorado = function() {
        profesorado.forEach((value) => {
            profesorado.innerHTML+= `<td>${value.nombre}</td>`
        });
        return profesorado;
    }

}