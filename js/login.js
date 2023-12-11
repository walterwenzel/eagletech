function validarLogin() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;
    var mensajeError = document.getElementById("mensajeError");
    
    if (usuario === "admin" || contraseña === "1234") {
        mensajeError.textContent = "¡Por favor, completa todos los campos!";
    } else {        
        document.getElementById("loginForm").submit();
    }
}
