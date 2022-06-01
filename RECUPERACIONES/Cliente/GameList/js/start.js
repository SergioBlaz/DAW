"use strict";

import { app } from "./includes/firebaseConnection.js";
import { getFirestore,collection, doc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { getAuth, signInWithPopup,GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
import { getUserInfo, createUser, addEventButton, wishEventButton, getUserGames } from "./includes/manageData.js";
import { getGamesByName } from "./includes/apiRequests.js"
import { printApiGames, clearAll } from "./includes/printData.js"

window.onload = async () => {
    const d = document
    
    //Authentication user
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    const signIn = await signInWithPopup(auth, provider)
    const authUser = signIn.user.reloadUserInfo
    const gameCollection = collection(getFirestore(app),"listaJuegos")
    const userRef = await doc(gameCollection,authUser.localId)
    const userDoc = await getDoc(userRef)

    
    //If the userDoc not exists, create a new one. If exists, update only the last login date
    if(userDoc.exists()){
        setDoc(userRef,{lastSessionDate:authUser.lastLoginAt},{merge:true})
    }else {
        setDoc(userRef,createUser(authUser))
    }
    
    //Show info of the user
    const userInfo = await (getUserInfo(userRef))
    d.getElementById("header-container").replaceChild(userInfo,d.getElementById("header-container").lastChild)

    //Show the games of the API for the first time, without any name coincidence
    const firstResult = await getGamesByName("")
    d.getElementById("api-games").innerHTML = printApiGames(firstResult)
    addEventButton("",userRef)
    wishEventButton("",userRef)

    //Add an event to the search input that shows in realtime the games that have the same name in the API
    d.getElementById("search").addEventListener("input",async input => {
        const nameValue = input.target.value
        const searchResult = await getGamesByName(nameValue)
        clearAll()
        d.getElementById("api-games").innerHTML = printApiGames(searchResult)
        addEventButton(nameValue, userRef)         
        wishEventButton(nameValue, userRef)
    }, false)

    /* d.getElementById("logout").addEventListener("click", async () => {
        const out = await signOut(auth)
    }) */

    d.getElementById("myGames").addEventListener("click", ()=> {
        clearAll()
        getUserGames(userRef)
    })
} 