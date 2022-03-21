<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Fondo - Sesión 1</title>
</head>
<?php
    if(isset($_POST['eliminarSesion'])){
        if(isset($_SESSION['bgcolor'])){
            session_destroy();
            setcookie(session_name(), 123, time() -10000);
            header("Location:fondoSesion1.php");
        }
    }
    if (isset($_POST['color'])) {
        session_start();
        $_SESSION['bgcolor'] = $_POST['color'];
        header("Location:fondoSesion2.php");
    }
?>
<body>
    <form action="<?php $_SERVER['PHP_SELF']?>" method="POST">
    <label for="color">Selecciona un color:</label>
    <select name="color">
        <option value="#ffffff">Blanco</option>
        <option value="#ff0000">Rojo</option>
        <option value="#00ff00">Verde</option>
        <option value="#0000ff">Azul</option>
        <option value="#000000">Negro</option>
    </select>
    <input type="submit" name="Enviar">
    </form>
    <form action="<?php $_SERVER['PHP_SELF']?>" method="POST">
        <input type="hidden" name="delSesion">
        <input type="submit" name="delete" value="Borrar Sesión">
    </form>
</body>
</html>