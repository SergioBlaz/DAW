<?php 
    $fichero = file_get_contents("dos.txt","r");

    echo "<p>La cantidad de palabras en el fichero son ".str_word_count($fichero, 0)." </p>";

    fclose($fichero);
?>