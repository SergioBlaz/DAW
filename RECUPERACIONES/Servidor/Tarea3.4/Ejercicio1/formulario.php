<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 - Datos</title>
</head>
<body>
    <?php
    $nombre = isset($_POST["nombre"]) && $_POST["nombre"]!="" ? $_POST["nombre"] : "Campo Nombre vacío";

    $apellido1 = isset($_POST["apellido1"]) && $_POST["apellido1"]!="" ? $_POST["apellido1"] : "Campo 1º Apellido vacío";

    $apellido2 = isset($_POST["apellido2"]) && $_POST["apellido2"]!="" ? $_POST["apellido2"] : "Campo 2º Apellido vacío";

    $email = isset($_POST["email"]) && $_POST["email"]!="" ? $_POST["email"] : "Campo Email vacío";

    $url = isset($_POST["url"]) && $_POST["url"]!="" ? $_POST["url"] : "Campo URL vacío";

    $sexo = isset($_POST["sexo"]) && $_POST["sexo"]!="" ? $_POST["sexo"] : "Campo Sexo vacío";

    $convivientes = isset($_POST["conv"]) && $_POST["conv"]!="" ? $_POST["conv"] : "Campo Convivientes vacío";

    if(isset($_POST["aficiones"])) $aficiones = $_POST["aficiones"];
    
    if(isset($_POST["menu"])) $menu = $_POST["menu"];
    ?>
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