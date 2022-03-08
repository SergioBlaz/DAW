<?php
    echo"<h1>Datos introducidos</h1>";
    
    echo "<p>Nombre:       ".$_POST['nombre']."</p>";
    echo "<p>Apellidos:    ".$_POST['apellido1']." ".$_POST['apellido2']."</p>";
    echo "<p>Email:        ".$_POST['email']."</p>";
    echo "<p>Web:          ".$_POST['url']. "</p>";
    echo "<p>Sexo:         ".$_POST['sexo']. "</p>";
    echo "<p>Convivientes: ". $_POST['convivientes']. "</p>";
    echo "<p>Aficiones:    ".$_POST['aficiones']."</p>";
    echo "<p>Menú:         ".$_POST['combo']."</p>";
    
?>