<?php
    //Comprueba que el usuario haya abierto sesión o redirige
    require_once 'sesiones.php';
    require_once 'bd.php';
    comprobar_sesion();
?>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Confirmación de Pedido</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
    <?php 
        require_once 'cabecera.php';
        echo "<p class=conf-carrito>¿Está seguro de que desea confirmar este pedido?</p>
              <a href='procesar_pedido.php'>Si, confirmar</a> <a href='carrito.php'>No, volver al carrito</a>";
        $productos = cargar_productos(array_keys($_SESSION['carrito']));
        echo "<table>";//Abrir la tabla
        echo "<tr><th>Nombre</th><th>Descripción</th><th>Peso</th><th>Unidades</th></tr>";
        foreach($productos as $producto){
            $cod = $producto['CodProd'];
            $nom = $producto['Nombre'];
            $des = $producto['Descripcion'];
            $peso = $producto['Peso'];
            $unidades = $_SESSION['carrito'][$cod];
            //print_r($producto);
            echo "<tr><td>$nom</td><td>$des</td><td>$peso</td><td>$unidades</td></tr>";
        }
        echo"</table>";
        ?>
        
    </body>
</html>