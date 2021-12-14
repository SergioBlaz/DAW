<?php 
    define("CADENA_CONEXION", 'mysql:dbname=pedidos;host=127.0.0.1');
    define("USUARIO_CONEXION", 'root');
    define("CLAVE_CONEXION", '');

    function getProductos(){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
            $ins = "SELECT * FROM productos ";
            $resul = $bd->query($ins);
            if(!$resul){
                return false;
            }
            if($resul->rowCount()===0){
                return false;
            }
            return $resul;
        } catch (PDOException $e){
            echo 'Error con la base de datos: '.$e->getMessage();
        }
    }
    echo getProductos();

?>