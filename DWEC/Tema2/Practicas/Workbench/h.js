"use strict";

function Curso(PnomCurso, Panyo, Pdesc, Palumnado){
    return{
        Nombre: PnomCurso,
        Anyo: Panyo,
        Descripcion: Pdesc,
        Alumnado: Palumnado,
    }
}
const Curso1 = new Curso("2DAW",2021,"Segundo Curso de Daw",["Sergio","Manuel","Antonio","Pedro"]);

function estudiante(nombre, apellido)

Curso1.matricular = function (estudiantes) {
    this.Alumnado = estudiantes.nombre + " " +estudiantes.apellidos;
}