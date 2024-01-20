import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { createPinia } from 'pinia';


const app = createApp(App);

const pinia = createPinia();
app.use(pinia).use(store).use(router).mount('#app');
