"use strict";

export class Curso {
    constructor(pNom, pAul, pMod){
        this.nombre = pNom;
        this.aula = pAul;
        this.modulos = pMod;
        this.alumnado = new Array();
    }

    matricular = function (alu) {
        if(alu.constructor.name == "Alumnado"){
            this.alumnado.push(alu);
        }
    }

    getProfesoradoModulos = function(){
        let filaModulos="";
        modulos.forEach((value) => {
            filaModulos.innerHTML += `<tr>${value.getProfesorado()}</tr>`;
        })
        
        return modulos;
    }

    getNotaMediaCurso = function() {
        let notaMedia = 0;
        for(let i=0; i<this.alumnado.length; i++){
            notaMedia += this.alumnado[i].getNotaMedia();
        }
        return notaMedia = notaMedia/this.alumnado.length;
    }

    mostrarAlumnado = function() {
        let filaAlumnos = "";
        this.alumnado.forEach((value) => {
            filaAlumnos += `<tr>${value.mostrarDatosAlumno()}</tr>`;
        });
        
        return filaAlumnos;
    }
}
