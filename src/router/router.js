import { createRouter, createWebHistory } from 'vue-router';
// импорт компонентов
import CardList from '../components/CardList.vue'
import Cart from '@/views/Cart.vue'
import AppHome from '@/views/AppHome.vue';
// так подключается роутеры на vue 3
const routes = [
    {
        path:'/',
        name:'home',
        component: AppHome
    },
    {
        path:'/cart',
        name:'cart',
        component: Cart,
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;