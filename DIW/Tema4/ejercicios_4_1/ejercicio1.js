"use strict"

window.onload = () => {
    const d = document;

    d.getElementsByName("gridRowGap").forEach((e)=>{
        e.addEventListener("change", () =>{
            d.getElementsByName("gridRowGap").forEach((e)=>{
                e.previousSibling.previousSibling.childNodes[1].textContent = e.value;
                d.getElementById("spangridRowGap").textContent = e.value;
                d.getElementById("cuadricula").style.rowGap = `${e.value}px`;
            })
        },false)
    })
    
    d.getElementsByName("gridColumnGap").forEach((e)=>{
        e.addEventListener("change", () =>{
            d.getElementsByName("gridColumnGap").forEach((e)=>{
                e.previousSibling.previousSibling.childNodes[1].textContent = e.value;
                d.getElementById("spangridColumnGap").textContent = e.value;
                d.getElementById("cuadricula").style.columnGap = `${e.value}px`;
            })
        },false)
    })

}