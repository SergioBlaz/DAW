<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>
</head>
<body>
<?php
    function showFile($name){
        $dataFile=file("$name");
        echo "<p><b>". $name . ":</b></p>";
        echo "<textarea readonly rows=10 cols=80>";
        for($i=0; $i<count($dataFile); $i++){
            echo "$dataFile[$i]";
        }
        echo "</textarea>";
    }

    function start(&$time){
        for($i=0; $i<30; $i++){
            $time[$i]=0;
        }
    }

    function calcTime($time1, $time2){
        $a = explode(":",$time1);
        $h1 = (int) $a[0];
        $m1 = (int) $a[1];
        $a = explode(":",$time2);
        $h2 = (int) $a[0];
        $m2 = (int) $a[1];
        return (($h2-$h1)*60)+($m2-$m1);
    }

    function writeMaxTimes($time, $email){
        $goods = fopen("buenos.txt","w");
        $timeMax = calcMaxTime($time);
        for($i=1; $i<30; $i++){
            if($time[$i]==$timeMax){
                fwrite($goods, "$i\t$email[$i]\n");
            }
        }
        fclose($goods);
    }

    function calcMaxTime($time){
        $max = $time[0];
        for($i=1; $i<30; $i++){
            if($max<$time[$i]){
                $max = $time[$i];
            }
        }
        return $max;
    }
    
    function writeNulls($time){
        $bads = fopen("malos.txt","w");
        for($i=0; $i<30; $i++){
            if($time[$i]==0){
                fwrite($bads, "$i,");
            }
        }
        fclose($bads);
    }

    start($time);
    $dataFiles=file("sesion.txt");
    for($i=0; count($dataFiles); $i++){
        $fields = explode(" ",$dataFiles[$i]);
        $id = $fields[0];
        $email[$id]=$fields[1];
        $tStart = $fields[2];
        $tEnd = $fields[3];
        $time[$id] = $time[$id]+calcTime($tStart, $tEnd);
    }
    writeMaxTimes($time,$email);
    writeNulls($time);
    showFile("sesion.txt");
    showFile("buenos.txt");
    showFile("malos.txt");
?>  
</body>
</html>
  
