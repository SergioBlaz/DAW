"use strict";

import {app} from "./includes/firebaseConnection.js";
import {getFirestore,collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { getUserGames, getUserInfo } from "./includes/manageData.js";
import { allGames } from "./includes/apiRequests.js"

window.onload = async () => {
    const d = document
    const gameList = collection(getFirestore(app),"listaJuegos");
    //Mostrar los datos del usuario
    d.querySelector(".header-container").replaceChild( await getUserInfo(gameList),d.querySelector(".header-container").lastChild)
    
    //Mostrar los juegos del usuario
    const test = await getUserGames(gameList)
    //d.querySelector(".games-container").removeChild(d.querySelector(".games-container").lastChild)
    //d.querySelector(".games-container").appendChild(test)
    //d.querySelector(".games-container").replaceChild(test, d.querySelector(".games-container").lastChild)
}