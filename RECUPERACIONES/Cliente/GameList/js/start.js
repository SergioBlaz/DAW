"use strict";

import {app} from "./includes/firebaseConnection.js";
import {getFirestore,collection, doc} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { getUserGames, getUserInfo, addGame, getUserWishlist } from "./includes/manageData.js";
import { getGameById, getGamesByName } from "./includes/apiRequests.js"
import { printApiGames} from "./includes/printData.js"

window.onload = async () => {
    const d = document
    const gameCollection = collection(getFirestore(app),"listaJuegos")
    const userRef = await doc(gameCollection,"i0q4ZQqjFuitYuCCaz2t")
    
    //Show info of the user
    const userInfo = await (getUserInfo(userRef))
    d.getElementById("header-container").replaceChild(userInfo,d.getElementById("header-container").lastChild)
    
    //Show games of the user 
    getUserGames(userRef)

    //Show wishlist of the user
    getUserWishlist(userRef)
    
    //Show the games searched by name in the API
    d.getElementById("search").addEventListener("input",async input => {
        const nameValue = input.target.value
        const searchResult = await getGamesByName(nameValue)
        d.getElementById("api-games").innerHTML = printApiGames(searchResult)

        //For each button in the games showed add an event that save the game in GAMES
        d.getElementsByName("add").forEach( button => {
            button.addEventListener("click", async e => {
                const gameToAdd = await getGameById(nameValue ,e.target.parentNode.id)
                addGame(userRef,gameToAdd,"games")
            }, false)
        })

        //For each button in the games showed add an event that save the game in WISHLIST 
        d.getElementsByName("addWish").forEach( button => {
            button.addEventListener("click", async e => {
                const gameToAdd = await getGameById(nameValue ,e.target.parentNode.id)
                addGame(userRef,gameToAdd,"wishlist")
            }, false)
        })

    }, false)
}