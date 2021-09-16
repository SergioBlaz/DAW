"use strict";

var valorFacturas = [124,48,268];
var valorPropinas = [];
var cantidadPagar = [];

function Calcularpropinas (facturas){
    console.log("Las cantidades a pagar serán: "+cantidadPagar);

    for(let i=0; i<valorFacturas.length; i++){

        if(facturas[i]<50){
            valorPropinas[i]=20;

        } else if(facturas[i]>50 && facturas[i]<200){
            valorPropinas[i]=15;

        } else {
            valorPropinas[i]=10;

        }
    
        
    cantidadPagar[i]= valorFacturas[i] + ((valorPropinas[i]/100)*valorFacturas[i]);
    console.log("Factura: "+valorFacturas[i]+"€ - Porcentaje aplicado: "+valorPropinas[i]+"% - Total: "+cantidadPagar[i]+"€");    
    }

    
}

Calcularpropinas(valorFacturas);