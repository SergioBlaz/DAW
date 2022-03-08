<?php 
require_once 'bd.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    //Comprobación de que el usuario es correcto.
    $usu = comprobar_usuario($_POST['usuario'],$_POST['clave']);

    if($usu === false){

        $err = true;
        $usuario = $_POST['usuario'];

    } else {
        
        session_start();
        //QuitarNombreUsuario si no funciona algo
        $_SESSION['usuario'] = $usu;
        $_SESSION['carrito'] = [];
        $_SESSION['nombreUsuario'] = $_POST['usuario'];

        header("Location: categorias.php");
        return;
        
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Formulario de log-in</title>
        <meta charset = "UTF-8">
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <div class="contenedor">
            <div class="login">
                <h1>Inicio de Sesión</h1>
                <?php
                    if(isset($_GET["redirigido"])){
                        echo "<p>Haga log-in para continuar</p>";
                    }
                    if(isset($err) and $err == true){
                        echo "<p class=error>Revise el usuario y contraseña</p>";
                    }
                ?>
                <form action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
                    <label for="usuario">Usuario </label>
                    <input type="text" id="usuario" name="usuario" value="<?php if(isset($usuario)) echo $usuario; ?>"><br><br>
                    <label for="clave">Clave </label>
                    <input type="password" id="clave" name="clave"><br><br>
                    <input type="submit" value="Iniciar Sesión">
                </form>
            </div>
        </div>
    </body>
</html>