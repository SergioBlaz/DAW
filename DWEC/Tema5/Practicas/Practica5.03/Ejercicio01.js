"use strict";

window.onload = () =>{
    var d = document;

    var n = 0;

    //Evento para marcar o desmarcar los checkbox
    d.addEventListener("click", (e) => {
        if(e.target.name === "check"){
            marcarTodos();
        } else if(e.target.name === "uncheck"){
            desmarcarTodos();
        }
    })

    //Función para crear 100 elementos dentro de un contendor.
    function crearElementos(){
        
        //Creo el contenedor de los elementos y lo añado al body.  
        var contenedor = d.createElement("div");
        contenedor.setAttribute("id","contenedor");
        d.body.appendChild(contenedor);
       
        //Bucle para crear todos los elementos (100) y darle las propiedades necesarias
        for(let i = 0; i<=99; i++){
            
            //Elemento checkbox
            contenedor.innerHTML += `<input type="checkbox" id="cbox${n}" name="numeroR" value=${rndNumber()}>`;
            
            //Elemento etiqueta
            contenedor.innerHTML +=`<label for="cbox${n}"> ${d.getElementById(`cbox${n}`).value}</label><br>`;

            n++;
        }
        
        //Botones para marcar y desmarcar
        contenedor.innerHTML += `<input type="button" value="Marcar Todos" name="check">`;
        contenedor.innerHTML += `<input type="button" value="Desmarcar Todos" name="uncheck">`;
        
    }
    crearElementos();

    //Función para generar numeros aleatorios.
    function rndNumber(){
        return Math.floor(Math.random() * 1000);
    }

    //Función para marcar todos los checkbox.
    function marcarTodos(){
        let check = d.getElementsByName("numeroR");
        for(let i =0; i<check.length; i++){
            check[i].checked = true;
        }
    }

    //Función para desmarcar todos los checkbox.
    function desmarcarTodos(){
        let check = d.getElementsByName("numeroR");
        for(let i =0; i<check.length; i++){
            check[i].checked = false;
        }
    }
}