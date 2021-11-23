<?php 
    $fichero = fopen("dos.txt","r");
    $numLineas = 0;
    $numCarac = 0;

    while( !feof($fichero)){
    
        if($linea=fgets($fichero)){
    
            $numLineas++;
    
            $numCarac += strlen($linea);
    
        }
    }
    
    fclose($fichero);
    
    echo "<p>La cantidad de líneas en el fichero es ".$numLineas." y la cantida de caractéres es ".$numCarac." </p>"
?>