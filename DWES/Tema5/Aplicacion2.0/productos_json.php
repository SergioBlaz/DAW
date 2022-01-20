<?php
    require 'bd.php';
    require 'sesiones_json.php';
    if(!comprobar_sesion()) return;
    $productos_array = [];
    $productos = cargar_productos_categorias($GET['categorias']);
    $cat_json = json_encode(iterator_to_array($productos), true);
    echo $cat_json;
?>