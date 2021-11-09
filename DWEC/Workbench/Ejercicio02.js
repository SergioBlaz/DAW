"use strict";

window.onload = () =>{
    
    var d = document;

    d.addEventListener("click", (e) => {
        if(e.target.name === "addP"){
            addP();
        }
    },false);

    //Función para crar un parrafo nuevo con las propiedades del select
    //y añadirlo al div con id="prrfs"
    function addP(){
        var textAdd = d.querySelector("#textA").value;
        var contenedorP= d.getElementById("prrfs");
        
        var tipo = d.getElementById("seleccion");
        var vacio = d.querySelectorAll(".vacio");

        //Si el elemento textArea está vacio, muestro un error, solo 1 vez
        if(textAdd === "" ){
            if(vacio.length<1){
                contenedorP.innerHTML += `<p class="vacio">No se a encontrado ningún texto a introducir.</p>`;
            }
       
        //Si el elemento textArea no está vacio, borra el posible mensaje de error y poseteriormente inserta el texto
        //con el tipo seleccionado en el atributo name
        }else{ 
            if(vacio.length>0){
                contenedorP.removeChild(vacio.item(0));
            }
            contenedorP.innerHTML += `<p class="${tipo.options[tipo.selectedIndex].value}">${textAdd}</p>`;
        }
       
    }
    
}