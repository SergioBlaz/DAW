"use strict";

export class Modulos {
    constructor(pNom, pHoras){
        this.nombre = pNom;
        this.horas = pHoras;
        this.profesorado = new Array();
    }

    //Función para devolver el nombre del modulo.
    getNombre = function(){
        return `<td>${this.nombre}</td>`;
    }
    //Función para asignar a cada modulo uno o varios profesores, que son los que imparten dicho modulo.
    impartirModulo = function(pProf){
        if(pProf.constructor.name == "Profesorado"){  
            this.profesorado.push(pProf);
            return true;
        } else {
            return false;
        }
    }
    //Función para devolver los datos del profesorado que imparte un módulo.
    getProfesorado = function() {
        profesorado.forEach((value) => {
            profesorado.innerHTML+= `<td>${value.dni}</td><td>${value.nombre}</td><td>${value.apellido}</td>`
        });
        return profesorado;
    }

}