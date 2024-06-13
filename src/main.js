import './assets/styles/main.css';
import './assets/styles/global.scss';
// import './assets/styles/styles.scss';

import {createApp} from 'vue';
import App from './App.vue';
import VueMask from '@devindex/vue-mask';

// импорт новых js файлов
import store from './vuex/store.js';
import router from './router/router'
// рендерим наш компонент сюда
const app = createApp(App);

app.use(VueMask);

app.use(router);
app.use(store);
app.mount('#app');
