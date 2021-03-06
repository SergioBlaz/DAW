<?php 
    //Comprubeba que el usuario haya abierto sesión o redirige
    require_once 'sesiones.php';
    require_once 'bd.php';
    comprobar_sesion();
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Lista de categorías</title>
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <?php require_once 'cabecera.php'; ?>
        <div class="header-table">
        <h1>Lista de categorías</h1>
        </div>
        <!--Lista de vínculos con la forma productos.php?categoria=1-->
        <?php 
        $categorias = cargar_categorias();
        if($categorias===false){
            echo "<p class='error'>Error al conectar con la base de datos</p>";
        } else {
            echo "<ul>"; //Abrir la lista
            foreach($categorias as $cat){
                //$cat['nombre'] $cat['codCat']
                $url = "productos.php?categoria=".$cat['CodCat'];
                echo "<li><a href='$url'>".$cat['Nombre']."</a></li>";
            }
            echo "</ul>";
        }
        ?>
        
    </body>
</html>