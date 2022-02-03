import {app} from "./includes/conexionFirebase.js"
import {getFirestore,collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {crearLista, filtrarProductos, guardarLista, mostrarlistas, mostrarProductos, ordenarProductos} from "./includes/manejarDatos.js"
import {botonAnadir, botonCrear, formularioCrear, mostrarArticulosListas} from "./includes/mostrarDatos.js"

window.onload = () => {
    const d = document
    const coleccion = collection(getFirestore(app),"productos")
    const listas = collection(getFirestore(app),"listas")

    //Mostrar todos los productos(Se imprime por pantalla [object Promise] pero no se donde sale).
    d.querySelector("#todo").addEventListener("click", ()=>{
        botonAnadir(false)
        botonCrear(false)
        formularioCrear(false)
        d.querySelector("#lista").innerHTML = ""
        d.querySelector("#lista").innerHTML = mostrarProductos(coleccion)
    },false)

    // Mostrar todos los productos ordenados según la selección
    d.querySelector("#ordenar").addEventListener("click", ()=>{
        botonAnadir(false)
        botonCrear(false)
        formularioCrear(false)
        d.querySelector("#lista").innerHTML = ""
        d.querySelector("#lista").innerHTML = ordenarProductos(coleccion,d.querySelector("#orden").value)
    },false)

    // Mostrar todos los productos filtrados según la selección y el texto.
    d.querySelector("#filtrar").addEventListener("click", ()=>{
        botonAnadir(false)
        botonCrear(false)
        formularioCrear(false)
        d.querySelector("#lista").innerHTML = ""
        d.querySelector("#lista").innerHTML = filtrarProductos(coleccion, d.querySelector("#filtros").value,d.querySelector("#textoFiltrar").value)
    },false)

    //Mostrar las listas creadas
    d.querySelector("#mostrarListas").addEventListener("click", () => {
        document.querySelector("#lista").innerHTML = ""
        d.querySelector("#lista").innerHTML = mostrarlistas(listas)
        botonCrear(true)
        botonAnadir(true)
        formularioCrear(false)
    },false) 

    //Crear nuevas listas y guardarlas 
    d.querySelector("#crear").addEventListener("click", ()=>{        
        formularioCrear(true)
        d.querySelector("#confirmarCrear").addEventListener("click", () => {
            //Se guarda la lista con los datos introducidos
            var nombre = d.querySelector("#nombreLista").value
            var propietario = d.querySelector("#propietarioLista").value
            if( nombre != "" &&  propietario!= "") guardarLista(listas, crearLista(nombre, propietario))
            d.querySelector("#nombreLista").value = ""
            d.querySelector("#propietarioLista").value = ""
            formularioCrear(false)
        },false)

    },false)

    //Añadir productos a las listas creadas, primero se debe seleccionar una lista, después te redirige al apartado de productos para añadirlos a la lista
    //(Añadir boton de confirmar)
    d.querySelector("#anadirProducto").addEventListener("click", ()=>{
        d.querySelector("#lista").addEventListener("click",()=>{
            //Deshabilitar tras el click?
            botonCrear(false)
            botonAnadir(false)
            d.querySelector("#lista").innerHTML = ""
            d.querySelector("#lista").innerHTML = mostrarProductos(coleccion)
            console.log(e.target.id)// contiene el id de la lista
        },false)
        d.querySelector("#lista").removeEventListener("click",()=>{},false)
    },false)
    
    d.querySelector("#lista").addEventListener("click",(e)=>{
        console.log(e.target)
        mostrarArticulosListas(e.target.childNodes)
    })

}