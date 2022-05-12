"use strict"

//Function that print name, picture and lastSessionDate of an user (Fix date (parse) )
export const printUser = (user) => {
    return `<img src=${user.data().picture} alt=Profile picture><p>${user.data().name}</p><p>${user.data().lastSessionDate}</p>`
}

//Function that recives an array of Json