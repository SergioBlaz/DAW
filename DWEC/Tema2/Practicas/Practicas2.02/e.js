"use strict";

function constructor(PnomCurso, Panyo, Pdesc, Palumnado){
    return{
        Nombre: PnomCurso,
        Anyo: Panyo,
        Descripcion: Pdesc,
        Alumnado: Palumnado,
    }
}

const curso = constructor("2DAW",2021,"Segundo Curso de Daw",["Sergio","Manuel","Antonio","Pedro"]);


function mostrarCurso(Pcurso){
    console.log(`Informe del Curso.`);
    for(var propiedad in Pcurso){
        console.log(`${propiedad} : ${Pcurso[propiedad]}`);
    }
}
mostrarCurso(curso);