"use strict";

window.onload = () =>{

    String.prototype.repetir = function(n) {
        let txt="";
        if(n >= 0 && typeof n === 'number'){
            for(let i = 0; i<n; i++){
                txt += this+"\n";
            }
            return txt;
        }else {
            txt = "Imposible realizar la operación.";
            return txt;
        }

    };
    console.log("Viva JavaScript!".repetir(1));
}