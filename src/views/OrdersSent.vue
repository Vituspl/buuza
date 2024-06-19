<template>
  <div class="m-auto">
    <div class="fixed top-0 left-100 w-full max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">

      <back-menu/>

      <div class="flex gap-4 mb-4">
        <OrdersNav class="font-bold"/>
      </div>
      <h1 class="grid justify-items-center text-2xl font-bold mb-4">{{ title }}</h1>
    </div>

<!--    @removeOrder="removeOrder(index)"
    @removeUser="removeUser(index)"
    @sentOrder="sentOrder(order)"-->

<!--    @finishOrder="finishSentOrder(order, index)"-->
<!--    @deleteOrder="deleteSentOrder(index)"-->

    <div class="mt-52">
      <div
          class="bg-slate-200 pl-4 pr-4 mb-4"
          v-for="(order, index) in sentOrders"
          :key="order.id"
          :id="order.id"
      >
        <div>
          <div class="grid justify-items-center pt-2 mb-2">
            <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ order.order.orderId }} </b></span>

            <div class="flex gap-8">
              <span>Дата заказа: <b class="text-lg text-red-500"> {{ order.order.dateOrder }} </b></span>
              <span>Дата отправки заказа: <b class="text-lg text-red-500"> {{ order.dateSentOrder }} </b></span>
            </div>

            <div class="flex gap-8">
              <span>Время заказа: <b class="text-lg text-red-500"> {{ order.order.timeOrder }} </b></span>
              <span>Время отправки заказа: <b class="text-lg text-red-500"> {{ order.timeSentOrder }} </b></span>
            </div>
          </div>

          <div>
            <h2><b>Данные заказчика:</b></h2>
            <div v-for="(user) in order.order.userItems" :key="user.id">
              <ul class="flex gap-10 mb-2">
                <li>Заказчик: <b class="text-lg text-red-500">{{ user.userName }}</b></li>
                <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ user.userPhone }}</b></li>
                <li>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ user.userAddress }}</b></li>
              </ul>
              <div class="flex-col">
                <div class="flex gap-10 mb-2">
                  <p>Тип Заказа: <b class="text-lg text-red-500">{{ order.order.delivery }}</b></p>
                  <p>Вид Оплаты: <b class="text-lg text-red-500">{{ order.order.payment }}</b></p>
                </div>
              </div>
              <ul>
                <li class="text-blue-500">
                  Количество приборов: <b class="text-lg text-blue-500">{{ user.quantityCutlery }}</b>
                </li>
                <li class="text-blue-500">
                  Примечания заказчика: <b class="text-lg text-blue-500">{{ user.userNote }}</b>
                </li>
              </ul>
            </div>

          </div>

          <div class="flex flex-col text-lg mb-4">
            <h2><b>Состав заказа:</b></h2>
            <div v-for="(el) in order.order.orderItems" :key="el.id">
              <div class="flex justify-between items-center border-solid border-2 border-indigo-600 pl-4 mb-2">
                <ul>
                  <li>Наименование блюда: <b class="ml-10 text-xl text-green-600">{{ el.title }}</b></li>
                  <li>Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ el.quantity }}</b></li>
                  <li>Стоимость блюда: <b class="ml-20 text-lg">{{ el.price }} рублей</b></li>
                  <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ el.price * el.quantity }} рублей</b></li>
                </ul>
              </div>
            </div>
            <span>Общая стоимость заказа:
              <b class="ml-4 text-2xl text-orange-500">
              {{ order.order.totalPrice }} рублей
              </b>
            </span>
          </div>

          <h3><b>Состояние Заказа:</b></h3>
          <div class="flex justify-between ml-2 mt-2">

              <h2 class="mt-4 font-bold text-xl text-green-500">
                Заказ отправлен в {{ order.timeSentOrder }} ({{ order.dateSentOrder }})
              </h2>

            <a class="flex items-center"
               @click="finishSentOrder(order, index)">
              <h2 class="font-bold">Заказ Исполнен: (Оплачен)</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>

            <a class="flex items-center"
               @click="deleteSentOrder(order, index)">
              <h2 class="font-bold">Отмена Заказа:</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackMenu from '@/components/UI/BackMenu.vue';
import OrdersNav from '@/components/OrdersNav.vue';

import {useStore} from 'vuex';
import {computed, onMounted, watch, watchEffect} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Отправленные Заказы',
  },
});

const store = useStore();

const sentOrders = computed(() => store.getters.sentOrders);
// console.log(sentOrders);

/*const sentOrder = (order, index) => {
  store.dispatch('SENT_ORDER', {order});
  store.dispatch('DELETE_ORDER', {order, index});
};*/
/*const removeOrder = (index) => {
  store.dispatch('REMOVE_ORDER', index);
};*/

const finishSentOrder = (order, index)=>{
  // console.log(order);
  store.dispatch('FINISH_ORDER', {order});
  store.dispatch('DELETE_SENT_ORDER', {order, index});
};
const deleteSentOrder = (order, index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('DELETE_SENT_ORDER', {order, index});
};

const fetchSentOrders = () => {
  store.dispatch('GET_SENT_ORDERS_FROM_API');
};

onMounted(() => {
  fetchSentOrders();
});

// Вотчер отслеживает sentOrders, и при его изменении вызывает ф-ию fetchSentOrders
// т.е. перерисовывает компонент OrderSent
// watch(sentOrders, fetchSentOrders);
// const stop = watchEffect(sentOrders, fetchSentOrders);
// stop();
</script>
