"use strict"

function categorias(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = ()=>{
        if(this.readyState == 4 && this.status == 200){
            var lista = document.createElement("ul");
            
            var cats = JSON.parse(this.response);
            
            for(let i=0; i<cats.length;i++){
                var elem = document.createElement("li");
                elem.innerHTML = cats[i]["nombre"];
                lista.appendChild(elem);
            }
            var body = document.getElementById("principal");
            body.innerHTML ="";
            body.appendChild(lista);
        }
    };
    xhttp.open("GET","datos_categorias_json.php",true);
    xhttp.send();
    return false;
}