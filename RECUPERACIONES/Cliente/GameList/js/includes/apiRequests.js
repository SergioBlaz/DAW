//Recibe la id del juego y realiza una petición para devolver sus datos
const apiKey = `a8bfe2b5d66e46adb29d7ff7d07037aa`

//Function that returns 
export const allGames = async () => {
    const apiResponse = await fetch(
        `https://api.rawg.io/api/games?key=${apiKey}`,
        )
    const apiJson = await apiResponse.json()
    const jsonGames = {}
    apiJson.results.map((game) =>{
        jsonGames.name = game.name
        jsonGames.id = game.id
    })
    return jsonGames
}

export const searchedGame = async (name) => {

}