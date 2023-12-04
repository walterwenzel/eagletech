document.addEventListener("DOMContentLoaded", function () {
    // Ruta al archivo JSON local
    const jsonPath = "./javascrip/comentarios.json";

    // Obtener el contenedor de comentarios
    const comentariosContainer = document.getElementById("comentarios-container");

    // Cargar comentarios desde el archivo JSON
    fetch(jsonPath)
        .then(response => response.json())
        .then(comentarios => {
            // Crear elementos HTML para cada comentario
            comentarios.forEach(comentario => {
                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                tarjeta.innerHTML = `
                    <img src="${comentario.imagen}" alt="${comentario.nombre}">
                    <h4>${comentario.titulo}</h4>
                    <p>${comentario.comentario}</p>
                `;

                // Agregar la tarjeta al contenedor de comentarios
                comentariosContainer.appendChild(tarjeta);
            });
        })
        .catch(error => console.error("Error al cargar comentarios:", error));
});

