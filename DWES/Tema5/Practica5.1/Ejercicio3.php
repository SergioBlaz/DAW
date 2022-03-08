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

    $listaProductos = getProductos();
    $productos = [];
    foreach($listaProductos as $producto){

        $codigo=$producto['CodProd'];
        $nombre=$producto['Nombre'];
        $desc=$producto['Descripcion'];
        $peso=$producto['Peso'];
        $stock=$producto['Stock'];
        $codigoCat=$producto['CodCat'];
        
        $productos[] = array("Cod"=> $codigo, "Nombre"=> $nombre, "Descripcion"=> $desc, "Peso"=> $peso, "Stock"=> $stock, "CodigoCat"=> $codigoCat);
          
    }
    $json = json_encode($productos);
    echo $json
?>