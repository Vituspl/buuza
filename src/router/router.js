import { createRouter, createWebHistory } from 'vue-router';
// импорт компонентов
import CardList from '../components/CardList.vue'
import Cart from '@/views/Cart.vue'
import AppHome from '@/views/AppHome.vue';
import Admin from '@/views/Admin.vue';
import OrdersDelivery from '@/views/OrdersDelivery.vue';
import OrdersPickup from '@/views/OrdersPickup.vue';
import OrdersInHall from '@/views/OrdersInHall.vue';


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
    },
    {
        path:'/admin',
        name:'admin',
        component: Admin,
    },
    {
        path:'/delivery',
        name:'delivery',
        component: OrdersDelivery,
    },
    {
        path:'/pickup',
        name:'pickup',
        component: OrdersPickup,
    },
    {
        path:'/inHall',
        name:'inHall',
        component: OrdersInHall,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;