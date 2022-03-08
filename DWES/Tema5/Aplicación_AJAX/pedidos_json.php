<?php

define("CADENA_CONEXION", 'mysql:dbname=pedidos;host=127.0.0.1');
define("USUARIO_CONEXION", 'root');
define("CLAVE_CONEXION", '');

function cargar_pedidos($codRes){
    try{
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);
        $ins = "SELECT p.CodPed,p.Fecha,p.Enviado,pP.Unidades,pr.Nombre,pr.Descripcion
                FROM pedidos p, pedidosproductos pP, productos pr
                WHERE p.Restaurante=$codRes AND p.CodPed=pP.CodPed AND pP.CodProd=pr.CodProd
                ORDER BY p.CodPed DESC";
        $resul = $bd->query($ins);
        if(!$resul){
            return FALSE;
        }
        if($resul->rowCount() === 0){
            return FALSE;
        }
        return $resul;
    } catch (PDOException $ex) {
        echo "Error con la base de datos: " . $ex->getMessage();
    }
}
session_start();
$pedidos=cargar_pedidos($_SESSION['codres']);
$json = json_encode(iterator_to_array($pedidos), true);
echo $json;