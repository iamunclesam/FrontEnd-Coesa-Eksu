import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos';

import 'aos/dist/aos.css';
import Vue3Toasity from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { createVfm } from 'vue-final-modal'
import 'vue-final-modal/style.css'


const vfm = createVfm()

// Initialize AOS globally
AOS.init({
    delay: 500, // values from 0 to 3000, with step 50ms
    duration: 300, // values from 0 to 3000, with step 50ms
    offset: 100,
   
  });

const app = createApp(App)
app.use(vfm)
// app.use(Notifications)
// app.use(Toast)
app.use(Vue3Toasity, {
  autoClose: 2000,
  style: {
      opacity: '1',
      userSelect: 'initial',
  },
});
app.use(router)
app.use(AOS)
app.use(store)
app.mount('#app')
