const { createApp } = Vue;

const app = createApp({
    name: 'Carousel',
    Data() {
        return{
            // Array preso da data.js
            pictures,
        }
    },
})

app.mount('#root');