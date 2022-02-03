"use strict"

import { datosCompletos, datosListas } from "./mostrarDatos.js";
import { getDocs, query, where, orderBy, addDoc, onSnapshot, updateDoc,arrayUnion } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

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
    }
}

//----Practica 8.03-----//
//Función para crear una nueva lista de la compra.
export const crearLista = (nLista, nPropietario) => {
    const tTranscurrido = Date.now();
    const hoy = new Date(tTranscurrido);
    const lista = {
        nombre: nLista,
        propietario: nPropietario,
        fecha: hoy.toLocaleDateString(),
        articulos:[]
    }
    return lista
}

//Función para guardar una lista creada en la colección de listas.
export const guardarLista = async (coleccion, lista) => {
    const listaGuardada = await addDoc(coleccion, lista)
}

//Función para listar las listas creadas.
export const mostrarlistas = async (coleccion) => {
    const coleccionListas = await onSnapshot(coleccion, (e) => {
        document.querySelector("#lista").innerHTML = ""
        e.forEach((doc) => {
           lista.innerHTML += `<li id=${doc.id}>${datosListas(doc)}</li>`
       })
       
    })
    return lista
}



//Función de añadir productos a una lista de la compra
export const anadirProductoLista = async (coleccion, id, nombre, precio, peso) => {
    const listaRef = await doc(coleccion, id)
    await updateDoc(listaRef,{
        articulos: arrayUnion(
            map['nombre']=nombre,
            map['peso']=peso,
            map['precio']=precio
        )
    })
}