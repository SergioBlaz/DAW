"use strict";

function Curso(PnomCurso, Panyo, Pdesc){
    return{
        Nombre: PnomCurso,
        Anyo: Panyo,
        Descripcion: Pdesc,
        Alumnado:[],
        // Metodo para introducir estudiantes a través de un objeto Estudiante
        matricular: function(estudiantes){

            //Primero declaro una variable en blanco para concatenar el nombre y el apellido del estudiante,
            //después creo 2 bucles for in, el primero recorre las propiedades del objeto y el segundo los valores de este.
            let nombreCompleto="";
            for(var prop in estudiantes){
                for(var prop2 in estudiantes[prop]){

                    //Dentro de este segundo es donde concateno el nombre y el apellido y los asigno a la variable nombreCompleto
                    nombreCompleto += ` ${estudiantes[prop][prop2]}`;
                }

                //Por último asigno a la última posición de la array Alumnado esta variable y la vuelvo a dejar en blanco para
                //poder guardar otro estudiante en ella.
                this.Alumnado[this.Alumnado.length] = nombreCompleto;
                nombreCompleto="";
            }        
        }
    }
}
//Creo un constructor de objetos Estudiante con las propiedades indicadas
function Estudiante(pNombre, pApellidos){
    return{
        Nombre: pNombre,
        Apellidos: pApellidos,
    }
}
//Creo un array de objetos Estudiante
const listaEstudiantes = [
    new Estudiante("Sergio","Blazquez"),
    new Estudiante("Otro","Estudiante"),
    new Estudiante("Un último","Estudiante")
];

const Curso1 = new Curso("2DAW",2021,"Segundo Curso de Daw");

Curso1.matricular(listaEstudiantes);

console.log(Curso1.Alumnado);