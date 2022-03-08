<?php
    $cat1 = array("cod" => 1, "nombre"=>"comida");
    $cat2 = array("cod" => 2, "nombre"=>"bebida");
    $array= array($cat1, $cat2);
    $json = json_encode($array);
    echo $json;
    