"use strict";

//Constructor para los objetos cliente con el metodo para mostrarlos 
function consCliente(PNombre, PApellidos, PTel, PEmail, PCPostal,PDominio){
    return{
        Nombre: PNombre,
        Apellidos: PApellidos,
        Telefono: PTel,
        Email: PEmail,
        CPostal: PCPostal,

        mostrarCliente: function(cliente){
            console.log("Estos son los datos del cliente:");
            for(var prop in cliente){
                if(typeof(cliente[prop]) != "function"){
                    console.log(`${prop}: ${cliente[prop]}`)
                }
            }
            console.log(`Su servidor asociado es ${PDominio}`);
        } 
    }
}

//Función para recoger cadenas de texto, dividirla y crear los clientes
function crearClienteCadenas(cadenaDeTexto){
    var atribCliente = cadenaDeTexto.split(":");
    //Separo el texto a partir del @, después guardo la parte que tiene el dominio y repito el proceso, por último
    //le concateno el texto que quiero. 
    var dominio = cadenaDeTexto.split("@");
    dominio = dominio[1].split(".");
    dominio = dominio[0];
    dominio+=".com";

    var cliente = consCliente(atribCliente[0],atribCliente[1],atribCliente[2],atribCliente[3],atribCliente[4],dominio);

    return cliente

}

var clienteSergio = crearClienteCadenas("sergio:BlazquezCarrasco:622101246:uncorreo@iespacomolla.es:03610");

clienteSergio.mostrarCliente(clienteSergio);