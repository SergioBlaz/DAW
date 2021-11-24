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

    elegirModulo = function (modulo) {
        if(modulo.constructor.name == "Modulos"){
            this.modulo.push(modulo);
            return true;
        } else {
            return false;
        }
    }

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

    mostrarDatosAlumno = function(){
        let datos = `<td>${this.dni}</td><td>${this.nombre}</td><td>${this.apellidos}</td><td>${this.fNacimiento}</td><td>${this.notaMedia}</td>`;
        return datos;
    }

    mostrarModulosAlumno = function(){
        let modulosAlumno ="";

        this.modulo.forEach((value) => {
            modulosAlumno += `${value.nombre} `;
        });

        return `<td>${modulosAlumno}</td>`;
         

    }
}

