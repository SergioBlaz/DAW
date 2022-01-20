import {app} from "./includes/conexionFirebase.js";
import {getFirestore,collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {filtrarProductos, mostrarProductos, ordenarProductos} from "./includes/manejarDatos.js";

window.onload = () => {
    const d = document;
    const coleccion = collection(getFirestore(app),"productos");

    //Mostrar todos los productos(Se imprime por pantalla [object Promise] pero no se donde sale).
    d.querySelector("#todo").addEventListener("click", ()=>{
        d.querySelector("#lista").innerHTML = "";
        d.querySelector("#lista").innerHTML = mostrarProductos(coleccion);
    },false)

    // Mostrar todos los productos ordenados según la selección
    d.querySelector("#ordenar").addEventListener("click", ()=>{
        d.querySelector("#lista").innerHTML = "";
        d.querySelector("#lista").innerHTML = ordenarProductos(coleccion,d.querySelector("#orden").value);
    },false)

    // Mostrar todos los productos filtrados según la selección y el texto.
    d.querySelector("#filtrar").addEventListener("click", ()=>{
        d.querySelector("#lista").innerHTML = "";
        d.querySelector("#lista").innerHTML = filtrarProductos(coleccion, d.querySelector("#filtros").value,d.querySelector("#textoFiltrar").value);
    },false)
}