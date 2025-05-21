document.addEventListener("DOMContentLoaded", function() {
    // **Validación de formulario**
    document.getElementById("enviarBtn").addEventListener("click", function() {
        const email = document.getElementById("email").value; // Captura el correo ingresado
        const mensaje = document.getElementById("mensaje-error"); // Ubicación del mensaje de error
        
        // Expresión regular para validar correos electrónicos
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!regexEmail.test(email)) {
            mensaje.textContent = "Correo inválido, intenta nuevamente.";
            mensaje.style.color = "red"; // Muestra el mensaje en rojo si el correo es incorrecto
        } else {
            mensaje.textContent = "Correo enviado correctamente.";
            mensaje.style.color = "green"; // Muestra el mensaje en verde si el correo es válido
        }
    });
