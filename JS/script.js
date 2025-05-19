document.getElementById("boton").addEventListener("click", function() {
    const nuevoElemento = document.createElement("p");
    nuevoElemento.textContent = "¡Contenido dinámico agregado!";
    document.getElementById("contenedor").appendChild(nuevoElemento);
});
