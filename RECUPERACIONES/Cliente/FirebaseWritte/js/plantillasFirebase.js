"use strict";

export const pintarFeo = (doc) => {
  return `<div class="fila"><img class="borrar" src="./img/borrar.png" id="${
    doc.id
  }"><div class="celda">${doc.data().nombre} ${
    doc.data().apellidos
  } con las aficiones: ${doc.data().aficiones}</div></div>`;
};

export const pintarBien = (id) => {
  return `<div class="bien">¡Transacción con id ${id} realizada con éxito!</div>`;
};

export const pintarMal = (error) => {
  return `<div class="mal">Error al hacer la acción: ${error}.</div>`;
};

export const borrar = (objetoDOM) => {
  setTimeout(() => {
    objetoDOM.innerHTML = "";
  }, 2000);
};
