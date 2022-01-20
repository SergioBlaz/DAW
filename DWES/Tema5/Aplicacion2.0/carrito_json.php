<?php
    require 'sesiones_json.php';
    require 'bd.php';
    if(!comprobar_sesion()) return;
    $productos = cargar_productos(array_keys($_SESSION['carrito']));
    $productos = iterator_to_array($productos);
    foreach($productos as $producto){
        $cod = $prodducto['CodProd'];
        $producto['unidades'] = $_SESSION['carrito'][$cod];
    }

    echo json_encode($productos);
?>