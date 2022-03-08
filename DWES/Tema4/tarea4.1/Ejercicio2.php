<?php 
    $fichero = fopen("uno.txt","r");
    $contadorLinea = 0;

    if(isset($_GET["numero"])){
       
        while (!feof($fichero)) {
            
            $line = fgets($fichero);

            if(fgetc($fichero) == $_GET["numero"]){

                echo "El número ".$_GET["numero"]." se ha encontrado en la línea ".$contadorLinea.".<br>";
            }

            $contadorLinea++;
        }
    } else {
        echo "Introduce un número";
    }
    
?>