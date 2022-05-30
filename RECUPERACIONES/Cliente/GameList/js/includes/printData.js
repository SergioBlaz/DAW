"use strict"

//Function that print name, picture and lastSessionDate of an user (Fix date (parse) )
export const printUser = (user) => {
    return `<img src=${user.image} alt=Profile height="60px" width="60px">
            <p>${user.name}</p>
            <p>${user.lastSessionDate.toDate().toDateString()}</p>`
}

export const printUserGames = (games) => {
    let userGames = "";
    games.map( game => {
        userGames += `<div id=${game.id} class=game-card>
                        <img src=${game.image} alt="Image" height="175px" width="300px">
                        <p>${game.name}</p> <p>${game.metacritic}</p>
                        <input type='button' name='del' value='Eliminar'>
                        <div class=show-more>
                            <p>Fecha de Salida ${game.released}</p>
                            <p>Generos ${game.genres.toString()}
                        </div>
                    </div>`
    })
    return userGames;
}
export const printWishlistGames = (games) => {
    let wishGames = ""
    games.map( game => {
        wishGames += `<div id=${game.id} class=game-card>
                        <img src=${game.image} alt="Image" height="175px" width="300px">
                        <p>${game.name}</p> <p>${game.metacritic}</p>
                        <input type='button' name='del' value='Eliminar'>
                        <input type='button' name='moveList' value='Mover'>
                        <div class=show-more>
                            <p>Fecha de Salida ${game.released}</p>
                            <p>Generos ${game.genres.toString()}
                        </div>
                    </div>`
    })
    return wishGames
}

export const printApiGames = (games) => {
    let apiGames = ""
    games.map( game => {
        apiGames += `<div id=${game.id} class=game-card>
                        <img src=${game.image} alt="Image" height="175px" width="300px">
                        <p>${game.name}</p> <p>${game.metacritic}</p>
                        <input type='button' name='add' value='Añadir'>
                        <input type='button' name='addWish' value='Whislist'>
                        <div class=show-more>
                            <p>Release Dare ${game.released}</p>
                            <p>Genres ${game.genres.toString()}
                        </div>
                    </div>`
    })
    return apiGames
}
