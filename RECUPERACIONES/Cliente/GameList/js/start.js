"use strict";

import {app} from "./includes/firebaseConnection.js";
import {getFirestore,collection} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { showUser } from "./includes/manageData.js";
import { allGames } from "./includes/apiRequests.js"

window.onload = async () => {
    const d = document
    const gameList = collection(getFirestore(app),"listaJuegos");
    
    //d.querySelector(".header-container").innerHTML = showUser(gameList)
    //showUser(gameList,"test1")
    //handler()
console.log(allGames())
}