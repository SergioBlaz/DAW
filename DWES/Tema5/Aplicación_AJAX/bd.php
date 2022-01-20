<?php

define("CADENA_CONEXION", 'mysql:dbname=pedidos;host=127.0.0.1');
define("USUARIO_CONEXION", 'root');
define("CLAVE_CONEXION", '');

function comprobar_usuario($nombre, $clave){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT CodRes, Correo FROM restaurantes WHERE Correo='$nombre' and Clave = '$clave'";
        $resul = $bd->query($ins);
        if($resul ->rowCount() === 1){
            return TRUE;
        }
        else{
            return FALSE;
        }
    } catch (Exception $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}
function usuario($nombre){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT CodRes FROM restaurantes WHERE Correo='$nombre'";
        $resul = $bd->query($ins);
        if($resul ->rowCount() === 1){
            $rest = $resul ->fetch();
            return $rest['CodRes'];
        }
        else{
            return FALSE;
        }
        
    } catch (Exception $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}

function cargar_categorias(){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT CodCat, Nombre FROM categoria";
        $resul = $bd->query($ins);
        if(!$resul){
            return FALSE;            
        }
        if($resul->rowCount() === 0){
            return FALSE;
        }
        //echo "<h2>". $resul ."</h2>";
        //echo "";
        return $resul;
    } catch (Exception $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}

function cargar_categoria($codCat){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT Nombre, Descripcion FROM categoria WHERE CodCat=$codCat";
        $resul = $bd->query($ins);
        
        if (!$resul) {
            return FALSE;
        }
        
        if ($resul->rowCount() === 0) {
            return FALSE;
        }
        // si hay 1 o más
        return $resul;
    } catch (PDOException $ex) {
        echo 'Error con la base de datos: ' .$ex->getMessage();
    }
}

function cargar_productos_categoria($codCat){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT * FROM productos WHERE CodCat=$codCat";
        $resul = $bd->query($ins);
        if(!$resul){
            return FALSE;
        }
        if($resul->rowCount() === 0){
            return FALSE;
        }
        return $resul;
    } catch (Exception $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}
function cargar_productos($codigosProductos){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $texto_in = implode(",", $codigosProductos);
        $ins = "SELECT * FROM productos WHERE CodProd in($texto_in)";
        $resul = $bd->query($ins);
        if(!$resul){
            return FALSE;
        }
        return $resul;
    } catch (PDOException $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}
function insertar_pedido($carrito, $codRes){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $bd->beginTransaction();
        $hora = date("Y-m-d H:i:s", time());
        $sql = "INSERT into pedidos(Fecha, Enviado, Restaurante) VALUES ('$hora', 0, $codRes)";
        $resul = $bd->query($sql);
        if(!$resul){
            return FALSE;
        }
        $pedido = $bd->lastInsertId();
        foreach($carrito as $codProd=>$unidades){
            $ins = "INSERT into pedidosproductos(CodPed, CodProd, Unidades) VALUES ($pedido, $codProd, $unidades)";
            $resul = $bd->query($ins);
            if(!$resul){
                $bd->rollBack();
                return FALSE;
            }
        }
        $bd->commit();
        return $pedido;
    } catch (Exception $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();

    }
}

