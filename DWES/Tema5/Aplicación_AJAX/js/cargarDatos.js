function cargarCategorias() {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                carritoPerma()
                var cats =  JSON.parse(xhttp.responseText);	
                var lista = document.createElement("ul");			
                for(var i = 0; i < cats.length; i++){
                    var elem = document.createElement("li");
                    //creamos los vínculos de cada categoría
                    var vinculo = document.createElement("a");
                    var ruta = "productos_json.php?categoria=" + cats[i].CodCat;
                    vinculo.href = ruta;
                    vinculo.innerHTML = cats[i].Nombre;
                    vinculo.onclick = function(){return cargarProductos(this);};
                    elem.appendChild(vinculo);
                    lista.appendChild(elem);
                }
                var contenido = document.getElementById("contenido");
                contenido.innerHTML = "";	
                var titulo = document.getElementById("titulo");
                titulo.innerHTML ="Categorías";
                contenido.appendChild(lista);
            }
        };
    xhttp.open("GET", "categorias_json.php", true);
    xhttp.send();
    return false;
}

function cargarProductos(destino){
    var xhttp = new XMLHttpRequest();	
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var prod = document.getElementById("contenido");
            var titulo = document.getElementById("titulo");
            titulo.innerHTML ="Productos";
            try{
                var filas =  JSON.parse(this.responseText);
                // creamos una tabla con los productos de la categoría seleccionada
                var tabla = crearTablaProductos(filas);				
                prod.innerHTML = "";
                prod.appendChild(tabla);												
            }catch(e){
                var mensaje = document.createElement("p");
                mensaje.innerHTML = "Categoría sin productos";
                prod.innerHTML = "";
                prod.appendChild(mensaje);
            }					
        }
    };	
    xhttp.open("GET", destino, true);
    xhttp.send();
    return false;
}
                    
function crearTablaProductos(productos){
    var tabla = document.createElement("table");
    var cabecera = crear_fila(["Código", "Nombre", "Descripción", "Stock", "Comprar"], "th");
    tabla.appendChild(cabecera);
    for(var i = 0; i < productos.length; i++){
        // creamos el formulario para añadir unidades del producto al carrito (mediante la función anadirProductos())
        formu = crearFormulario("Añadir", productos[i].CodProd, anadirProductos); 
        //creamos la fila en la tabla a mostrar con los productos.
        
        //<<-------Si no hay stock no se muestran-------->>
        if(productos[i].Stock > 0){
            fila = crear_fila([productos[i].CodProd, productos[i].Nombre, productos[i].Descripcion, productos[i].Stock], "td");
            celda_form = document.createElement("td");
            celda_form.appendChild(formu);
            fila.appendChild(celda_form);		
            tabla.appendChild(fila);
        }
    }	
    return tabla;		
}

function crearFormulario(texto, cod, funcion){
    var formu = document.createElement("form");		
    var unidades = document.createElement("input");
    unidades.value = 1;
    unidades.name = "unidades";
    var codigo = document.createElement("input");
    codigo.value = cod;
    codigo.type = "hidden";
    codigo.name = "cod";
    var bsubmit = document.createElement("input");
    bsubmit.type = "submit";
    bsubmit.value = texto;
    formu.onsubmit = function(){return funcion(this);};
    formu.appendChild(unidades);
    formu.appendChild(codigo);
    formu.appendChild(bsubmit);
    return formu;
}

function crear_fila(campos, tipo){
    var fila = document.createElement("tr");
    for(var i = 0; i < campos.length; i++){
        var celda = document.createElement(tipo);
        celda.innerHTML = campos[i];
        fila.appendChild(celda);
    }
    return fila;
}

function anadirProductos(formulario){
    var xhttp = new XMLHttpRequest();		
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            alert("Producto añadido con éxito");
            carritoPerma()
//<-----------------------Eliminar para no redirigir al carrito--------------------->
            //cargarCarrito();
        }
    };
    var params = "cod=" + formulario.elements['cod'].value + "&unidades=" + formulario.elements['unidades'].value;
    xhttp.open("POST", "anadir_json.php", true);
    // el envío por POST requiere cabecera y cadena de parámetros
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send(params);	
    return false;
}

function cargarCarrito(){
    var xhttp = new XMLHttpRequest();		
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
                var contenido = document.getElementById("contenido");
                contenido.innerHTML = "";
                var titulo = document.getElementById("titulo");
                titulo.innerHTML = "Carrito de la compra";
                document.getElementById("contenedorCarrito").style.display = "none"
                try{
                    var filas =  JSON.parse(this.responseText);
                    //creamos la tabla de los productos añadidos al carrito
                    tabla = crearTablaCarrito(filas);				
                    contenido.appendChild(tabla);		
                    //añadimos el vínculo de "procesar pedido"
                    var procesar = document.createElement("a");
                    procesar.href ="#";
                    procesar.innerHTML= "Realizar pedido";
                    procesar.onclick = function(){
                        //<<-------Confirmación del pedido a realizar------->>
                        const conf = window.confirm("¿Desea finalizar el pedido?")
                        if(conf){
                            return procesarPedido()
                        } else {
                            document.getElementById("contenido").innerHTML = "Pedido cancelado"
                        }
                    }
                    contenido.appendChild(procesar);
                }catch(e){
                    var mensaje = document.createElement("p");
                    mensaje.innerHTML = "Todavía no tiene productos";
                    contenido.appendChild(mensaje);
                }			

        }
    };
    xhttp.open("GET", "carrito_json.php", true);
    xhttp.send();
    return false;
}

function crearTablaCarrito(productos){
    var tabla = document.createElement("table");
    var cabecera = 	crear_fila(["Código", "Nombre", "Descripción", "Unidades", "Eliminar"], "th");
    tabla.appendChild(cabecera);
    for(var i = 0; i < productos.length; i++){
        //creamos el formulario que se muestra en el carrito con la opción de eliminar prodcutos
        formu = crearFormulario("Eliminar", productos[i].CodProd, eliminarProductos);
        //creamos la fila con los productos que contiene el carrito
        fila = crear_fila([productos[i].CodProd, productos[i].Nombre, productos[i].Descripcion,productos[i].unidades], "td");
        celda_form = document.createElement("td");
        celda_form.appendChild(formu);
        fila.appendChild(celda_form);		
        tabla.appendChild(fila);		
    }						
    return tabla;
}

function eliminarProductos(formulario){
    var xhttp = new XMLHttpRequest();		
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {                                
            cargarCarrito();
            alert("Producto eliminado con éxito");
        }
    };
    var params = "cod=" + formulario.elements['cod'].value +  "&unidades=" + formulario.elements['unidades'].value;
    xhttp.open("POST", "eliminar_json.php", true);	
    
    // el envío por POST requiere cabecera y cadena de parámetros
    xhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhttp.send(params);	
    return false;
}

function procesarPedido(){
    var xhttp = new XMLHttpRequest();		
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contenedorCarrito").style.display = "none"
            var contenido = document.getElementById("contenido");
            contenido.innerHTML = "";
            var titulo = document.getElementById("titulo");
            titulo.innerHTML ="Estado del pedido";
            if(this.responseText=="TRUE"){
                contenido.innerHTML = "Pedido realizado";
            }else{
                contenido.innerHTML = "Error al procesar el pedido";
            }
        }
    };
    xhttp.open("GET", "procesar_pedido_json.php", true);
    xhttp.send();
    return false;
}

//Función asincrona para recoger los pedidos de la base de datos
const cargarPedidos = async () => {
    const respuesta = await fetch('pedidos_json.php');

    const data = await respuesta.text();

    const pedidos = JSON.parse(data);
    
    document.getElementById("contenedorCarrito").style.display = "none"
    const tablaPedidos = document.createElement("table")
    tablaPedidos.innerHTML = `<thead><th>Numero Pedido</th><th>Fecha</th><th>Enviado</th><th></th></thead>`;
    
    pedidos.map((e)=>{
    e.Enviado == 0 ? enviado = "No" : enviado = "Si"

    
    tablaPedidos.innerHTML += `<tr><td>${e.CodPed}</td><td>${e.Fecha}</td><td>${enviado}</td><td></td></tr>
                                <tr><td></td><th>Producto</th><th>Descripción</th><th>Cantidad</th></tr>
                                <tr><td></td><td>${e.Nombre}</td><td>${e.Descripcion}</td><td>${e.Unidades}</td></tr>`
    })
    document.getElementById("titulo").innerHTML = "Pedidos"
    document.getElementById("contenido").innerHTML = ""
    document.getElementById("contenido").appendChild(tablaPedidos)
    return false
}

//Función para mostrar una lista permanente del carrito de la compra
const carritoPerma = async () => {
    try{
    const respuesta = await fetch('carrito_json.php')
    const data = await respuesta.text()
    const productos = JSON.parse(data)
    const tablaPedidos = document.createElement("table");
    tablaPedidos.innerHTML =`<thead><th>Producto</th><th>Unidades</th></thead>`
    productos.map((e)=>{
        tablaPedidos.innerHTML += `<tr><td>${e.Nombre}</td><td>${e.unidades}</td></tr>`
    })
    document.getElementById("carrito").innerHTML = ""
    document.getElementById("carrito").appendChild(tablaPedidos)
    var procesar = document.createElement("a");
    procesar.href ="#";
    procesar.innerHTML= "Realizar pedido";
    procesar.onclick = function(){
        const conf = window.confirm("¿Desea finalizar el pedido?")
        if(conf){
            return procesarPedido()
        } else {
            document.getElementById("contenido").innerHTML = "Pedido cancelado"
        }
    }
    document.getElementById("carrito").appendChild(procesar);
    document.getElementById("contenedorCarrito").style.display = "block"
    }catch(e){
        document.getElementById("contenedorCarrito").style.display = "block"
        document.getElementById("carrito").innerHTML = `<p>Todavía no tiene productos en el carrito</p>`
    }
}