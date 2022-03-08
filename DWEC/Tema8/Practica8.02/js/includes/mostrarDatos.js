"use strict";

//Función para mostrar los datos de un producto
export const datosCompletos = (prod) => {
    return `<img src=${prod.data().imagen} height=70 width=70> ${prod.data().nombre} - ${prod.data().peso}Kg - ${prod.data().precio}€ - ${prod.data().descripcion}`;
}
