<?php 
    
    $fichero = fopen("tutorias.txt","r");
    $tutorias = array();
    
    while( !feof($fichero)){
        $num = fscanf($fichero, "%d %[^d,d]", $id, $tmp);
        $tutorias[] = [$id => (float)$tmp];
    }
    
    foreach($tutorias as $k=>$subArray){
        foreach($subArray as $id=>$value);{
            $alumnos[$id]+=$value;
        }
    }

    arsort($alumnos);
    echo "Estos son los alumnos que no han asistido a ninguna tutoría:<br>";
    for($i = 0; $i<41; $i++){
        if(!array_key_exists($i,$alumnos)){
            print($i." ");
        }
    }

    echo "Estos son los alumnos que más tiempo han estado en una tutoria: ";
    echo $alumnos[0].", ".$alumnos[1];
?>