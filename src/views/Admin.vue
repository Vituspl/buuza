<template>
  <div class="m-auto">
    <div class="fixed top-0 left-100 w-full max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">

      <div class="flex justify-between mt-4 mb-4 w-full">
        <router-link to="/">
          <NewButton
              label="Назад в Меню"
              color="primary"
          />
        </router-link>

        <router-link to="/menu">
          <NewButton
              label="Редактирование Меню"
              color="danger"
          />
        </router-link>

        <div class="flex-col">
          <NewButton
              class="place-items-end"
              label="Очистить заказы"
              color="danger"
              @click="clearOrders"
          />
          <p class="text-lg text-red-500 text-center font-bold mr-2 mb-2">Осторожно эта кнопка удалит все Заказы</p>
        </div>
      </div>

      <div class="flex gap-4 mb-4">
        <OrdersNav class="font-bold"/>
      </div>
      <h1 class="grid justify-items-center text-2xl font-bold mb-4">{{ props.title }}</h1>
    </div>

<!--    @removeOrder="removeOrder(index)"-->
<!--    @deleteOrder="deleteOrder(index)"-->
<!--    @sentOrder="sentOrder(order)"-->
<!--    @finishOrder="finishOrder(order, index)"-->

    <div class="mt-52">
      <div
          class="bg-slate-200 pl-4 pr-4 mb-4"
          v-for="(order, index) in filterOrders"
          :key="order.id"
          :id="order.id"
      >
        <div>
          <div class="grid justify-items-center pt-2 mb-2">
            <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ order.orderId }} </b></span>
            <span>Дата заказа: <b class="text-lg text-red-500"> {{ order.dateOrder }} </b></span>
            <span>Время заказа: <b class="text-lg text-red-500"> {{ order.timeOrder }} </b></span>
          </div>

          <div>
            <h2><b>Данные заказчика:</b></h2>
            <div v-for="(item) in order.userItems" :key="item.id">
              <ul class="flex gap-10 mb-2">
                <li>Заказчик: <b class="text-lg text-red-500">{{ item.userName }}</b></li>
                <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ item.userPhone }}</b></li>
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

          <div class="flex flex-col text-lg mb-4">
            <h2><b>Состав заказа:</b></h2>
            <div v-for="(item) in order.orderItems" :key="item.id">
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
              <b class="ml-4 text-2xl text-orange-500">
              {{ order.totalPrice }} рублей
              </b>
            </span>
          </div>

          <h3><b>Состояние Заказа:</b></h3>
          <div class="flex justify-between ml-2 mt-2">

            <a v-if="order.delivery === 'Доставка Курьером' || order.delivery === 'Заказы в кафе'"
                class="flex items-center"
               @click="sentOrder(order)">
              <h2 class="font-bold">Отправить Заказ (Доставка):</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>

            <a v-else-if="order.delivery === 'Самовывоз'"
               class="flex items-center"
               @click="sentOrder(order, index)">
              <h2 class="font-bold">Заказ Готов (Самовывоз):</h2>
              <img
                  class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
                  src="/close-full-red-48.svg"
                  alt="Close"
              />
            </a>

            <a class="flex items-center"
               @click="deleteOrder(order, index)">
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

<!--  ; removeUser(index)   -->

<script setup>
import NewButton from '@/components/UI/NewButton.vue';
import OrdersNav from '@/components/OrdersNav.vue';


import {computed, onBeforeMount, onMounted, ref, watch, watchEffect} from 'vue';
import {useStore} from 'vuex';

const props = defineProps({
  title: {
    type: String,
    default: 'Все Заказы',
  },
  user: {
    userName: String,
    userPhone: String,
    userAddress: String,
    quantityCutlery: String,
    userNote: String,
  },
  // isSentOrder: Boolean,
});

// const emit = defineEmits(['orderState']);

const store = useStore();

// const order = computed(() => store.getters.ORDER);
const orders = computed(() => store.getters.ORDERS);
// console.log(orders.value);
const users = computed(() => store.getters.USERS);
// console.log(users.value);
const user = computed(() => store.getters.USER);
// console.log(user.value);

const filterOrders = computed(() => {
  if (props.title === 'Все Заказы') {
    return orders.value;
  }
  return orders.value.filter((order) => order.delivery === props.title);
});
// console.log(filterOrders);

// const isSentOrder = ref(false);

const sentOrder = (order, index) => {
  // console.log(index);
  // isSentOrder.value = true;
  // emit('orderState', order);
  store.dispatch('SENT_ORDER', {order});
  store.dispatch('DELETE_ORDER', {order, index});
};

/*const removeUser = (index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('REMOVE_ORDER', index);
  // store.dispatch('DELETE_ORDER', orderId);
};*/
/*const finishOrder = (order, index)=>{
  // console.log(order);
  // store.dispatch('SENT_ORDER', {order});
  // store.dispatch('DELETE_ORDER', {order, index});
  store.dispatch('FINISH_ORDER', {order});
  store.dispatch('DELETE_SENT_ORDER', {order, index});
};*/
const deleteOrder = (order, index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('DELETE_ORDER', {order, index});
};
/*const removeOrder = (index) => {
  store.dispatch('REMOVE_ORDER', index);
};*/
/*const clearOrders = () => {
  store.dispatch('CLEAR_ALL_ORDERS');
};*/
const clearOrders = () => {
  store.dispatch('CLEAR_ALL_ORDERS');
};

const fetchOrders = () => {
  store.dispatch('GET_ORDERS_FROM_API');
};

onMounted(() => {
  fetchOrders();
});

// Вотчер отслеживает orders, и при его изменении вызывает ф-ию fetchOrders
// т.е. перерисовывает компонент admin
// watchEffect([...orders], fetchOrders);

</script>

<style scoped>

</style>





