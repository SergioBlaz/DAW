import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBBnqIzAvkJhSxZJ3TY3WDjughmZ-AyMOQ",
  authDomain: "listacompra-bac4e.firebaseapp.com",
  databaseURL: "https://listacompra-bac4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "listacompra-bac4e",
  storageBucket: "listacompra-bac4e.appspot.com",
  messagingSenderId: "952959736842",
  appId: "1:952959736842:web:9d0608fde8a05e27d753f3"
};

export const app = initializeApp(firebaseConfig);

