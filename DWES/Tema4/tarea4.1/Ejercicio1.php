<?php
 
    $contenido1 = file_get_contents("Ejercicio01.0.txt");
    
    $contenido2 = file_get_contents("Ejercicio01.1.txt");

    $contenido3 = $contenido1.$contenido2;

    $fichero3 = file_put_contents("Ejercicio01.2.txt","$contenido3");

?>