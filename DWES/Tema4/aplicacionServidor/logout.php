<?php 
    
    session_start();
    require 'sesiones.php';
    comprobar_sesion();
    $_SESSION = array();
    session_destroy();
    setcookie(session_name(), 123, time() -1000);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sesión cerrada</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p class="logout">La sesión se cerró correctamente. ¡Hasta la próxima!</p>
    <a href="login.php">Ir a Inicio de Sesión</a>
</body>
</html>
