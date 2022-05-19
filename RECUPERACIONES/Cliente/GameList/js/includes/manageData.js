"use strict"

import {getDocs } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
import { printGames, printUser } from "./printData.js"

//Function that return div element with the personal data of a user (Limit to user logged)
export const getUserInfo = async (collection) => {
    let collectUser = await getDocs(collection)
    const userInfo = document.createElement("div")
    userInfo.setAttribute("class","user-info")
    collectUser.docs.map(e => {
        userInfo.innerHTML = printUser(e)
    })
    return userInfo
}

export const getUserGames = async (collection) => {
    let collectGames = await getDocs(collection)
    
    //console.log(collectGames.docs[0].data().games)
    document.querySelector(".games").innerHTML = printGames(collectGames.docs[0])
   /*  collectGames.docs.map(e => {
        console.log(e)
        games.innerHTML = printGames(e)
    }) */
    
}