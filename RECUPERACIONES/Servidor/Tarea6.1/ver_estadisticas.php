<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Estadísticas</title>
</head>
<body>
<?php require 'cabezera.php'; ?>
    <h2>Estadísticas</h2>
    <label for="stats">Ver Estadísticas: </label>
    <select name="stats">
        <option value="asist" onclick="getPlayerAssists();">Asistencias</option>
        <option value="games" onclick="getPlayerGames();">Partidos</option>
        <option value="points" onclick="getPlayerPoints();">Puntos</option>
        <option value="rebounds" onclick="getPlayerRebounds();">Rebotes</option>
    </select>
    <div class="players-container">
    </div>
   <script type="text/javascript" src="js/CargarDatos.js"></script> 
</body>
</html>