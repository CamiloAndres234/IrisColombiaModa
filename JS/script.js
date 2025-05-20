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

    // **Despliegue dinámico de contenido**
    document.getElementById("boton").addEventListener("click", function() {
        const nuevoElemento = document.createElement("p");
        nuevoElemento.textContent = "¡Nuevo contenido agregado!";
        document.getElementById("contenedor").appendChild(nuevoElemento);
    });

    // **Slider de imágenes**
    let slides = document.querySelectorAll(".slide");
    let index = 0;

    setInterval(() => {
        slides.forEach(slide => slide.classList.remove("active"));
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 3000);

    // **Contador de visitas**
    let contador = localStorage.getItem("visitas") || 0;
    contador++;
    localStorage.setItem("visitas", contador);
    document.getElementById("contador").textContent = contador;
});
