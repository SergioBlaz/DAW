<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Jugador</title>
</head>
<body>
    <?php require 'cabezera.php'; ?>
    <h2>Formulario Nuevo Jugador</h2>
    <div>
        <form action="guardar_ficha.php" method="POST">
            <label for="name">Nombre: </label>
            <input type="text" name="name" required><br>
            <label for="pos">Posición: </label>
            <input type="text" name="pos" required><br>
            <label for="games">Partidos: </label>
            <input type="number" name="games" min="0" value="0" required><br>
            <label for="points">Puntos: </label>
            <input type="number" name="points" min="0" value="0" required><br>
            <label for="asist">Asistencias: </label>
            <input type="number" name="asist" min="0" value="0" required><br>
            <label for="rebounds">Rebotes: </label>
            <input type="number" name="rebounds" min="0" value="0" required><br>
            <input type="submit" value="Guardar Datos">
        </form>
    </div>
</body>
</html>
