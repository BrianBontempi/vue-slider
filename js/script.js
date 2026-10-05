const { createApp } = Vue;

const app = createApp({
    name: 'Carousel',
    data: () => ({
       pictures,
       currentIndex: 0,
       autoplay: null
    }),
    methods: {
        setCurrentIndex(i) {
            this.currentIndex = i;
        },
        goToNext() {
            // in autoplay alla fine ricomincio dalla prima immagine
            if (this.currentIndex === this.pictures.length - 1) this.currentIndex = 0;
            else this.currentIndex++;
        },
        startAutoplay() {
            this.autoplay = setInterval(this.goToNext, 3000);
        },
        stopAutoplay() {
            clearInterval(this.autoplay);
        }
    },
    mounted() {
        this.startAutoplay();
    }

})

app.mount('#root');
