<?php 
    //Comprueba que el usuario haya abierto sesión o redirige
    require_once 'sesiones.php';
    require_once 'bd.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Tabla de productos por categoría</title>
    </head>
    <body>
        <?php
            require 'cabecera.php';
            $categorias = cargar_categoria($_GET['categoria']);
            $productos = cargar_productos_categorias($_GET['categoria']);
            if($categorias === false or $productos === false){
                echo "<p class ='error'>Error al conectar con la base de datos</p>";
                exit;
            }
            foreach($categorias as $cat){
            echo "<h1>". $cat['Nombre']. "</h1>";
            echo "<p>".$cat['Descripcion']."</p>";
            echo "<table>";//Abrir la tabla
            echo "<tr><th>Nombre</th><th>Descripción</th><th>Peso</th><th>Stock</th><th>Comprar</th></tr>";
                foreach($productos as $producto){
                    $cod = $producto['CodProd'];
                    $nom = $producto['Nombre'];
                    $des = $producto['Descripcion'];
                    $peso = $producto['Peso'];
                    $stock = $producto['Stock'];
                    if($stock > 0) {
                    echo "<tr>
                            <td>$nom</td>
                            <td>$des</td>
                            <td>$peso</td>
                            <td>$stock</td>
                            <td>
                                <form action='anadir.php' method='POST'>
                                <input type='range' min='1' max='$stock' value='1' name='unidades' id='unidades' oninput='this.nextElementSibling.value = this.value'>
                                <output>1</output>
                                <input type='submit' value='Comprar'>
                                <input type='hidden' name='cod' value='$cod'>
                                </form>
                            </td>
                        </tr>";
                    }
                }
            }
            echo "</table>" ;
        ?>
    </body>
</html>