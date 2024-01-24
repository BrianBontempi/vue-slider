const { createApp } = Vue;

const app = createApp({
    name: 'Carousel',
    data: () => ({
       pictures,
       currentIndex: 0
    })

})

app.mount('#root');