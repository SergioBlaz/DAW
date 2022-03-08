"use strict";

var vector1 = [];
var vector2 = [];
var vector3 = [];

function generar(){
    for(let i=0; i<100; i++){
        vector1[i] = Math.floor(Math.random()*101);
        vector2[i] = Math.floor(Math.random()*101);
    }
}

function sumar(){
    for(let i=0, j=99 ; i<vector1.length ; i++, j--){
        vector3[i] = vector1[i]+vector2[j];
    }
}

function imprimir(){
    console.log(`Vector1: [${vector1}]`);
    console.log(`Vector2: [${vector2}]`);
    console.log(`Vector3: [${vector3}]`);
}

function calcular(fun1, fun2, fun3){

}

calcular(generar(),sumar(),imprimir());