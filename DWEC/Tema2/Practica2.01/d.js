"use strict";
//Revisar funcion
function CalcularPrecio(nombre, precio, impuesto){

    if(!nombre){
        nombre="Producto genérico";
    }
    if(!precio){
        precio=100;
    }
    if(!impuesto){
        impuesto=21;
    }
    if(impuesto>100 || impuesto<0){
        console.log("A ocurrido un error inesperado en el valor de impuesto");
    } else {
    precio+= (impuesto/100) * (precio);
    console.log("El producto "+nombre+" tiene un valor de "+precio);
    }
}
CalcularPrecio();