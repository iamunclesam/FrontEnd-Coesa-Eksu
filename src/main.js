import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS globally
AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    offset: 100,
   
  });

const app = createApp(App)

app.use(router)
app.use(AOS)
app.mount('#app')
