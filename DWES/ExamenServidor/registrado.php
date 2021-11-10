<?php
    session_start();
    if(!isset($_SESSION['usuario'])){
        session_destroy();
        header("Location: index.php");
    }
    if($_POST['salir'] == true){
        header("Location: index.php");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Registrado</title>
        <meta chaset ="UTF-8">
        <style>
            table{
                border-collapse: collapse;
                box-shadow: 12px 12px 6px 6px rgba(0,0,0,0.4);
            }
            h1{
                font-size: 35;
                font-style: italic;
                margin-left: 125px;
            }
        </style>
    </head>
    <body>
        <?php echo "<h1>Bienvenido ".$_SESSION['usuario']."</h1>";?>
        <table border="collapse">
            <thead>
                <tr>
                    <th colspan="4"><?php echo $_SESSION['usuario']?></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="2">Equipo de fútbol favorito</td>
                    <td rowspan="2">Deporte Favorito</td>
                    <td colspan="3">Moto/Coche Favorito</td>
                    
                </tr>
                <tr>
                    <td>Marca</td>
                    <td>Modelo</td>

                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

    </body>
</html>

