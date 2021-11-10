<?php
    $cadena_conexion = 'mysql:dbname=empresa;host';
    $usuario = 'root';
    $clave = '';
    try{
        //Conexión con la base de datos
        $bd = new PDO($cadena_conexion, $usuario, $clave);
        echo "Conexión realizada con éxito<br>";
        
        //Comenzar la transacción
        $bd->beginTransaction();
        $ins = "insert into usuarios(nombre, clave, rol) values ('Fernando', '33333', '1');";
        $resul = $bd ->query($ins);
        //Se repite la consula pero la segunda falla por que el nombre es unique. 
        $resul = $bd ->query($ins);
        if(!$resul){
            echo "Error: ". print_r($bd->errorInfo());
            //Deshace el primer cambio
            $bd-> rollBack();
            echo "<br>Transacción anulada<br>";
        } else {
            //Si hubiera funcionado correctamente...
            $bd -> commit();
        }
    } catch (PDOException $ex) {
        echo 'Error al conectar: '. $ex->getMessage();
    }
?>