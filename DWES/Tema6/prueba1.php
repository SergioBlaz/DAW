<?php
$base = mysqli_connect("localhost","root","","pedidos");

if($base){
    echo "Conexión realizada</br>";

    $sql = "SELECT Nombre, Descripcion FROM productos WHERE CodCat = ?";
    $resultado = mysqli_Prepare($base, $sql);
    $ok = mysqli_stmt_bind_param($resultado, 'i', $categoria);
    $categoria = 1;
    $ok = mysqli_stmt_execute($resultado);
    if($ok == FALSE){
        echo "Error en la ejecución de la consulta<br/>";
    }else{
        $ok = mysqli_stmt_bind_result($resultado, $nombre, $descripcion);
        echo "Nombre y descripción de los productos<br/>";
        while(mysqli_stmt_fetch($resultado)){
            echo $nombre . ", ". $descripcion. "<br />";
        }
        mysqli_stmt_close($resultado);
    }
    if(mysqli_close($base)){
        echo "Desconexión";
    }else{
        echo "Error desconexión";
    }
} else {
    printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());

}