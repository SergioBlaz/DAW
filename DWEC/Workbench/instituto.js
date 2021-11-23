"use strict";
import {Curso} from "./inlcudes/curso.js";
import {Alumnado} from "./inlcudes/alumnado.js";
import {Profesorado} from "./inlcudes/profesorado.js";
import {Modulos} from "./inlcudes/modulos.js";


window.onload = () => {
    //Profesores
    var prof1 = new Profesorado("Juan Carlos","Gomez",123456);
    var prof2 = new Profesorado("Fernando","Iñigo", 654321);
    var prof3 = new Profesorado("Rosa","Aravid",98765);

    //Módulos
    var dwec = new Modulos("Desarrollo Web Entorno Cliente",7);
    var dwes = new Modulos("Desarrollo Web Entorno Servidor",8);
    var diw = new Modulos("Desarrollo de Interfaces Web", 6);

    //Asignar los profesores a los módulos.
    dwec.impartirModulo(prof1);
    dwes.impartirModulo(prof2);
    diw.impartirModulo(prof3);
    
    var modulosDaw = [dwec,dwes, diw];

    //Curso
    var daw = new Curso("Desarrollo Aplicaciones Web",3,modulosDaw);
    
    //Alumnos
    var alu1 = new Alumnado(123,"Alu1","ALU1","2000/04/11",5);
    var alu2 = new Alumnado(123,"Alu2","ALU2","2000/03/11",4);
    
    //Al alumno se le asignan los módulos que va a cursar.
    alu1.elegirModulo(dwec);
    alu1.elegirModulo(dwes);
    alu1.elegirModulo(diw);
    alu2.elegirModulo(dwec);

    //Se le asigna al curso los Alumnos se han matriculado.
    daw.matricular(alu1);
    daw.matricular(alu2);

    
    //Mostrar informe del curso
    var tablaInforme = document.querySelector("table");
    tablaInforme.innerHTML += daw.mostrarAlumnado();
    
    console.log(daw.getNotaMediaCurso());
}