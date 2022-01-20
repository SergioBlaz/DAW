"use strict";

function login(){
    var xhttp = new XMLHttpRequest();
    var d = document;
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            if(this.responseText==="FALSE") {
                d.getElementById("clave").value="";
                alert("Revise usuario y contraseña");
            } else {
                d.getElementById("principal").style.display="block";
                d.getElementById("login").style.display="none";
                d.getElementById("cab_usuario").innerHTML = "Usuario:" + usuario;
                cargarCategorias();
            }
        }
    }
    var usuario = d.getElementById("usuario").value;
    var clave = d.getElementById("clave").value;
    var params = "usuario="+usuario+"&clave="+clave;
    xhttp.open("POST", "login_json.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
    return false;
}
function cerrarSesionUnaPagina(){
    var xhttp = new XMLHttpRequest();
    var d = document;
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status==200) {
            d.getElementById("principal").style.display = "none";
            d.getElementById("login").style.display="block";
            d.getElementById("contenido").innerHTML="";
            alert("Sesion cerrada con exito");
        }
    };
    xhttp.open("GET","logout_json.php",true);
    xhttp.send();
    return false;
}