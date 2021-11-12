<?php
    $cadena_conexion = 'mysql:dbname=empresa;host';
    $usuario = 'root';
    $clave = '';
    try {
        
        //Conectar
        $bd = new PDO($cadena_conexion, $usuario, $clave);
        echo "Conexión realizada con éxito"."<br>";
        
        
        //Insertar nuevo usuario
        $ins = "insert into usuarios(nombre, clave, rol) values ('Alberto','33333','1');";
        $resul = $bd->query($ins);
        
        //Comprobar errores de inserción.
        if($resul) {
            echo "insert correcto<br>";
            echo "Filas insertadas: ". $resul->rowCount() . "<br>";
        } else {
            print_r($bd ->errorInfo());
        }
        
        //Comprobar autoincremento
        echo "Código de la fila insertada". $bd ->lastInsertId(). "<br>";
        
        //Actualizar en usuarios
        $update = "update usuarios set rol = 0 where rol = 1";
        $resul = $bd ->query($update);
        
        //Comprobar errores de actualización.
        if($resul){
            echo "update correcto <br>";
            echo "Filas actualizadas: ". $resul->rowCount() . "<br>";
        } else {
            print_r($bd ->errorInfo());
        }
        
        //Borrar en usuarios
        $delete = "delete from usuarios where nombre = 'Alberto'";
        $resul = $bd->query($delete);
        
        //Comprobar errores de borrado
        if($resul){
            echo "delete correcto<br>";
            echo "Filas borradas: ". $resul ->rowCount() . "<br>";
        } else {
            print_r($bd -> errorinfo());
        }
        
        //Consulta/Muestra de usuarios
        $sql = 'SELECT nombre, clave, rol FROM usuarios';
        $usuarios = $bd -> query($sql);
        echo "El número de usuarios alamcenados en la base de datos es: ";    
        echo $usuarios ->rowCount()."<br>";
        foreach ($usuarios as $row){
            print $row['nombre']." ";
            print $row['clave'] . "<br>";
        }
        
        
    } catch (PDOException $e){
        
        echo "Error con la base de datos: " . $e->getMessage();
        
    }
?>