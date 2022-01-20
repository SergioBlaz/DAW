<?php
    require 'sesiones_json.php';
    require 'bd.php';
    if(!comprobar_sesion()) return;
    $categorias = cargar_categorias();
    $cat_json = json_encode(iterator_to_array($categorias));
    echo $cat_json;
?>