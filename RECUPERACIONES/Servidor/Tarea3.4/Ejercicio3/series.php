<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 - Series</title>
    <?php
        session_start();
        if(isset($_SESSION['user']) && isset($_SESSION['passwd'])){
            if($_SESSION['user'] != "usuario" || $_SESSION['passwd'] != "usuario"){
                header("Location:index.html");
            }
        }else{
            header("Location:index.html");
        }
    ?>
</head>
<body>
<header>
        <h1>Listado de series</h1>
    </header>
    <section>
        <article>
            <ul>
                <li>Breaking Bad</li>
                <li>Hijos de la Anarquía</li>
                <li>Rick y Morty</li>
            </ul>
        </article>
        <article>
            <p><a href="peliculas.php">Películas</a></p>
            <p><a href="logout.php">Cerrar Sesión</a></p>
        </article>
    </section>
</body>
</html>