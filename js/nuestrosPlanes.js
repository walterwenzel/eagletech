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
