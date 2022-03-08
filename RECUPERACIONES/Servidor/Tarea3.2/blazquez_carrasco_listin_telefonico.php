<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listín Telefónico</title>
    <style>
        .greed{
            display:grid;
            grid-template-columns: 0.5fr 0.5fr 0.5fr;
            grid-template-rows: 1fr;
            grid-template-areas: "f l n";
            column-gap: 5px;
        }
        .noti{
            grid-area: n;
            background-color: grey;
            width: 250px;
            padding: 5px;
            text-align: center;
            border-radius: 5px;
            height: max-content;
        }
        .listin{
            grid-area: l;
            background-color: lightblue;
            width: max-content;
            padding: 5px;
            border-radius: 5px;
        }
        form{
            grid-area: f;
            background-color: lightgreen;
            padding: 5px;
            border-radius: 5px;
            width: max-content;
            height: max-content;
        }
        table{
            border-collapse: collapse;
        }
    </style>
</head>
<body>
    <div class="greed">
    <?php 
    if(!empty($_POST['personas'])){
        $array = explode(",", $_POST['personas']);
        $pos = count($array);

    } else {
        $array = array();
        $pos = 0;

    }
    if(!empty($_POST['nombre'])){
        $nom = strtolower($_POST['nombre']);
        $si = array_search($nom,$array,false);
        
        if(!empty($_POST['telefono'])){
            $tel = $_POST['telefono'];

            if($si || $si === 0){
                $array[$si+1] = $tel;
                echo "<p class=noti >Teléfono Cambiado</p>";

            } else {
                $array[$pos] = $nom;
                $array[$pos+1] = $tel;
                echo "<p class=noti >Datos Añadidos</p>";

            }
        } else {
            $tel = NULL;
            $si = array_search($nom, $array, false);

            if($si || $si === 0){
                unset($array[$si]);
                unset($array[$si+1]);
                $array = array_values($array);
                echo "<p class=noti >Datos Eliminados</p>";

            } else {
                echo "<p class=noti >Campo Teléfono vacío</p>";

            }
        }
    } else {
        $nom = NULL;
        if(!empty($_POST['telefono'])){
            echo "<p class=noti >Campo Nombre vacío</p>";

        } else {
            echo "<p class=noti >No ha introducido datos</p>";

        }
    }
    if(count($array)>=1){
        echo "<div class=listin>";
        echo "<h1>Listín telefónico</h1>";
        echo "<table><tr><th>Nombre</th><th>Teléfono</th></tr>";

        for($i = 0 ; $i < count($array); $i+=2){
            if($array[$i] !== NULL && $array[$i+1] !== NULL){
                echo "<tr><td>".$array[$i+1]."</td><td>".$array[$i+2]."</td></tr>";

            }
        }
        echo "</table>";
        echo "</div>";
    }
    ?>
    <form name="formulario" action="<?php $_SERVER['PHP_SELF']?>" method="post">
        <table>
            <tr><td>Introducción de datos:</td></tr>
            <tr>
                <td>
                    <label for="nombre">Nombre</label>
                    <input type="text" name="nombre">
                </td>
            </tr>
            <tr>
                <td>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name="telefono">
                </td>
            </tr>
        </table>
        <input type="hidden" name="personas" value="
        <?php
            if(isset($array)){
                echo implode(",", $array);
            }
        ?>
        "/>
        <input type="submit" value="Aplicar cambios"/>
    </form>
    </div>
</body>
</html>