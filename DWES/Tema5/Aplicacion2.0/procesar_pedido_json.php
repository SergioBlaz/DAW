<?php   
    require 'bd.php';
    require 'sesiones_json.php';

    if(!comprobar_sesion()) return;

    $resul = insertar_pedido($_SESSION['carrito'],$_SESSION['usuario']['codRes']);
    if($resul === FALSE){
        echo "FAlSE";
    } else {
        echo "TRUE";

        $_SESSION['carrito'] = [];
    }

?>