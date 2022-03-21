<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - Formulario 2</title>
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
    if(isset($_POST['nombre'])){
        $_SESSION['nombre'] = $_POST['nombre'];
    }
    if(isset($_POST['apellido1'])){
        $_SESSION['apellido1'] = $_POST['apellido1'];
    }
    if(isset($_POST['apellido2'])){
        $_SESSION['apellido2'] = $_POST['apellido2'];
    }
    if(isset($_POST['email'])){
        $_SESSION['email'] = $_POST['email'];
    }
    if(isset($_POST['url'])){
        $_SESSION['url'] = $_POST['url'];
    }
    if(isset($_POST['sexo'])){
        $_SESSION['sexo'] = $_POST['sexo'];
    }
    ?>
<body>
    <h1>Formulario 2</h1>
    <form action="formulario3.php" method="post">        
        <label for="conv">Nº Convivientes</label>
        <input type="number" name="conv" value="0" min="0" max="99" required></br>

        <label for="afi">Aficiones:</label></br>
        <input type="checkbox" name="aficiones[]" value="deporte">
        <label for="afi1">Deporte</label></br>
        <input type="checkbox" name="aficiones[]" value="videojuegos" checked>
        <label for="afi1">Videojuegos</label></br>
        <input type="checkbox" name="aficiones[]" value="lectura">
        <label for="afi1">Lectura</label></br>
        <input type="checkbox" name="aficiones[]" value="cocina">
        <label for="afi1">Cocina</label></br>

        <label for="menu">Menú favorito:</label>
        <select name="menu[]" multiple required>
            <option value="menú 1">Menú 1</option>
            <option value="menú 2">Menú 2</option>
            <option value="menú 3">Menú 3</option>
            <option value="menú 4">Menú 4</option>
        </select>
        <input type="submit" value="Enviar">
    </form> 
</body>
</html>