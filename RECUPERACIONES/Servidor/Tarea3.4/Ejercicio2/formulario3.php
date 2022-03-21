<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - Formulario 3</title>
    <style>
        input{
            margin-top: 8px;
        }
        input[type="number"]{
            width: 35px;
        }
    </style>
</head>
<?php
    session_start();
    $nombre = isset($_SESSION["nombre"]) && $_SESSION["nombre"]!="" ? $_SESSION["nombre"] : "Campo Nombre vacío";

    $apellido1 = isset($_SESSION["apellido1"]) && $_SESSION["apellido1"]!="" ? $_SESSION["apellido1"] : "Campo 1º Apellido vacío";

    $apellido2 = isset($_SESSION["apellido2"]) && $_SESSION["apellido2"]!="" ? $_SESSION["apellido2"] : "Campo 2º Apellido vacío";

    $email = isset($_SESSION["email"]) && $_SESSION["email"]!="" ? $_SESSION["email"] : "Campo Email vacío";

    $url = isset($_SESSION["url"]) && $_SESSION["url"]!="" ? $_SESSION["url"] : "Campo URL vacío";

    $sexo = isset($_SESSION["sexo"]) && $_SESSION["sexo"]!="" ? $_SESSION["sexo"] : "Campo Sexo vacío";

    $convivientes = isset($_POST["conv"]) && $_POST["conv"]!="" ? $_POST["conv"] : "Campo Convivientes vacío";

    if(isset($_POST["aficiones"])) $aficiones = $_POST["aficiones"];
    
    if(isset($_POST["menu"])) $menu = $_POST["menu"];
    ?>
<body>
<h1>Datos introducidos</h1>
    <div>
        <p>Nombre: <?php echo $nombre ?></p>
        <p>Apellidos: <?php echo $apellido1." ".$apellido2 ?></p>
        <p>Email: <?php echo $email ?></p>
        <p>Url: <?php echo $url ?></p>
        <p>Sexo: <?php echo $sexo ?></p>
        <p>Convivientes: <?php echo $convivientes ?></p>
        <p>Aficiones: 
        <?php 
        foreach ($aficiones as $e){
            echo $e." ";
        }
        ?> </p>
        <p>Menú: 
        <?php
            foreach ($menu as $e){
                echo $e." ";
            }
        ?></p>
    </div>
</body>
</html>