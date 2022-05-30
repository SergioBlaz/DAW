<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        if(isset($_POST['user']) && $_POST['user']=="admin" && isset($_POST['passwd']) && $_POST['passwd']=="admin"){
            session_start();
            header("Location: jugadores.php");
            return;
        } else {
            $err = true;
            $user = $_POST['user'];
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log-In Baloncesto</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="contenedor">
        <div class="login">
            <h1>Inicio de Sesión</h1>
            <?php 
            if(isset($_GET['red'])){
                echo '<p>Inicia sesión para continuar</p>';
            } else if (isset($error) && $error === TRUE ){
                echo '<p class="error">Error en el usuario o la contraseña</p>';
            }
            ?>
            <form action="<?php $_SERVER['PHP_SELF'] ?>" method="POST">
                    <label for="user">Usuario: </label>
                    <input type="text" id="user" name="user" value="<?php if(isset($user)){ echo $user;} ?>"><br><br>
                    <label for="passwd">Clave: </label>
                    <input type="password" id="passwd" name="passwd">
                    <input type="submit" value="Iniciar Sesión">
            </form>
        </div>
    </div>
</body>
</html>