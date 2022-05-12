<?php
session_start();
$base = mysqli_connect("localhost","root","","baloncesto");
if($base){
    $sql = "SELECT nombre, posicion FROM jugadores ORDER BY posicion";
    $resultado = mysqli_prepare($base, $sql);
    $ok = mysqli_stmt_execute($resultado);
    if($ok){
        $ok = mysqli_stmt_bind_result($resultado, $nombre, $posicion);
        $jugadores = array();
        while(mysqli_stmt_fetch($resultado)){
            array_push($jugadores, $nombre."-".$posicion);
        }
        echo "<h3>Listado de Jugadores</h3>";
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
    echo "<tr><td>Nombre</td><td>Posición</td></tr>";
    for($i=0; $i<count($jugadores); $i++){
        $slice = explode("-",$jugadores[$i]);
        echo "<tr>";
        for($j=0; $j<count($slice); $j++){
            if($j==0){
                echo "<td><a href='ficha.php?name=".$slice[$j]."'>".$slice[$j]."</td>";
            }else{
                echo "<td>".$slice[$j]."</td>";
            }   
        }
        echo"</tr>";
    }
    echo "</table>";
}
?>