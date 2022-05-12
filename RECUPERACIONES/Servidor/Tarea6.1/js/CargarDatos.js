const getPlayerAssists = async () => {
    const response = await fetch('cant_asistencias.php')
    const data = await response.text()
    printPlayers(JSON.parse(data))
}

const getPlayerGames = async () => {
    const response = await fetch('cant_partidos.php')
    const data = await response.text()
    printPlayers(JSON.parse(data))
}

const getPlayerPoints = async () => {
    const response = await fetch('cant_puntos.php')
    const data = await response.text()
    printPlayers(JSON.parse(data))
}

const getPlayerRebounds = async () => {
    const response = await fetch('cant_rebotes.php')
    const data = await response.text()
    printPlayers(JSON.parse(data))
}

const printPlayers = (players) => {
    const cont = document.querySelector(".players-container")
    const table = document.createElement("table")
    table.innerHTML = '<tr><td>Nombre</td><td>Posicion</td><td>Partidos</td><td>Puntos</td><td>Rebotes</td><td>Asistencias</td></tr>'
    players.forEach(el => {
        var row = document.createElement("tr")
        var player = el.split("-")
        player.forEach(e => {
            row.innerHTML += `<td>${e}</td>`
        }) 
        table.appendChild(row)
    });
    cont.replaceChild(table, cont.firstChild)
}