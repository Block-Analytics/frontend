import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import router from './router/';
import App from './App.vue'
import './assets/tailwind.css'

// Pinia setup  
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App);


app.use(router);
app.use(pinia);

app.mount('#app')
