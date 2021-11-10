<?php
    $nombre = trim($_GET["nombre"],"/");
    echo $nombre."<br>";
    
    echo strlen($nombre)."<br>";
    
    echo strtoupper($nombre)."<br>";
    
    echo strtolower($nombre)."<br>";
    
    if(isset($_GET["prefijo"])){
        
        $pref = $_GET["prefijo"];
        $pos = strpos($nombre, $pref);
        
        if($pos !== false && $pos == 0){
            echo "Si<br>";
            
        } else {
            
            echo "No<br>";
        }
    }
    
    echo substr_count($nombre, "e")."<br>";
    
    $pos1 = stripos($nombre, "i");
    
    if($pos1 !== false){
        echo "Se ha encontrado en la posición $pos1 <br>";
    } else {
        echo "No se ha encontrado nada <br>";
    }
    
    echo str_replace("o", "0",$nombre)."<br>";
    
    $url = 'http://username:password@hostname:9090/path?arg=value';
    
    echo parse_url($url, PHP_URL_SCHEME)."<br>";
    echo parse_url($url, PHP_URL_USER)."<br>";
    echo parse_url($url, PHP_URL_PATH)."<br>";
    echo parse_url($url, PHP_URL_QUERY)."<br>";
    
?>
