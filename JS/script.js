document.addEventListener("DOMContentLoaded", function() {
    // **Validación de formulario**
    document.getElementById("enviarBtn").addEventListener("click", function() {
        const email = document.getElementById("email").value;
        if (!email.includes("@") || !email.includes(".")) {
            alert("Por favor, ingresa un correo válido.");
        } else {
            alert("¡Correo enviado correctamente!");
        }
    });
