<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambiar Fondo</title>
</head>
<?php
    if (isset($_POST['color'])) {
        setcookie("bgcolor", $_POST['color'], time() + 3600 * 24);
        header("Location:fondo.php");
    }
?>
<style>
    body{
        background-color: <?php echo $_COOKIE['bgcolor'] ?>;
    }
</style>
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
</body>
</html>