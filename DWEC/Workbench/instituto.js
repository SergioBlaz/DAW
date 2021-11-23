"use strict";
import {Curso} from "./inlcudes/curso.js";
import {Alumnado} from "./inlcudes/alumnado.js";
import {Profesorado} from "./inlcudes/profesorado.js";
import {Modulos} from "./inlcudes/modulos.js";


window.onload = () => {
    //Profesores
    var prof1 = new Profesorado("Juan Carlos","Gomez","12345678-B");
    var prof2 = new Profesorado("Fernando","Iñigo", "87654321-A");
    var prof3 = new Profesorado("María Rosa","Aravid","56123478-C");
    var prof4 = new Profesorado("Mercedes","Ramos","12873465-D");
    var prof5 = new Profesorado("Silvia","Amorós","46723158-E");

    //Módulos
    var dwec = new Modulos("Desarrollo Web Entorno Cliente",7);
    var dwes = new Modulos("Desarrollo Web Entorno Servidor",8);
    var diw = new Modulos("Desarrollo de Interfaces Web", 6);
    var ing = new Modulos("Inglés Técnico",2);
    var daw = new Modulos("Despliegue de Aplicaciones Web",6);

    //Asignar los profesores a los módulos.
    dwec.impartirModulo(prof1);
    dwes.impartirModulo(prof2);
    diw.impartirModulo(prof3);
    ing.impartirModulo(prof4);
    daw.impartirModulo(prof5);
    
    var modulosDaw2 = [dwec,dwes,diw,daw,ing];

    //Curso
    var daw2 = new Curso("Desarrollo Aplicaciones Web",3,modulosDaw2);
    
    //Alumnos
    var alu1 = new Alumnado("20526929-G","Sergio","Blazquez","2000/04/11",5);
    var alu2 = new Alumnado("1234568-A","Pepe","Viyuela","2015/03/11",4);
    
    //Al alumno se le asignan los módulos que va a cursar.
    alu1.elegirModulo(dwec);
    alu1.elegirModulo(dwes);
    alu1.elegirModulo(diw);
    alu1.elegirModulo(ing);
    alu1.elegirModulo(daw);
    alu2.elegirModulo(dwec);
    alu2.elegirModulo(ing);

    //Se le asigna al curso los Alumnos se han matriculado.
    daw2.matricular(alu1);
    daw2.matricular(alu2);

    
    //TESTS
    var informeAlumnos= document.querySelector(".informeAlumnos");
    informeAlumnos.innerHTML += daw2.mostrarAlumnado();    

    var notaMedia = document.querySelector(".notaMedia");
    notaMedia.innerHTML = `<tr><td>${daw2.getNotaMediaCurso()}</td></tr>`;
    
}