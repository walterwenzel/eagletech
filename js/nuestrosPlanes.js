/* const { createApp } = Vue
    createApp({
        data() {
            return {
                productos:[],
                //url:'http://localhost:5000/productos',
                // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
                url:'https://eagletech.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
                error:false,
                cargando:true,
                // atributos para el guardar los valores del formulario
                id:0,
                plan:"",
                descripcion:"",
                precio:0,
                imagen:"",
            }
        },

        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.cargando=false
                    })
                    .catch(err => {
                        console.error(err);
                        this.error=true
                    })
            },

            eliminar(producto) {
                const url = this.url+'/' + producto;
                var options = {
                method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                    location.reload();
                    })
            },

            grabar(){
                let producto = {
                    plan:this.plan,
                    descripcion: this.descripcion,
                    precio: this.precio,
                    imagen:this.imagen
                }
                var options = {
                    body:JSON.stringify(producto),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(function () {
                        alert("Registro grabado")
                        window.location.href = "../Pages/nuestrosPlanes.html";
                    })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })
            }
        },

        created() {
            this.fetchData(this.url)
        },
    }).mount('#app') */


const { createApp } = Vue;

createApp({
    data() {
        return {
            productos: [],
            url: 'https://eagletech.pythonanywhere.com/productos',
            error: false,
            cargando: true,
        }
    },

    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                })
        },
    },

    created() {
        this.fetchData(this.url);
    },
}).mount('#app');
