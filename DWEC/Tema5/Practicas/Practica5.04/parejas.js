"use strict";

window.onload = () => {
    asignarReverso();
    crono();

    //Evento para cambiar llamar a la función mostrar dorso.
    document.addEventListener("click", (e) => {
        document.getElementById("mensaje").innerHTML = "";

        //Comprobar que al hacer clic lo está haciento encima de un elemento img.    
        if(e.target){ 
            document.getElementById("mensaje").innerHTML = "<p>No estás clicando en una carta</p>";
        }

        //Comprobaciones de elementos seleccionados, y asignacion de atributo src 
        if(document.getElementsByClassName("selected").length < 2){

            if(e.target.alt == "Reverso"){
                
            }else if (e.target.alt == "Dorso"){

            } else {
                
            }

            }
        
    },false);


    //Función para asignar el reverso de las cartas.
    function asignarReverso(){
        for(let i =0; i<document.getElementsByClassName("table-cell").length; i++){
            document.getElementsByClassName("table-cell").item(i).innerHTML = `<img src=img/Reverso.jpg alt=Reverso>`;
        }
    }

    /*  
    //Función para iniciar el cronometro
    function crono(){
        var s = 0;
        var m = 0;

        //Temporizador del tiempo de juego.
        cronometro = setInterval(() => {

            document.getElementById("cronometro").innerHTML = `<p>${m}:${s}</p>`;
            s++;
            if(s>59){
                s=0;
                m++;
            }

        },1000);
    } 
    */
}