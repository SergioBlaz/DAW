<?php
$base = mysqli_connect("localhost","root","","baloncesto");
$nombreBorrar = $_GET['name'];
if($base){
    $sql = "DELETE FROM jugadores WHERE nombre='$nombreBorrar'";
    if(mysqli_query($base,$sql)){
        echo "<script>alert('Jugador $nombreBorrar eliminado correctamente.'); window.location = './jugadores.php';</script>";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($base);
    }
} else {
    printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
}
?>