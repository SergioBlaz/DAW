<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mejores Jugadores</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
</body>
</html>
<?php
$base = mysqli_connect("localhost","root","","baloncesto");
if($base){
    $sql = "SELECT Id, nombre, posicion, partidos, puntos, rebotes, asistencias FROM jugadores";
    $resultado = mysqli_prepare($base, $sql);
    $ok = mysqli_stmt_execute($resultado);
    if($ok){
        $ok = mysqli_stmt_bind_result($resultado, $id, $nombre, $posicion, $partidos, $puntos, $rebotes, $asist);
        $jugadores = array();
        while(mysqli_stmt_fetch($resultado)){
            array_push($jugadores, $nombre."-".$posicion."-".$partidos."-".$puntos."-".$rebotes."-".$asist);
        }
        require 'cabezera.php';
        echo "<h3>Jugadores con más Puntos</h3>";
        mostrarJugadores(masPuntos($jugadores));
        echo "<h3>Jugadores con más Rebotes</h3>";
        mostrarJugadores(masRebotes($jugadores));
        echo "<h3>Jugadores con más Asistencias</h3>";
        mostrarJugadores(masAsistencias($jugadores));
        mysqli_stmt_close($resultado);
    } else {
        echo "Error en la ejecución de la consulta</br>"; 
    }
} else {
    printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
}

function masPuntos($jugadores){
    $jPuntos = array();
    for($i=0; $i<count($jugadores); $i++){
        $slice = explode("-",$jugadores[$i]);
        if($slice[3]>12){
            array_push($jPuntos, $jugadores[$i]);
        }
    }
    return $jPuntos;
}
function masRebotes($jugadores){
    $jRebotes = array();
    for($i=0; $i<count($jugadores); $i++){
        $slice = explode("-",$jugadores[$i]);
        if($slice[4]>6){
            array_push($jRebotes, $jugadores[$i]);
        }
    }
    return $jRebotes;
}
function masAsistencias($jugadores){
    $jAsist = array();
    for($i=0; $i<count($jugadores); $i++){
        $slice = explode("-",$jugadores[$i]);
        if($slice[5]>5){
            array_push($jAsist, $jugadores[$i]);
        }
    }
    return $jAsist;
}
function mostrarJugadores($jugadores){
    echo "<table>";
    echo "<tr><th>Nombre</th><th>Posicion</th><th>Partidos</th><th>Puntos</th><th>Rebotes</th><th>Asistencias</th></tr>";
    for($i=0; $i<count($jugadores); $i++){
        $slice = explode("-",$jugadores[$i]);
        echo "<tr>";
        for($j=0; $j<count($slice); $j++){
            echo "<td>".$slice[$j]."</td>";
        }
        echo"</tr>";
    }
    echo "</table>";
}
?>