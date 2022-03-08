<?php 
    $fichero = fopen("uno.txt","r");
    $numTotales = 0;
    $numPares = 0;

    while( !feof($fichero)){

        $line = fgets($fichero);

        $numero = fgetc($fichero);
        
        if($numero % 2 == 0){

            $numPares++;
        }

        $numTotales++;
    }
    $porcentaje = round((float)$numPares/$numTotales * 100,2);
    echo "<p>El porcentaje de números pares es ".$porcentaje."%.</p>"
?>