import './assets/main.css';
import './assets/styles/styles.scss';
import './assets/styles/global.scss';

import {createApp} from 'vue';
import App from './App.vue';
// import components from '@/components/UI';

// импорт новых js файлов
import store from './vuex/store'
import router from './router/router'
// рендерим наш компонент сюда
const app = createApp(App);

/*components.forEach(component=>{
    app.component(component.name, component)
})*/

app.use(router);
app.use(store);
app.mount('#app');
