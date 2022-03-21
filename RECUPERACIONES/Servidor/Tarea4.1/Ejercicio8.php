<?php
    function empezar(&$tiempo){
        for ($i=0; $i<30; $i++){
            $tiempo[$i]=0;
        }
    }

    function seg($tiempo1, $tiempo2){
        $auxiliar=explode(":",$tiempo1);
        $hora1=(int)$auxiliar[0];
        $minuto1=(int)$auxiliar[1];
        $auxiliar=explode(":",$tiempo2);
        $hora2=(int)$auxiliar[0];
        $minuto2=(int)$auxiliar[1];
        $resultado = (($hora2-$hora1)*60)+($minuto2-$minuto1);
        return $resultado;
    }

    function writeMax($tiempo, $email){
        $fbuenos = fopen("buenos.txt","w");
        $maximo = calcMax($tiempo);
        for($i=0; $i<30; $i++){
            if($tiempo[$i]==$maximo){
                fwrite($fbuenos, "$i\t$email[$i]\n");
            }
        }
        fclose($fbuenos);
    }

    function calcMax($tiempo){
        $max=$tiempo[0];
        for($i=1; $i<30; $i++){
            if($max< $tiempo[$i]){
                $max=$tiempo[$i];
            }
        }
        return $max;
    }

    function writeNull($tiempo){
        $fmalos = fopen("malos.txt","w");
        for($i=0; $i<30; $i++){
            if($tiempo[$i]===0){
                fwrite($fmalos, "$i, ");
            }
        }
        fclose($fmalos);
    }
    empezar($tiempo);
    $sesion = file("sesion.txt");
    for($i=0; $i<count($sesion); $i++){
        $Campos=explode("\t",$sesion[$i]);
        $id=$Campos[0];
        $email[$id] = $Campos[1];
        $tEntrada=$Campos[2];
        $tSalida=$Campos[3];
        $tiempo[$id]=$tiempo[$id]+seg($tEntrada,$tSalida);
    }
    writeMax($tiempo,$email);
    writeNull($tiempo);
?>