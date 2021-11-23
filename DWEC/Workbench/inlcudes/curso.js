"use strict";


export class Curso {
    constructor(pNom, pAul, pMod){
        this.nombre = pNom;
        this.aula = pAul;
        //Modulos es un array de todos los módulos
        this.modulos = pMod;

        this.alumnado = new Array();
    }

    matricular = function (alu) {
        //Comprobar prototype alu.
        this.alumnado.push(alu);

    }

    getModulos = function(){
        let modulos = document.createElement("tr");
        
        modulos.forEach((value) => {
            modulos.innerHTML += `<td>${value.getProfesorado()}</td>`;
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

    mostrarInforme = function(){
        mostrarAlumnado();
        
    }
}
