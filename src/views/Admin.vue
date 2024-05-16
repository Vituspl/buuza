<template>
  <div class="m-auto">
    <div class="fixed top-0 left-100 w-3/4 max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">
      <div class="flex justify-between mt-4 mb-4">
        <router-link to="/">
          <NewButton
              label="Назад в Меню"
              color="primary"
          />
        </router-link>

        <NewButton
            label="Очистить заказы"
            color="danger"
            @click="clearOrders"
        />
      </div>

      <div class="flex gap-4 mb-4">
        <OrdersNav class="font-bold"/>
      </div>
    <h1 class="grid justify-items-center text-2xl font-bold mb-4">Заказы: {{ props.title }}</h1>
    </div>

    <div class="mt-44">
      <div
          class="bg-slate-200 pl-4 pr-4 mb-4"
          v-for="(order, index) in filterOrders"
          :key="order.id"
          :id="order.id"
          @removeOrder="removeOrder(index)"
          @removeUser="removeUser(index)"
          @deleteOrder="deleteOrder(index)"
      >
        <div>
          <div class="grid justify-items-center pt-2 mb-2">
            <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ order.id }} </b></span>
            <span>Дата заказа: <b class="text-lg text-red-500"> {{ order.descriptionOrder }} </b></span>
          </div>

          <div>
            <div class="flex gap-10 mb-2">
              <p>Заказчик: <b class="text-lg text-red-500">{{ order.user.userName }}</b></p>
              <p>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ order.user.userPhone }}</b></p>
              <p>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ order.user.userAddress }}</b></p>
            </div>
          </div>
          <div class="flex-col">
            <div class="flex gap-10 mb-2">
              <p>Тип Заказа: <b class="text-lg text-red-500">{{ order.delivery }}</b></p>
              <p>Вид Оплаты: <b class="text-lg text-red-500">{{ order.payment }}</b></p>
            </div>
            <p class="text-blue-500">Количество приборов: <b class="text-lg text-blue-500">{{ order.user.quantityCutlery }}</b></p>
            <p class="text-blue-500">Примечания заказчика: <b class="text-lg text-blue-500">{{ order.user.userNote }}</b></p>
          </div>

          <div class="flex flex-col text-lg mb-4">
            <h2><b>Состав заказа:</b></h2>
            <div v-for="(item) in order.orderItems" :key="item.id">
              <ul class="border-solid border-2 border-indigo-600 pl-4 mb-2">
                <li>Наименование блюда: <b class="ml-10 text-xl text-green-600">{{ item.title }}</b></li>
                <li>Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ item.quantity }}</b></li>
                <li>Стоимость блюда: <b class="ml-20 text-base">{{ item.price }} рублей</b></li>
                <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ item.price * item.quantity }} рублей</b></li>
              </ul>
            </div>
            <span>Общая стоимость заказа: <b class="ml-4 text-2xl text-orange-500">{{ order.totalPrice }}</b></span>
          </div>

          <h3><b>Состояние Заказа:</b></h3>
          <div class="flex justify-between ml-2 mt-2">
            <div class="flex gap-4 mb-2">
              <NewButton
                  label="Заказ Подтвержден"
                  color="danger"
                  :outlined="true"
                  @done="eventForButton"
              />
              <NewButton
                  label="Заказ Готовится"
                  color="danger"
                  :outlined="true"
                  @done="eventForButton"
              />
              <NewButton
                  label="Заказ Собран"
                  color="danger"
                  :outlined="true"
                  @done="eventForButton"
              />
              <NewButton
                  label="Заказ Отправлен"
                  color="danger"
                  :outlined="true"
                  @done="eventForButton"
              />
              <NewButton
                  label="Заказ Исполнен"
                  color="danger"
                  :outlined="true"
                  @click="removeOrder(index)"
              />
            </div>

            <a class="flex items-center"
               @click="deleteOrder(order.id, index); removeUser(index)">
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
import NewButton from '@/components/UI/NewButton.vue';
import {computed, onMounted} from 'vue';
import {useStore} from 'vuex';
import OrdersNav from '@/components/OrdersNav.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Все Заказы',
  },
  id:{
    type: Number,
  },
})

const store = useStore();

const orders = computed(() => store.getters.ORDERS);
// console.log(orders.value);
const users = computed(() => store.getters.USERS);
// console.log(users.value);
const user = computed(() => store.getters.USER);
// console.log(user.value);

const filterOrders = computed(() => {
  if(props.title==='Все Заказы'){
    return orders.value;
  }
    return orders.value.filter((order) => order.delivery === props.title);
});
// console.log(filterOrders);

const eventForButton = () => {
  alert('You clicked danger button');
};

const removeUser = (index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('REMOVE_ORDER', index);
  // store.dispatch('DELETE_ORDER', orderId);
};
const deleteOrder = (id, index) => {
  console.log(id);
  store.dispatch('DELETE_ORDER', id, index);
};
const removeOrder = (index) => {
  store.dispatch('REMOVE_ORDER', index);
};
const clearOrders = () => {
  store.dispatch('CLEAR_ALL_ORDERS');
};

const fetchOrders = () => {
  store.dispatch('GET_ORDERS_FROM_API');
};

onMounted(() => {
  fetchOrders();
});
</script>

<style scoped>

</style>