"use strict";

window.onload = () => {
    for(let i = 0; i<100; i++){
        document.getElementById('numeros').innerHTML += `<tr></tr>`

        for(let j = 0; j<100; j++){
            document.getElementById('numeros').childNodes[i].innerHTML += `<td>a</td>`
        }
    }
}