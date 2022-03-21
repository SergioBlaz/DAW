<?php
    session_start();
    if(isset($_POST['user'])){
        $_SESSION['user'] = $_POST['user'];
    }
    if(isset($_POST['passwd'])){
        $_SESSION['passwd'] = $_POST['passwd'];
    }

    if(isset($_SESSION['user'])){
        $user = $_SESSION['user'];
    }
    if(isset($_SESSION['passwd'])){
        $pass = $_SESSION['passwd'];
    }

    if($user === "usuario" && $pass === "usuario"){
        header("Location:peliculas.php");
    }else{
        header("Location:index.html");
    }
?>