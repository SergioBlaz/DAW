"use strict";
//Constructor para los objetos cliente
function constructorCliente(pNombre, pApellidos, pTelefono, pEmail, pCodigoPostal){
    return {
        Nombre = pNombre,
        Apellidos = pApellidos,
        Telefono = pTelefono,
        Email = pEmail,
        CPostal = pCodigoPostal
    }
}
//Función para recoger las cadenas de texto y crear los clientes
function crearClienteCadenas(cadenaDeTexto){
    var atribCliente = cadenaDeTexto.split(":");

    console.log(atribCliente);
}