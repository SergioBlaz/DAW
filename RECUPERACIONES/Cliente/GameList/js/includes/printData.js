"use strict"

//Function that print name, picture and lastSessionDate of an user (Fix date (parse) )
export const printUser = (user) => {
    return `<img src=${user.data().picture} alt=Profile height="60px" width="60px"><p>${user.data().name}</p><p>${user.data().lastSessionDate.toDate().toDateString()}</p>`
}

export const printGames = (user) => {
    let userGames = "";
    user.data().games.map( game => {
        userGames += `<div id=${game.id}><img alt="Game Image" height="100px" width="50px"><p>${game.title}</p><p>${game.category}</p></div>`
    })
    return userGames;
}