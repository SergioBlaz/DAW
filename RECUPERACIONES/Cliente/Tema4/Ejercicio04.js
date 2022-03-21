"use strict"

window.onload = () => {
    const img = ["img/img1.webp","img/img2.webp","img/img3.webp","img/img4.webp"]
    var i = 0
    //Intervalo que inserta imagenes en el DOM iterando las posiciones de un array con la ruta de estas imágenes
    const intervalo = setInterval(()=>{
        document.body.innerHTML = `<div><img src=${img[i]}></img></div>`
        i < 3 ? i++ : i=0
    },2000)
}