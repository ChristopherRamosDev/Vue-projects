import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css' // Importa los estilos de Bootstrap
const app = createApp(App);

// Verifica el nombre correcto de la variable de entorno (VITE_API_URL)
app.config.globalProperties.$apiUrl = import.meta.env.VITE_API_URL;

app.mount('#app');
