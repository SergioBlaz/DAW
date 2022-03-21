<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Fondo - Sesión 2</title>
</head>

<style>
    body{
        background-color: <?php
    session_start();
    if(isset($_SESSION['bgcolor'])) {
        echo $_SESSION['bgcolor'];
    } else {
        echo "#ffffff";
    }
?> ;
    }
</style>
<body>
    <button onclick="window.location.href='fondoSesion1.php'">Volver</button>
</body>
</html>