console.log(location.search) // lee los argumentos pasados a este formulario
var id=location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
data() {
return {
id:0,
plan:"",
descripcion:"",
precio:0,
imagen:"",
url:'https://eagletech.pythonanywhere.com/productos/'+id,
//url:'http://localhost:5000/productos/'+id,
}
},
methods: {
fetchData(url) {
fetch(url)
.then(response => response.json())
.then(data => {

console.log(data)
this.id=data.id
this.plan = data.plan;
this.descripcion=data.descripcion
this.precio=data.precio
this.imagen=data.imagen
})
.catch(err => {
console.error(err);
this.error=true
})
},
modificar() {
let producto = {
plan:this.plan,
descripcion: this.descripcion,
precio: this.precio,
imagen:this.imagen
}
var options = {
body: JSON.stringify(producto),
method: 'PUT',
headers: { 'Content-Type': 'application/json' },
redirect: 'follow'
}
fetch(this.url, options)
.then(function () {
alert("Registro modificado")
window.location.href = "../templates/productos.html";
})
.catch(err => {
console.error(err);
alert("Error al Modificar")
})
}
},
created() {
this.fetchData(this.url)
},
}).mount('#app')
