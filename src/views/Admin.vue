<template>
  <div class="m-auto">

    <head-orders-info :title="title" :clearOrders="clearOrders"/>

    <div class="mt-52">
      <admin-info
          v-for="(order, index) in filterOrders"
          :key="order.id"
          :id="order.id"
          :order="order"
          :orders="orders"
          @sentOrder="sentOrder(order, index)"
          @deleteOrder="deleteOrder(order, index)"
      />
<!--      <div
          class="bg-slate-200 pl-4 pr-4 mb-4"
          v-for="(order, index) in filterOrders"
          :key="order.id"
          :id="order.id"
          :orders="orders"
      >
        <div>
          <div class="grid justify-items-center pt-2 mb-2">
            <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ order.id }} </b></span>
            <span>Дата заказа: <b class="text-lg text-red-500"> {{ order.dateOrder }} </b></span>
            <span>Время заказа: <b class="text-lg text-red-500"> {{ order.timeOrder }} </b></span>
          </div>

          <div>
            <h2><b>Данные заказчика:</b></h2>
            <div v-for="(item) in order.userItems" :key="item.id">
              <ul class="flex gap-10 mb-2">
                <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ item.userPhone }}</b></li>
                <li>Заказчик: <b class="text-lg text-red-500">{{ item.userName }}</b></li>
                <li>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ item.userAddress }}</b></li>
              </ul>
              <div class="flex-col">
                <div class="flex gap-10 mb-2">
                  <p>Тип Заказа: <b class="text-lg text-red-500">{{ order.delivery }}</b></p>
                  <p>Вид Оплаты: <b class="text-lg text-red-500">{{ order.payment }}</b></p>
                </div>
              </div>
              <ul>
                <li class="text-blue-500">
                  Количество приборов: <b class="text-lg text-blue-500">{{ item.quantityCutlery }}</b>
                </li>
                <li class="text-blue-500">
                  Примечания заказчика: <b class="text-lg text-blue-500">{{ item.userNote }}</b>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col text-lg mb-2">
            <h2><b>Состав заказа:</b></h2>

            <button
                :class="['btn-new', `btn-new_${color}`]"
                v-on:click="visible=!visible"
            >
              {{ visible ? 'Свернуть' : 'Развернуть' }}
            </button>

            <div v-show="visible"
                 v-for="(item) in order.orderItems"
                 :key="item.id"
            >
              <div class="flex justify-between items-center border-solid border-2 border-indigo-600 pl-4 mb-2">
                <ul>
                  <li>Наименование блюда: <b class="ml-10 text-xl text-green-600">{{ item.title }}</b></li>
                  <li>Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ item.quantity }}</b></li>
                  <li>Стоимость блюда: <b class="ml-20 text-lg">{{ item.price }} рублей</b></li>
                  <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ item.price * item.quantity }} рублей</b></li>
                </ul>
              </div>
            </div>

            <span>Общая стоимость заказа:
              <b v-if="order.delivery === 'Доставка Курьером' || order.delivery === 'Заказы в кафе'"
                 class="ml-4 text-2xl text-orange-500">
              {{ order.totalPrice }} рублей
              </b>

              <b v-else-if="order.delivery === 'Самовывоз (-10%)'"
                 class="ml-4 text-2xl text-orange-500">
              {{ order.pickupPrice }} рублей
              </b>
            </span>
          </div>

          <h3><b>Состояние Заказа:</b></h3>
          <div class="flex justify-between ml-2 mt-2">

            <a v-if="order.delivery === 'Доставка Курьером' || order.delivery === 'Заказы в кафе'"
               class="flex items-center"
               @click="sentOrder(order, index)">
              <h2 class="font-bold">Отправить Заказ № {{ order.id }} (Доставка):</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>

            <a v-else-if="order.delivery === 'Самовывоз (-10%)'"
               class="flex items-center"
               @click="sentOrder(order, index)">
              <h2 class="font-bold">Заказ № {{ order.id }} Готов (Самовывоз):</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>

            <a class="flex items-center"
               @click="deleteOrder(order, index)">
              <h2 class="font-bold">Отмена Заказа № {{ order.id }}:</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script setup>
import AdminInfo from '@/components/OrdersInfo/AdminInfo.vue';
import HeadOrdersInfo from '@/components/OrdersInfo/HeadOrdersInfo.vue';

import {useStore} from 'vuex';
import {computed, onMounted, ref} from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Все Заказы',
  },
});

const store = useStore();

const orders = computed(() => store.getters.ORDERS);
// console.log(orders.value);

const filterOrders = computed(() => {
  if (props.title === 'Все Заказы') {
    return orders.value;
  }
  return orders.value.filter((order) => order.delivery === props.title);
});
// console.log(filterOrders);

const sentOrder = (order, index) => {
  store.dispatch('SENT_ORDER', {order});
  store.dispatch('DELETE_ORDER', {order, index});
};

const deleteOrder = (order, index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('DELETE_ORDER', {order, index});
};

const clearOrders = () => {
  store.dispatch('CLEAR_ALL_ORDERS');
};

/*const fetchOrders = () => {
  store.dispatch('GET_ORDERS_FROM_API');
};*/

const timeoutFetchOrders = () => {
  let count = 1;
  let timerId = setTimeout(function fetchOrders() {
    store.dispatch('GET_ORDERS_FROM_API');
    if (count < 800) {
      count++;
      timerId = setTimeout(fetchOrders, 60000);
    } else {
      clearTimeout(timerId);
    }
  }, 60000);
};

onMounted(() => {
  timeoutFetchOrders();
});
</script>





