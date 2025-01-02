import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Vuetify styles
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi'; // Material Design Icons
import '@mdi/font/css/materialdesignicons.css';
import router from './router';
const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });
  
  createApp(App).use(vuetify).use(router).mount('#app');