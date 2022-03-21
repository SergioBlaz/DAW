<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visitas</title>
</head>
<body>
    <?php
        if(!isset($_COOKIE['visitas'])) {
            setcookie("visitas", 0, time() + 3600 * 24);
            echo "<h2>Bienvenido a la página</h2>";
        } else {
            if(isset($_POST['reset'])) {
                setcookie("visitas", 0 , time() + 3600 * 24);
                header("Location:contadorVisitas.php");
            } else {
                $visitas = $_COOKIE['visitas'];
                $visitas += 1;
                setcookie("visitas", $visitas);
                echo "<h2>Esta es la vez Nº ".$visitas." que visita la página.</h2>";
            }
        }
    ?>
    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <input type="submit" name="reset" value="Reiniciar visitas">
    </form>
</body>
</html>