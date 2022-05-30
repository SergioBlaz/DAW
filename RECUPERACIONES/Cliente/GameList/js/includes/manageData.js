"use strict"

import {updateDoc, arrayUnion, getDoc, onSnapshot} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
import { getGameById } from "./apiRequests.js"
import {printUserGames, printUser, printWishlistGames} from "./printData.js"

//Function that return div element with the personal data of a user (Limit to user logged)
export const getUserInfo = async (userRef) => {
    let userDoc = await getDoc(userRef)
    let userInfo = document.createElement("div")
    userInfo.setAttribute("class","user-info")
    userInfo.innerHTML = printUser(userDoc.data())
    return userInfo
}

//Function that prints the games of the user updated in realtime and add an Event in the del buttons (Limit to user logged)
export const getUserGames = (userRef) => {
    const userGames = onSnapshot(userRef, userDoc => {
        //Clear the content
        document.getElementById("games-container").innerHTML = ""

        //Create the element and print the content 
        let games = document.createElement("div")
        games.setAttribute("id","games")
        games.innerHTML = printUserGames(userDoc.data().games)
        document.getElementById("games-container").appendChild(games)

        //Add del event after the insertion in the DOM
        delEventButton(userRef,"games")
    })
}



export const getUserWishlist =  (userRef) => {
    const getUserWishlist = onSnapshot(userRef, userDoc => {
        //Clear the content
        document.getElementById("wishlist-container").innerHTML = ""
        
        //Create the element and print the content
        let games = document.createElement("div")
        games.setAttribute("id","wishlist")
        games.innerHTML = printWishlistGames(userDoc.data().wishlist)
        document.getElementById("wishlist-container").appendChild(games)

        //Add del event after the insertion in the DOM
        delEventButton(userRef,"wishlist")
        addEventButton(userRef)
    })
}


//Function that adds a game to the list of games of the user(Limit to user logged)
export const addGame = async (userRef, game, list) => {
    if(list == "games"){
        await updateDoc(userRef,{
            games: arrayUnion(game)
        })
    } else if (list == "wishlist"){
        await updateDoc(userRef,{
            wishlist: arrayUnion(game)
        })
    }
}

//Function that delete a game of the list of the user
const delGame = async (userRef, gameId, list) => {
    const userDoc = await getDoc(userRef)
    if(list == "games"){
        let newGames = userDoc.data().games.filter((f) =>{
            return f.id != gameId
        })
        updateDoc(userRef, {
            games: newGames
        })
    } else if (list =="wishlist"){
        let newWishGames = userDoc.data().wishlist.filter((f) =>{
            return f.id != gameId
        })
        updateDoc(userRef, {
            wishlist: newWishGames
        })
    }
}

const delEventButton = (userRef, list) => {
    document.getElementsByName("del").forEach(button => {
        button.addEventListener("click", e => {
            delGame(userRef, e.target.parentNode.id, list)
        }, false)
    })
}

const addEventButton = async  (userRef)=> {
    const userDoc = await getDoc(userRef)
    document.getElementsByName("moveList").forEach( button => {
        button.addEventListener("click", async e => {
            userDoc.data().wishlist.map( game => {
                if(game.id == e.target.parentNode.id){
                   addGame(userRef, game, "games")
                   delGame(userRef, e.target.parentNode.id, "wishlist")
                }
            })
        })
    })

    
    
    
}
