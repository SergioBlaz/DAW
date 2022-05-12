"use strict"

import {getDocs } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"
import { printUser } from "./printData.js"


//Function that return div element with the personal data of a user (Limit to user logged)
export const showUser = async (collection) => {
    var completeCollection = await getDocs(collection)
    completeCollection.docs.filter(user => {
        console.log(printUser(user))
    })
}