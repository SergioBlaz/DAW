<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Listin Telefonico</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            section{
                display: flex;
            }
            form{
                align-self: center;
            }
            input{
                margin: 3px;
                align-self: center;
            }
            fieldset{
                width: 15%;
            }
        </style>
    </head>
    <body>
        <?php
            //Si el listado existe lo cuenta        
            if(!empty($_POST['personas'])){
                $listin = explode(",", $_POST['personas']);
                $posicion = count($listin);
                
            //Si no, lo crea de nuevo                
            } else {
              $listin= array();  
              $posicion=0;
              
            } 
            //Si el campo del nombre tiene datos, los guarda en minuscula y comprueba si ya está en el listado              
            if(!empty($_POST['nombre'])){
                $nombre = strtolower($_POST['nombre']);
                $siExiste=existe($listin,$nombre);
                
                //Si el campo del telefono tiene datos, los guarda                
                if(!empty($_POST['numero'])){
                    $telefono = $_POST['numero'];
        
                    //Si el nombre existe, y el campo del numero contiene datos, guarda en la posición correspondiente el numero       
                      if($siExiste || $siExiste === 0){
                        $listin[$siExiste+1]=$telefono;
                        echo "<p>Número de teléfono actualizado correctamente</p><br>";
                        
                      //Si el nombre no existe, guarda los datos de nombre y teléfono               
                      } else {
                          $listin[$posicion]=$nombre;
                          $listin[$posicion+1]=$telefono;
                          echo "<p>Contacto guardado correctamente</p><br>";
                      }
                      
                //Si el campo del telefono está vacío... 
                } else {

                    //Pero el nombre existe en el listado, se elimina tanto el nombre como el número
                    if($siExiste || $siExiste === 0){
                        unset($listin[$siExiste]);
                        unset($listin[$siExiste+1]);
                        echo "<p>Contacto eliminado correctamente</p>";
                        
                    //Si el nombre no existe en el listado, se muestra un error
                    } else {
                        echo "<p>Error. Falta el teléfono</p>";
                    }
                }
                
            //Si el campo del nombre está vacío, se muestra una advertencia      
            } else {
                echo "<p>Error. Falta el nombre</p><br>";
            }
            
            //Se muestra el listado con los datos del la array
            if(count($listin)>0){
                echo "<h1>Listín telefónico</h1>";
                echo "<table><tr><th>Nombre</th><th>Teléfono</th></tr>";
                for ($i=0; $i < count($listin); $i+=2){
                    if($listin[$i]!==null && $listin[$i+1] !==null){
                        echo "<tr><td>".$listin[$i]."</td><td>".$listin[$i+1]."</td></tr>";

                    }
                }
                echo "</table>";
            }
            
            //Función que devulve el false si no se ha encontrado el nombre en la array, y el número correspondiente a la posición si ha encontrado el nombre
            function existe($UnListin,$UnNombre){
               return array_search($UnNombre, $UnListin);
            }
        ?>
        <section>
            <form name="formulario" method= "POST" action="<?php echo  $_SERVER['PHP_SELF']; ?>" >
                 <fieldset>
                   <legend>Añadir persona al listín: </legend>
                   <label for="nombre">Nombre:</label>
                   <input type="text" id="nombre" name="nombre"><br>
                   <label for="numero">Número:</label>
                   <input type="tel" id="numero" name="numero"><br><br>
                   <input name="personas" type="hidden" value="<?php if (isset($array)){ echo implode(",",$array); }?>">
                   <input type="submit" value="Guardar">
                 </fieldset>
             </form>
            <article>
                
            </article>
        </section>
    </body>
</html>