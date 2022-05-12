<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>
<body>
    <h1>Business / Links</h1>
<?php
if(isset($_POST['insert'])){
    $insert = $_POST['insert'];
    $file = "empresas.txt";
    
    if(isset($insert)){
        $link = $_POST['link'];
        $desc = $_POST['desc'];
        $city = $_POST['city'];

        $fileData = fopen ($file, "a");
        fwrite($fileData, "$link<separador>$desc<separador>$city\n");
        fclose($fileData);
    }

    showData($file);
}
?>
<br>
<!-- Formulario -->
<form action="<?php $_SERVER['PHP_SELF']?>" method="POST">
    <fieldset>
        <legend>Nueva Empresa</legend>
        <label for="link">Enlace: </label><br>
        <input type="text" size="80" name="link" placeholder="https://www.example.com"><br>
        <label for="desc">Descripción: </label><br>
        <input type="text" size="80" name="desc" placeholder="Nombre de la empresa"><br>
        <label for="city">Ciudad: </label><br>
        <input type="text" size="80" name="city" placeholder="Nombre de la ciudad"><br>
        <input type="submit" name="insert" value="Añadir">
    </fieldset>
</form>

<!-- Funciones de PHP -->
<?php
function showData($businessFile){
    $business=file($businessFile);
    echo"<table>";
    echo"<tr><td>Empresa</td><td>Enlace</td><td>Ciudad</td></tr>";
    for($i=0; $i<count($business); $i++){
        $data = explode("<separador>",$business[$i]);
        $link = $data[0];
        $desc = $data[1];
        $city = $data[2];
        
        echo "<tr><td>".$desc."</td>";
        echo "<td><a href=".$link.">".$link."</a></td>";
        echo "<td>".$city."</td></tr>";
    }
    echo "</table>";
}
?>
</body>
</html>