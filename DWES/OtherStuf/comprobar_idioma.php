<?php
    print_r($_COOKIE)."<br>";
    if(!isset($_COOKIE["idioma"])){
        setcookie("idioma",$_POST["lenguage"], time() + 1000);
        if($_POST["lenguage"]=="English") echo "Welcome!";
        if($_POST["lenguage"]=="Spanish") echo "Hola!";
        if($_POST["lenguage"]=="Other") echo "Error";
        
    } else {
        if($_COOKIE["idioma"]==="English"){
            echo "Welcome Welcome";
        } else if($_COOKIE["idioma"]==="Spanish"){
            echo "Bienvenido Bienvenido";
        } else {
            echo "Error. Lenguage not supported.";
        }
    }
    
    if(isset($_POST['delete'])){ 
        setcookie("idioma","", time() - 3600);
        header('Location: index.php');
    }
?>