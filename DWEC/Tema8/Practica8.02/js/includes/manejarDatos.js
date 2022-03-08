"use strict"

import { datosCompletos } from "./mostrarDatos.js";
import { getDocs, query, where, orderBy, addDoc } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//Función para mostrar todos los productos disponibles.
export const mostrarProductos = async (coleccion) => {
    var coleccionCompleta = await getDocs(coleccion);
    coleccionCompleta.docs.map((e) => {
       lista.innerHTML += `<li>${datosCompletos(e)}</li>`;
    });
    return lista;
}

//Función para ordenar los productos de manera ascendente.
export const ordenarProductos = async (coleccion, campo) => {
    const consulta = query(coleccion,
        orderBy(campo,"asc")
    );
    var productosOrdenados = await getDocs(consulta);
    productosOrdenados.docs.map((e) => {
       lista.innerHTML += `<li>${datosCompletos(e)}</li>`;
    });
    return lista;
}

//Función para filtrar los productos dependiendo del tipo de filtro (El tipo nombre debe ser exactamente igual).
export const filtrarProductos = async (coleccion, filtro, txtFiltrar) => {
    if(txtFiltrar != "" ){
        if(filtro == "precio"){
            const consulta = query(coleccion,
                where(filtro, "<=", txtFiltrar)
            );
        var coleccionFiltrada = await getDocs(consulta);
        } else if (filtro == "peso"){
            const consulta = query(coleccion,
                where(filtro, "<=", Number(txtFiltrar))
            );
        var coleccionFiltrada = await getDocs(consulta);
        } else if (filtro== "nombre"){
            const consulta = query(coleccion,
                where(filtro, "==", txtFiltrar)
            );
        var coleccionFiltrada = await getDocs(consulta);
        }
        coleccionFiltrada.docs.map((e) => {
            lista.innerHTML += `<li>${datosCompletos(e)}</li>`;
        })
        console.log(lista);
        return lista;
    }else{
        return `<p>Error al aplicar el filtro</p>`  
    }
}

//----Practica 8.03-----//
//Función para crear una nueva lista de la compra.
export const crearLista = (nLista, nPropietario, nArticulos) => {
    const tTranscurrido = Date.now();
    const hoy = new Date(tTranscurrido);
    
    const lista = {
        lista: nLista,
        propietario: nPropietario,
        listado: nArticulos,
        fecha: hoy.toUTCString()
    }

    return lista;
}

//Función para guardar una lista creada en la colección de listas.
export const guardarLista = async (coleccion, lista) => {
    const listaGuardada = await addDoc(coleccion, lista);
    console.log(`Lista con nombre ${listaGuardada.data().lista}a sido guardada.`);
}