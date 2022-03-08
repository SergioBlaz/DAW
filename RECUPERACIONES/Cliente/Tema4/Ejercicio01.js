"use strict"

const sustituirTexto = () =>{
    document.body.querySelectorAll("*").forEach((e) => {
        e.innerHTML = e.innerHTML.replaceAll('sexo', '<span>Contenido bloqueado</span>')
    })
}
sustituirTexto()