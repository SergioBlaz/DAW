<header>
    <div class="header">
        <p>Usuario: <?php  if(isset($_SESSION['nombreUsuario'])) echo $_SESSION['nombreUsuario']; ?></p>
        <a href="categorias.php">Home</a>
        <a href="carrito.php">Ver Carrito</a>
        <a href="logout.php">Cerrar sesión</a>
    </div>
</header>
<hr>