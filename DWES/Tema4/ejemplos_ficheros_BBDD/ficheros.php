<?php 

    //con fopen() accedemos de forma tanto relativa como absoluta al fichero que deseamos abrir.
    $fichero = fopen("/media/ciclost/Sergio_HDD/2DAW/DWC/RepositorioGit/DWES/BBDD_PHP/fichero_ejemplo.txt", "r");
    if($fichero === False){
       echo "No se encuentra fichero_ejemplo.txt<br>";
    } else {
       echo "fichero_ejemplo.txt se abrió correctamente. <br>";
    }
    //En este caso el fichero no existe por lo tanto nos muestra un mensaje de error.
    $fichero2 = fopen("fichero_no_existe.txt", "r");
    if($fichero2 === False){
        echo "No se encuentra fichero_no_existe.txt<br>";
    } else {
        echo "fichero_no_existe.txt se abrió correctamente. <br>";
    }

    //Ahora abrimos el mismo fichero.
    $fichero3 = fopen("fichero_ejemplo.txt", "r");
    if($fichero3 === false){
        echo "No se encuentra el fichero o ne pudo leer<br>";
    } else {
        //Ahora recorremos el fichero (!feof($fichero3)) y guardamos todos los caracteres que contiene
        //con fgetc($fichero3).
        while ( !feof($fichero3)) {
            $caracter = fgetc($fichero3);
            echo $caracter;
        }
    }
    fclose($fichero3);

    //Ficheros con formato
    //Abrimos el fichero
    $fichero4 = fopen("matriz.txt", "r");
    if ($fichero4 === false) {
        echo "No se encuentra el fichero matriz.txt o no se puede leer";
    } else {
        //Lo recorremos  y guardamos por cada linea los numeros (%d) y los guardamos en una array
        //para mostrarla después. 
        while ( !feof($fichero4)) {
            $num = fscanf($fichero4, "%d %d %d %d");
            echo "$num[0] $num[1] $num[2] $num[3] <br>";
        }

    }
    //Reestablecemos el fichero(rebobinamos?)
    rewind($fichero4);
    //Esta vez lo recorremos y guadamos cada numero en una variable diferente para mostrarlos.
    while( !feof($fichero4)){
        $num = fscanf($fichero4, "%d %d %d %d", $num1, $num2, $num3, $num4);
        echo "$num1, $num2, $num3, $num4 <br>";
    }

    //Otras funciones de los ficheros.
    //Con este comando extraemos el contenido del fichero indicado.
    $contenido = file_get_contents("fichero_ejemplo.txt");
    echo "Contenido del fichero: $contenido<br>";
    
    //Con este comando primero si no existe el fichero, se crea y luego sobreescribe el contenido de este.
    $res = file_put_contents("fichero_salida.txt", "Fichero creado con file_put_contents.");
    if($res) {
        echo "Fichero creado con éxito.";
    } else {
        echo "Error al crear el fichero.";
    }

?>