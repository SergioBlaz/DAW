"use strict";
// Importar las funcones necesarias desde su biblioteca.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// Configurar el objeto con los datos de acceso de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDhdQ0PGgIItJkWu8LaEtUtbLP6JZNzClQ",
  authDomain: "feos-90bb3.firebaseapp.com",
  projectId: "feos-90bb3",
  storageBucket: "feos-90bb3.appspot.com",
  messagingSenderId: "243531445588",
  appId: "1:243531445588:web:94e7412fb00744e6b504c1",
};
// Crear el enlace a la aplicación.
const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);
// Exportar el objeto aplicación.
export { app, autentificacion };
