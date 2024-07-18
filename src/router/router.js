import {createRouter, createWebHistory} from 'vue-router';
// импорт компонентов
// import CardList from '../components/CardList.vue';
import Cart from '@/views/Cart.vue';
import AppHome from '@/views/AppHome.vue';
import Admin from '@/views/Admin.vue';
import OrdersConfirm from '@/views/OrdersConfirm.vue';
import ChangeMenu from '@/views/ChangeMenu.vue';
import OrdersDelivery from '@/views/OrdersDelivery.vue';
import OrdersPickup from '@/views/OrdersPickup.vue';
import OrdersInHall from '@/views/OrdersInHall.vue';
import OrdersSent from '@/views/OrdersSent.vue';
import OrdersFinish from '@/views/OrdersFinish.vue';
import DeliveryText from '@/views/DeliveryText.vue';
import ConfidentialText from '@/views/ConfidentialText.vue';
import trackOrder from '@/views/trackOrder.vue';


// так подключается роутеры на vue 3
const routes = [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },
    {
        path: '/cart',
        name: 'cart',
        component: Cart,
    },
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
    },
    {
        path: '/menu',
        name: 'menu',
        component: ChangeMenu,
    },
    {
        path: '/confirm',
        name: 'confirm',
        component: OrdersConfirm,
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: OrdersDelivery,
    },
    {
        path: '/pickup',
        name: 'pickup',
        component: OrdersPickup,
    },
    {
        path: '/inHall',
        name: 'inHall',
        component: OrdersInHall,
    },
    {
        path: '/sent',
        name: 'sent',
        component: OrdersSent,
    },
    {
        path: '/finish',
        name: 'finish',
        component: OrdersFinish,
    },
    {
        path: '/confidential',
        name: 'confidential',
        component: ConfidentialText,
    },
    {
        path: '/deliveryText',
        name: 'deliveryText',
        component: DeliveryText,
    },
    {
        path: '/track',
        name: 'trackOrder',
        component: trackOrder,
    },
];

/*const scrollBehavior = (to, from, savedPosition) => {
    /!*let position = {
        x: 0,
        y: 0
    };
    return { x: 0, y: 0 };*!/
    return { top: 0 }
};*/

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // всегда прокручивать до верха
        return { top: 0 }
    },
});
export default router;