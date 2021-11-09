"use strict";
window.onload = () => {
  /* *** Acceso a un formulario *** */

  //Mediante el atributo name
  var formulario = document.forms.formCliente;
  var correo = formulario.correo;

  //Mediante el atributo id
  var formuId = document.getElementById("frmClnt");
  var correoId = document.getElementById("email");

  /* *** Elementos de un formulario *** */

  // Radio (única selección)
  var radioButton = document.getElementById("radioBoton");
  radioButton.addEventListener(
    "change",
    (e) => {
      let radio = document.getElementsByName("pregunta");
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked === true)
          console.log(`Valor del elemento marcado ${radio[i].value}`);
      }
    },
    false
  );

  // CheckBox (múltiple selección)
  var checkBox = document.getElementById("cajaBoton");
  checkBox.addEventListener(
    "change",
    (e) => {
      let check = document.getElementsByName("preguntaC");
      var marcados = "";
      for (let i = 0; i < check.length; i++) {
        if (check[i].checked === true) {
          marcados += `${check[i].value} `;
        }
      }
      console.log(`Valores del elemento marcados ${marcados}`);
    },
    false
  );

  // Select (única y múltiple selección)
  var seleccion = document.getElementById("selectAprobar");
  seleccion.addEventListener(
    "change",
    (e) => {
      console.log(
        `El select tiene ${e.target.options.length} opciones disponibles`
      );
      let sel = e.target.selectedIndex;
      console.log(
        `El valor de la opción seleccionada es ${e.target.options[sel].value} y el texto asociado es ${e.target.options[sel].text}`
      );
      //e.target.selectedIndex = 0; // Se cambia el índice seleccionado
    },
    false
  );

  // *** Validar un formulario con onSubmit ***/

  // <form onSubmit="return validar();"> -> Evitar a toda costa

  var expNombre = new RegExp("^[a-zA-Z][a-zA-Z0-9-_.]{3,20}$");
  //var expNombre = /^[a-zA-Z][a-zA-Z0-9-_\.]{3,20}$/;

  function Validar() {
    let nombre = document.getElementById("nombre");
    if (expNombre.test(nombre.value)) {
      document.getElementById("error").innerHTML = "El nombre es correcto.";
      //Envío el formulario con formulario.submit;
    } else {
      document.getElementById("error").innerHTML =
        "Escriba un nombre con entre 3 y 20 caracteres, y debe comenzar con una letra.";
      // No envío el formulario.
    }
  }

  var boton = document.getElementById("aceptar");
  document.addEventListener(
    "click",
    () => {
      Validar();
    },
    false
  );
}; //fin windows.onload
