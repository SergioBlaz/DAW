"use strict";

function CalcularPrecio(nombre, precio, impuesto){
    
    nombre = typeof nombre !== 'undefined' ? nombre : 'Producto genérico';
    precio = typeof precio !== 'undefined' ? precio : 100;
    impuesto = typeof impuesto !== 'undefined' ? impuesto : 21;

    if(impuesto>100 || impuesto<1 || isNaN(impuesto) || isNaN(precio)){
        console.log("A ocurrido un error inesperado.")
    } else {
        precio = precio + ((impuesto/100)*precio);
        console.log("El producto "+nombre+" tiene un valor de "+precio+" €");
    }

}
CalcularPrecio("Patatas",14,21);