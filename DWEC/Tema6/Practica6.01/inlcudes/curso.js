"use strict";

export class Curso {
    constructor(pNom, pAul, pMod){
        this.nombre = pNom;
        this.aula = pAul;
        this.modulos = pMod;
        this.alumnado = new Array();
    }
    //Función para guardar un objeto de la clase alumno en el curso.
    matricular = function (alu) {
        if(alu.constructor.name == "Alumnado"){
            this.alumnado.push(alu);
        }
    }
    //Función para mostrar los profesores que imparten cada modulo.
    getProfesoradoModulos = function(){
        let filaModulos="";
        modulos.forEach((value) => {
            filaModulos.innerHTML += `<tr>${value.getProfesorado()}</tr>`;
        })
        
        return modulos;
    }

    //Función para obtener la nota media del curso a partir de las notas medias de los alumnos.
    getNotaMediaCurso = function() {
        let notaMedia = 0;
        for(let i=0; i<this.alumnado.length; i++){
            notaMedia += this.alumnado[i].getNotaMedia();
        }
        return notaMedia = notaMedia/this.alumnado.length;
    }
    //Función para mostrar los datos de los alumnos matriculados en el curso.
    mostrarAlumnado = function() {
        let filaAlumnos = "";
        this.alumnado.forEach((value) => {
            filaAlumnos += `<tr>${value.mostrarDatosAlumno()}</tr>`;
        });
        
        return filaAlumnos;
    }
}
