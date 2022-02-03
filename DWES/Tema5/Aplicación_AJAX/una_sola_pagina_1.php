<!DOCTYPE html>
<html>
    <head>
        <title>Formulario de login</title>
        <meta charset = "UTF-8">
        <script type = "text/javascript" src = "js/sesion.js"></script>
        <script type = "text/javascript" src = "js/cargarDatos.js"></script>
        <link rel="stylesheet" href="./css/styles.css">
    </head>	
    <body>		
        <section id = "login">
            <form onsubmit="return login()" method = "POST">
                <label for="usuario">Usuario:</label>
                <input id = "usuario" type = "text">			
                <label for="clave">Clave:</label>
                <input id = "clave" type = "password">					
                <input type = "submit" value="Entrar">
            </form>
        </section>
        <section id = "principal" style="display:none">
            <header>
                <?php require 'cabecera_json.php'; ?>
            </header>
            <div id="contenedorContenido">
                <h2 id = "titulo"></h2>
                <section id = "contenido"></section>
            </div>
            <div id="contenedorCarrito">			
                <section id = "carrito"></section>
            </div>
        </section>
    </body>
</html>
