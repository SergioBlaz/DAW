<?php
function getJugadoresAsistencias(){
    $base = mysqli_connect("localhost","root","","baloncesto");
    if($base){
        $sql = "SELECT nombre, posicion, partidos, puntos, rebotes, asistencias FROM jugadores ORDER BY asistencias DESC";
        $resultado = mysqli_prepare($base, $sql);
        $ok = mysqli_stmt_execute($resultado);
        if($ok){
            $ok = mysqli_stmt_bind_result($resultado, $nombre, $posicion, $partidos, $puntos, $rebotes, $asist);
            $jugadores = array();
            while(mysqli_stmt_fetch($resultado)){
                array_push($jugadores, $nombre."-".$posicion."-".$partidos."-".$puntos."-".$rebotes."-".$asist);
            }
            mysqli_stmt_close($resultado);
            return $jugadores;
        } else {
            echo "Error en la ejecución de la consulta</br>"; 
        }
    } else {
        printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
    }
}
$players = getJugadoresAsistencias();
$json = json_encode($players, true);
echo $json
?>