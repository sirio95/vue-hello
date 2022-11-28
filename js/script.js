const {createApp} = Vue;

createApp({
    data(){
        return{
            message: 'Hello Vue!',
            sorgenteImmagine: 'https://static.tecnocino.it/tcwww/fotogallery/780X0/71991/immagine-profilo-whatsapp-originale-emoticon.jpg'
        }
    }
}).mount('#app');