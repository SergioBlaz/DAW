<?php 
require_once 'bd.php';

if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    //Comprobación de que el usuario es correcto.
    $usu = comprobar_usuario($_POST['usuario'],$_POST['clave']);

    if($usu===false){

        $err = true;
        $usuario = $_POST['usuario'];

    } else {
        
        session_start();
        //QuitarNombreUsuario si no funciona algo
        $_SESSION['nombreUsuario'] = $_POST['usuario'];
        $_SESSION['usuario'] = $usu;
        $_SESSION['carrito'] = [];

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
    </head>
    <body>
        <?php
            if(isset($_GET["redirigido"])){
                echo "<p>Haga log-in para continuar</p>";
            }
            if(isset($err) and $err == true){
                echo "<p>Revise el usuario y contraseña</p>";
            }
        ?>
        <form action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" method="POST">
            <label for="usuario">Usuario: </label>
            <input type="text" id="usuario" name="usuario" value="<?php if(isset($usuario)) echo $usuario; ?>">
            <label for="clave">Clave: </label>
            <input type="password" id="clave" name="clave">
            <input type="submit" value="Iniciar Sesión">
        </form>
    </body>
</html>