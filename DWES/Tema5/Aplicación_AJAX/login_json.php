<?php
    require_once 'bd.php';
    /*formulario de login habitual
    si va bien abre sesión, guarda el nombre de usuario, y 
    si va mal, mensaje de error */
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $usu = comprobar_usuario($_POST['usuario'], $_POST['clave']);
        $codRest = usuario($_POST['usuario']);
        if($usu===FALSE){
            echo "FALSE";
        }else{
            session_start();
            // $usu tiene campos correo y codRes, correo 
            $_SESSION['usuario'] = $usu;
            $_SESSION['carrito'] = [];
            $_SESSION['codres'] = $codRest;
            echo "TRUE";
        }	
    }