<template>
  <div>
    <back-menu/>
    <h2 class="grid justify-items-center text-xl font-bold mb-4">Отслеживание Вашего Заказа</h2>
    <h3 class="grid justify-items-center text-lg text-red-700 font-bold mb-4">Не выходите с этой страницы</h3>

    <div v-for="item in order" :key="item.id"
         @trackOrder="order"
    >
      <div class="mt-4">
        <div class="bg-slate-200 pl-4 pr-4 mb-4">
          <div>
            <h3><b>Состояние Заказа:</b></h3>
            <div class="flex justify-between ml-2 mt-2"
                 v-for="sentOrder in sentOrders"
                 :key="sentOrder.id"
            >
<!--              v-if="sentOrder.timeSentOrder"-->

              <h2 class="mt-4 font-bold text-xl text-green-500"
                  v-if="item.delivery === 'Доставка Курьером'"
              >
                Ваш заказ № {{ item.orderId }} отправлен в {{ sentOrder.timeSentOrder }} ({{ sentOrder.dateSentOrder }})
              </h2>

              <h2 class="mt-4 font-bold text-xl text-green-500"
                  v-else-if="item.delivery === 'Самовывоз' || 'Заказы в кафе'"
              >
                Ваш заказ готов в {{ sentOrder.timeSentOrder }} ({{ sentOrder.dateSentOrder }})
              </h2>

              <h2 class="mt-4 font-bold text-xl text-green-500"
                  v-else
              >
                Ваш заказ готовится
              </h2>
            </div>

            <div class="grid justify-items-center pt-2 mb-2">
              <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ item.orderId }} </b></span>
              <span>Дата заказа: <b class="text-lg text-red-500"> {{ item.dateOrder }} </b></span>
              <span>Время заказа: <b class="text-lg text-red-500"> {{ item.timeOrder }} </b></span>
            </div>

            <div>
              <h2><b>Данные заказчика:</b></h2>
              <div v-for="(user) in item.userItems" :key="user.id">
                <ul class="flex-col">
                  <li>Заказчик: <b class="text-lg text-red-500">{{ user.userName }}</b></li>
                  <li>id Заказчика: <b class="text-lg text-red-500">{{ user.id }}</b></li>
                  <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ user.userPhone }}</b></li>
                  <li>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ user.userAddress }}</b></li>
                </ul>

                <div class="flex-col">
                  <p>Тип Заказа: <b class="text-lg text-red-500">{{ item.delivery }}</b></p>
                  <p>Вид Оплаты: <b class="text-lg text-red-500">{{ item.payment }}</b></p>
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
              <div v-for="(el) in item.orderItems" :key="el.id">
                <ul class="border-solid border-2 border-indigo-600 pl-4 mb-2">
                  <li>Наименование блюда: <b class="ml-10 text-xl text-green-600">{{ el.title }}</b></li>
                  <li>Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ el.quantity }}</b></li>
                  <li>Стоимость блюда: <b class="ml-20 text-lg">{{ el.price }} рублей</b></li>
                  <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ el.price * el.quantity }} рублей</b></li>
                </ul>
              </div>
              <span>Общая стоимость заказа:
                <br/>
                <b class="ml-4 text-2xl text-orange-500">
                  {{ item.totalPrice }} рублей
                </b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackMenu from '@/components/UI/BackMenu.vue';

import {computed, onMounted, ref, watch, watchEffect} from 'vue';
import {useStore} from 'vuex';

defineProps({
  order: {
    type: Array,
    // required: true,
  },
  id: {
    type: Number,
  },
  item: String,
});

const store = useStore();

const order = computed(() => store.getters.ORDER);
// console.log(order.value);

const sentOrders = computed(() => store.getters.sentOrders);
// console.log(sentOrders.value);

const finishOrders = computed(() => store.getters.finishOrders);

const fetchSentOrders = () => {
  store.dispatch('GET_SENT_ORDERS_FROM_API');
};

onMounted(() => {
  fetchSentOrders();
});

const stop = watch(sentOrders, fetchSentOrders);
// const stop = watchEffect(sentOrders, fetchSentOrders);
stop();
</script>

<!--/*
let cities = [{ id: 121, name: 'г. Урюпинск' }, { id: 122, name: 'г. Париж' }, { id: 123, name: 'г. Москва' }, { id: 124, name: 'г. Штормград' }];
let searchTerm = 'г. Москва';
let cityId = cities.find(city => city.name === searchTerm).id
console.log(cityId);
*/

// const orders = computed(() => store.getters.ORDERS);
// console.log(orders);

/*const orderId = ref('');
console.log(orderId);

const activeId = (id) => {
  console.log(id);
  orderId.value = id;
};

const orderTracked = computed((orderId) => {
  return orders.value.filter((order) => order.id === orderId);
});
console.log(orderTracked.value);*/-->


