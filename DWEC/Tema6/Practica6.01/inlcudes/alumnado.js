"use strict";

export class Alumnado {
    //Formato de fecha = "yyyy/mm/dd";
    constructor(pDni, pNombre, pApellidos, pFnacimiento, pNotaMedia){
        this.dni = pDni;
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.fNacimiento = pFnacimiento;
        this.notaMedia = pNotaMedia;
        this.modulo = new Array();

    }

    setNotaMedia = function (n) {
        this.notaMedia = n;
    }
    getNotaMedia = function() {
        return this.notaMedia;
    }

    //Función para añadir un modulo al alumno.
    elegirModulo = function (modulo) {
        if(modulo.constructor.name == "Modulos"){
            this.modulo.push(modulo);
            return true;
        } else {
            return false;
        }
    }

    //Función para determinar, a partir de la fecha de nacimiento del alumno, si es mayor de edad.
    esMayor = function(){
        let hoy = new Date();
        let cumpleanos = new Date(this.fNacimiento);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
        if(edad >= 18 ){
            return true;
        }else {
            return false;
        }
    }

    //Función que devuleve los valores de los atributos del objeto de la clase alumno.
    mostrarDatosAlumno = function(){
        let datos = `<td>${this.dni}</td><td>${this.nombre}</td><td>${this.apellidos}</td><td>${this.fNacimiento}</td><td>${this.notaMedia}</td>`;
        return datos;
    }

    //Función que muestra los modulos que cada alumno a seleccionado.
    mostrarModulosAlumno = function(){
        let modulosAlumno ="";

        this.modulo.forEach((value) => {
            modulosAlumno += `${value.nombre} `;
        });

        return `<td>${modulosAlumno}</td>`;
         

    }
}

