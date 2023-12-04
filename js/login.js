function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var mensajeError = document.getElementById("mensajeError");

    // Lógica de validación simple (puedes personalizarla según tus necesidades)
    if (usuario === "admin" || contraseña === "1234") {
        mensajeError.textContent = "¡Por favor, completa todos los campos!";
    } else {
        // Envía el formulario si la validación es exitosa
        document.getElementById("loginForm").submit();
    }
}