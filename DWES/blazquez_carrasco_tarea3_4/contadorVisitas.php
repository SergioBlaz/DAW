<html>
    <head>
        <meta CONTENT="text/html; charset=UTF-8" http-equiv="Content-Type"/>
        <title>Contador Visitas</title>
    </head>
    <body>
    <?php
    if($_POST["submit"]=="borrar") {
        unset($_COOKIE['contador']);
        setcookie('contador',1,time()+3600);
        $mensaje = "Visitas Borradas";
    }else{
        if(!isset($_COOKIE['contador']))
        {
            setcookie('contador',1,time()+3600);
            $mensaje = "Primera visita";
        }else{
            setcookie('contador', $_COOKIE['contador']+1,time()+3600);
            $mensaje = "Numero de visita:".$_COOKIE['contador'];
        }
    }
    ?>
    <p><?php echo $mensaje?></p>
        <form action="" method="post">
            <input type="submit" name="submit" value="borrar" >
        </form>
    </body>
</html>