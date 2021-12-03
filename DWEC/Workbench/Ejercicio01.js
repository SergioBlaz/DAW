"use strict";

import{llamarPeliculas} from "./includes/llamadas.js";

window.onload() = ()=>{
    
    llamarPeliculas()
    .then((response)=>{
        console.log(response);
    })
    .catch((reject)=>{
        document.getElementById("info").innerHTML = reject;
    });

}