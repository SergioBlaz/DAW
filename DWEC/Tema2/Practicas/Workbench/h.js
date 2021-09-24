"use strict";

function Curso(PnomCurso, Panyo, Pdesc){
    return{
        Nombre: PnomCurso,
        Anyo: Panyo,
        Descripcion: Pdesc,
        Alumnado:[],
        //Revisar metodo matricular!!
        matricular: function(estudiantes){
            for(var prop in estudiantes){
                for(var prop2 in estudiantes[prop]){
                    this.Alumnado[this.Alumnado.length] = `${estudiantes[prop][prop2]}`;
                }
            }        
        }
    }
}

function Estudiante(pNombre, pApellidos){
    return{
        Nombre: pNombre,
        Apellidos: pApellidos,
    }
}

const listaEstudiantes = [
    new Estudiante("Primer","Estudiante"),
    new Estudiante("Segundo","Estudiante")
];

const Curso1 = new Curso("2DAW",2021,"Segundo Curso de Daw");

Curso1.matricular(listaEstudiantes);

console.log(Curso1.Alumnado);