<?php
$base = mysqli_connect("localhost","root","","baloncesto");
$nombreFiltro = $_GET['name'];
if($base){
    $sql = "SELECT Id, nombre, posicion, partidos, puntos, rebotes, asistencias FROM jugadores WHERE nombre='$nombreFiltro'";
    $resultado = mysqli_prepare($base, $sql);
    $ok = mysqli_stmt_execute($resultado);
    if($ok){
        $ok = mysqli_stmt_bind_result($resultado, $id, $nombre, $posicion, $partidos, $puntos, $rebotes, $asist);
        $jugadores = array();
        while(mysqli_stmt_fetch($resultado)){
            array_push($jugadores, $nombre."-".$posicion."-".$partidos."-".$puntos."-".$rebotes."-".$asist);
        }
        echo "<h3>Ficha del Jugador</h3>";
        mostrarJugadores(($jugadores));
        mysqli_stmt_close($resultado);
    } else {
        echo "Error en la ejecución de la consulta</br>"; 
    }
} else {
    printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
}
function mostrarJugadores($jugadores){
    echo "<table>";
    echo "<tr><td>Nombre</td><td>Posicion</td><td>Partidos</td><td>Puntos</td><td>Rebotes</td><td>Asistencias</td></tr>";
        $slice = explode("-",$jugadores[0]);
        echo "<tr>";
        for($j=0; $j<count($slice); $j++){
            echo "<td>".$slice[$j]."</td>";
        }
        //Enlaces para borrar o actualizar la ficha del jugador.
        echo "<td><a href=borrar_ficha.php?name=".$slice[0].">Borrar</a></td><td><a href=actualizar_ficha.php?name=$slice[0]&pos=$slice[1]&games=$slice[2]&points=$slice[3]&asist=$slice[4]&rebounds=$slice[5]>Actualizar</a></td>";
        echo"</tr>";
    echo "</table>";
}
?>