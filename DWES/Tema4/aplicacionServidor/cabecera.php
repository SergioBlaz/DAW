<header>
    Usuario: <?php  if(isset($_SESSION['nombreUsuario'])) echo $_SESSION['nombreUsuario']; ?><br>
    <a href="categorias.php">Home</a>
    <a href="carrito.php">Ver Carrito</a>
    <a href="logout.php">Cerrar sesión</a>
</header>
<hr>