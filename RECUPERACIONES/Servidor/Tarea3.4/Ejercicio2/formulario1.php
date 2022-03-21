<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - Formulario 1</title>
    <style>
        input{
            margin-top: 8px;
        }
        input[type="number"]{
            width: 35px;
        }
    </style>
</head>
<body>
    <h1>Formulario 1</h1>
    <form action="formulario2.php" method="post">
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" required></br>
        
        <label for="apellido1">1º Apellido: </label>
        <input type="text" name="apellido1" required></br>
        
        <label for="apellido2">2º Apellido: </label>
        <input type="text" name="apellido2" required></br>
        
        <label for="email">Email: </label>
        <input type="email" name="email" required></br>
        
        <label for="url">URL: </label>
        <input type="url" name="url" required></br>
        
        <label>Sexo: </label></br>
        <input type="radio" name="sexo" value="hombre" checked required>
        <label for="hombre">Hombre</label></br>
        <input type="radio" name="sexo" value="mujer" required>
        <label for="mujer">Mujer</label></br>
        
        <input type="submit" value="Enviar">
    </form> 
</body>
</html>