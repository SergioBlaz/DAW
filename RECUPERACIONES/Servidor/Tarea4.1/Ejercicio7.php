<?php
    $numeros = file("numeros.txt");
    $pares = fopen("pares.txt","w");
    $impares = fopen("impares.txt","w");

    for($i=0; $i<count($numeros); $i++){
        if((int)$numeros[$i]%2 === 0){
            fwrite($pares, "$numeros[$i]");
        } else {
            fwrite($impares, "$numeros[$i]");
        }
    }
    
    fclose($pares);
    fclose($impares);

?>