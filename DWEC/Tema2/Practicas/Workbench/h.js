"use strict";

function Curso(PnomCurso, Panyo, Pdesc){
    return{
        Nombre: PnomCurso,
        Anyo: Panyo,
        Descripcion: Pdesc,
        Alumnado: [],
        matricular: function (estudiantes){
            for(var prop in estudiantes){
                for(var prop2 in estudiantes[prop]){
                    this.Alumnado[this.Alumnado.length] = `${estudiantes[prop][prop2]}`;
                }
            }
        }
    }
}

function Estudiante(Pnombre, Papellido){
    return{
        Nombre: Pnombre,
        Apellido: Papellido
    }
}

const Curso1 = new Curso("2DAW",2021,"Segundo Curso de Daw");

const listaEstudiantes = [
    new Estudiante ("Un","Alumno"),
    new Estudiante ("Dos","Alumno")
]

Curso1.matricular(listaEstudiantes);