<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $usu = comprobar_usuario($_POST['usuario'], $_POST['clave']);
        
        if($usu == false) {
            
            $err = true;
            
        } else {
            session_start();
            $_SESSION['usuario'] = $_POST['usuario'];            
        }
    }
    
    //Cookie para guardar el usuario y la clave si el cheked está marcado
    if(isset($_POST['recordar'])){
        
        setcookie('userC', $_POST['usuario'], time() + 3600 );
        setcookie('passC', $_POST['clave'], time() + 3600 );
        
        $mensaje = "<p>Hola ".$_COOKIE['userC'].", <br> su útlima visita fue hace poco</p>";    
    } else if(isset($_POST['salir'])){
        session_destroy();
    }
    
    /* Función para comprobar que el usuario y la clave introducidos 
     * están el la lista, los almacena y los devuelve, si no, devuelve false
     */
    function comprobar_usuario($usuario,$clave){
        if($usuario === "juan" and $clave === "1234"){
            $usu['nombre'] = "juan";
            $usu['rol'] = 0;
            return $usu;
        }elseif($usuario ==="antonio" and $clave=== "1234"){
            $usu['nombre'] = "antonio";
            $usu['rol'] = 1;
            return $usu;
        }elseif($usuario ==="pepe" and $clave=== "1234"){
            $usu['nombre'] = "pepe";
            $usu['rol'] = 2;
            return $usu;
        }elseif($usuario ==="manolo" and $clave=== "1234"){
            $usu['nombre'] = "manolo";
            $usu['rol'] = 3;
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
        <style>
            h1{
                font-size: 35;
                font-style: italic;
                margin-left: 75px;
            }
            form{
                background-color: lightcyan;
                padding: 6px;
                width: 350px;
                box-shadow: 12px 12px 6px 6px rgba(0,0,0,0.4);
            }
            label{
                padding: 5px;
                font-family: sans-serif;
            }
            input:hover{
                background-color: lightgray;
            }
            input{
                padding: 5px;
                margin-bottom: 3px;
                margin-top: 3px;
            }
        </style>
    </head>
    <body><?php
            if($_POST['recordar'] != true) { ?>
                    <h1>Formulario</h1>
                    <form action="<?php $_SERVER['PHP_SELF']?>" method="POST">
                        <label for="usuario">Usuario:</label>
                        <input value="<?php if(isset($_COOKIE['userC']))echo $_COOKIE['userC'];?>" type="text" name="usuario" id="usuario"><br>
                        <label for="clave">Contraseña:</label>
                        <input value="<?php if(isset($_COOKIE['passC']))echo $_COOKIE['passC'];?>" type="password" name="clave" id="clave"><br>
                        <label for="recordar">Recordarme</label>
                        <input type="checkbox" name="recordar" value="recordar"><br>
                        <input type="submit" value="Acceder">
                    </form>
        <?php
            } else {
            ?>
        <div>
            <form action="registrado.php" method="POST">
                <?php
                echo $mensaje; ?>
                <input type="submit" value ="Acceder">
                <input type="button" name="salir" value="Salir">
            </form>
            <?php } ?>
        </div>
    </body>
</html>