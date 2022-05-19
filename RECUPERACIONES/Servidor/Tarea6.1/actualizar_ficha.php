<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actualizar Ficha</title>
</head>
<?php
    $nombreActualizar = $_GET['name']; 
    $posAct = $_GET['pos'];
?>
<body>
<h3>Actualizando ficha del Jugador <?php echo $nombreActualizar ?></h3>
    <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
        <label for="pos">Posición: </label>
        <input type="text" name="pos" value="<?php echo $posAct ?>" required><br>
        <label for="games">Partidos: </label>
        <input type="number" name="games" min="0" value="<?php echo $_GET['games']?>" required><br>
        <label for="points">Puntos: </label>
        <input type="number" name="points" min="0" value="<?php echo $_GET['points']?>" required><br>
        <label for="asist">Asistencias: </label>
        <input type="number" name="asist" min="0" value="<?php echo $_GET['asist']?>" required><br>
        <label for="rebounds">Rebotes: </label>
        <input type="number" name="rebounds" min="0" value="<?php echo $_GET['rebounds']?>" required><br>
        <input type="submit" value="Actualizar Datos">
    </form>
</body>
</html>

<?php
if(isset($_POST['pos']) && isset($_POST['games']) && isset($_POST['points']) && isset($_POST['asist']) && isset($_POST['rebounds'])){
    $pos = $_POST['pos'];
    $games = $_POST['games'];
    $points = $_POST['points'];
    $asist = $_POST['asist'];
    $reb = $_POST['rebounds'];
    $base = mysqli_connect("localhost","root","","baloncesto");
    if($base){
        $sql = "UPDATE jugadores 
                SET posicion = '$pos', partidos = $games , puntos = $points , asistencias = $asist , rebotes = $reb 
                WHERE nombre='$nombreActualizar'";    
        if(mysqli_query($base,$sql)){
            echo "<script>alert('Jugador $nombreActualizar actualizado correctamente.'); window.location = './jugadores.php';</script>";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($base);
        }
    } else {
        printf("Error %d : %s.</br>",mysqli_connect_errno(), mysqli_connect_error());
    }
}
?>
 