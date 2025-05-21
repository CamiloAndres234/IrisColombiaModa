document.addEventListener("DOMContentLoaded", function() {
    // **Validación de formulario**
    document.getElementById("enviarBtn").addEventListener("click", function() {
        const email = document.getElementById("email").value; // Captura el valor del campo de correo
        const mensaje = document.getElementById("mensaje-error"); // Ubicación del mensaje de validación
        
        // Expresión regular para validar correos electrónicos
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!regexEmail.test(email)) {
            // Si el correo no cumple la estructura, muestra mensaje de error
            mensaje.textContent = "Correo inválido, intenta nuevamente.";
            mensaje.style.color = "red"; // Cambia el color del mensaje a rojo
        } else {
            // Si el correo es válido, muestra mensaje de éxito
            mensaje.textContent = "Correo enviado correctamente.";
            mensaje.style.color = "green"; // Cambia el color del mensaje a verde
        }
    });
});
document.querySelectorAll("a[href^='#']").forEach(enlace => {
    enlace.addEventListener("click", function(event) {
        event.preventDefault(); // Evita el salto brusco
        const destino = document.querySelector(this.getAttribute("href"));
        destino.scrollIntoView({ behavior: "smooth" }); // Activa el desplazamiento suave
    });
});
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = carrito.reduce((acc, item) => acc + item.precio, 0);

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    let listaCarrito = document.getElementById("carrito");
    listaCarrito.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            eliminarProducto(index);
        });

        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
    });

    document.getElementById("total").textContent = total;
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar productos al carrito
document.querySelectorAll(".agregar").forEach(boton => {
    boton.addEventListener("click", function() {
        let producto = this.parentElement;
        let nombre = producto.getAttribute("data-nombre");
        let precio = parseFloat(producto.getAttribute("data-precio"));

        carrito.push({ nombre, precio });
        total += precio;

        actualizarCarrito();
    });
});

// Eliminar producto del carrito
function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Vaciar carrito
document.getElementById("vaciarCarrito").addEventListener("click", function() {
    carrito = [];
    total = 0;
    actualizarCarrito();
});

// Inicializar el carrito al cargar la página
actualizarCarrito();
