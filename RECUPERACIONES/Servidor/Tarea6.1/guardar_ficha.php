<?php
//Recoger por post los datos recibidos de nueva_ficha.php y guardar los datos en la base de datos.
$name = $_POST['name'];
$pos = $_POST['pos'];
$games = $_POST['games'];
$points = $_POST['points'];
$asist = $_POST['asist'];
$rebounds = $_POST['rebounds'];

$base = mysqli_connect("localhost","root","","baloncesto");
if($base){
    $sql = "INSERT INTO jugadores (nombre, posicion, partidos,puntos, rebotes, asistencias)
            VALUES ('$name', '$pos', $games, $points, $rebounds, $asist)";
    if(mysqli_query($base,$sql)){
        header("Location: ver_estadisticas.php");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($base);
    }
} else {
    printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
}
?>