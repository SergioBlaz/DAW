<?php
    session_start();
    
    session_destroy();
    setcookie(session_name(), 123, time() -1000);

?>
<!DOCTYPE html>
<html>
    <head>
        <title>Página Principal</title>
        <meta chaset ="UTF-8">
    </head>
    <body>
        <p>Su Sesion a sido eliminada</p>
        <br><a href ="sesiones1_login.php">Volver al Registro</a>
    </body>
</html>