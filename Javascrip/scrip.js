function validacion() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var mensaje = document.getElementById("mensaje").value;
   
       if (nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
         // Si no se cumple la condicion...
         alert("nombre invalido");
         return false;
       }
       else if (!(/^\d{10}$/.test(telefono))) {
         // Si no se cumple la condicion...
         alert("telefono invalido");
         return false;
       }
       
       else if (!(/\S+@\S+\.\S+/.test(correo))) {
         // Si no se cumple la condicion...
         alert("correo invalido");
         return false;
       }
   
       else if (mensaje == null || mensaje.length == 0 || /^\s+$/.test(mensaje)) {
           // Si no se cumple la condicion...
           alert("mensaje invalido");
           return false;
         }
     
       // Si el script ha llegado a este punto, todas las condiciones
       // se han cumplido, por lo que se devuelve el valor true
       return true;
     }