<?php
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usu = comprobar_usuario($_POST['usuario'], $_POST['clave']);
        if($usu == false) {
            $err = true;
            $usuario = $_POST['usuario'];
        } else {
            session_start();
            $_SESSION['usuario'] = $_POST['usuario'];
            header ("Location: sesiones1_principal.php");
        }
    }
    
    /* Función para comprobar que el usuario y la clave introducidos 
     * son válidos, los almacena y los devuelve, si no, devuelve false
     */
    function comprobar_usuario($usuario,$clave){
        if($usuario === "usuario" and $clave === "1234"){
            $usu['nombre'] = "usuario";
            $usu['rol'] = 0;
            return $usu;
        }elseif($usuario ==="admin" and $clave=== "1234"){
            $usu['nombre'] = "admin";
            $usu['rol'] = 1;
            return $usu;
        } else {
            return false;
        }
    }
?>
<html>
    <head>
        <title>Registro</title>
        <meta chaset ="UTF-8">
    </head>
    <body>
        <h1>Formulario de Registro</h1>
        <form action="sesiones1_login.php" method="POST">
            <label for="usuario">Usuario:</label>
            <input value="<?php if(isset($usuario))echo $usuario;?>" type="text" name="usuario" id="usuario">
            <label for="clave">Contraseña:</label>
            <input type="password" name="clave" id="clave">
            <input type="submit" value="Enviar">
        </form>
    </body>
</html>