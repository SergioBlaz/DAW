<?php
    define("CADENA_CONEXION", 'mysql:dbname=pedidos;host=127.0.0.1');
    define("USUARIO_CONEXION", 'root');
    define("CLAVE_CONEXION", '');

    function comprobar_usuario($nombre, $clave){
        try{

            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

            $ins = "SELECT CodRes, Correo FROM restaurantes WHERE Correo ='$nombre' and Clave='$clave'";
            $resul = $bd -> query($ins);
            if($resul -> rowCount() === 1){
                return true;
            } else {
                return false;
            }
        } catch (PDOException $e){
            echo 'Error con la base de datos: '.$e->getMessage();
        }

    }

    function cargar_categorias(){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
            
            $ins = "SELECT CodCat, Nombre FROM categorias";
            
            $resul = $bd->query($ins);

            if(!$resul){
                return false;
            }
            if($resul->rowCount() === 0) {
                return false;
            }

            return $resul;

        } catch(PDOException $e) {
            echo 'Error con la base de datos: '.$e->getMessage();
        }
    }
    function cargar_categoria($codCat){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
            
            $ins = "SELECT Nombre, Descripcion FROM categorias WHERE CodCat=$codCat";
            
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

    function cargar_productos_categorias($codCat){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
            $ins = "SELECT * FROM productos WHERE CodCat=$codCat";
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

    function cargar_productos($codigosProductos){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

            $texto_in = implode(",",$codigosProductos);

            $ins = "SELECT * FROM productos WHERE CodProd in ($texto_in)";
            
            $resul = $bd->query($ins);
            if(!$resul) {
                return false;
            }
            return $resul;
        } catch (PDOException $e){
            echo 'Error con la base de datos: '.$e->getMessage();
        }
    }

    function insertar_pedido($carrito, $codRes){
        try{
            $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
            
            $bd->beginTransaction();
            
            $hora = date("Y-m-d H:i:s",time());

            $ins="INSERT into pedidos(Fecha, Enviado, Restaurantes) values ('$hora',0,$codRes)";
            
            $resul=$bd->query($ins);
            
            if(!$resul) {
                return false;
            }

            $pedido = $bd->lastInsertId();
            
            foreach($carrito as $codProd=>$unidades) {
                $ins = "INSERT into pedidosproductos(CodPed, CodProd, Unidades) VALUES ($pedido, $codProd,$unidades)";
                
                $upd = "UPDATE productos SET Stock=Stock-$unidades WHERE CodProd=$codProd";

                $resul1 = $bd->query($upd);

                $resul = $bd->query($ins);
                
                if(!$resul or !$resul1){
                    $bd->rollBack();
                    return false;
                }

            }
            $bd->commit();
            return $pedido;

        } catch (PDOException $e){
            echo 'Error con la base de datos: '.$e->getMessage();
        }
    }

?>