<template>
  <div class="m-auto">
    <div class="flex justify-between mt-4 mb-4">
      <router-link to="/">
        <!--      <MyButton
              >
                Назад в Меню
              </MyButton>-->
        <NewButton
            label="Назад в Меню"
            color="primary"
        />
      </router-link>

      <!--    <MyButton
              @click="clearOrders"
          >
            Очистить заказы
          </MyButton>-->

      <NewButton
          label="Очистить заказы"
          color="danger"
          @click="clearOrders"
      />
    </div>

    <h1 class="grid justify-items-center text-2xl font-bold mb-4">Административная страница</h1>
    <div v-for="(order, index) in orders"
         :key="order.id"
         :orderId="order.id"
         @removeOrder="removeOrder(index)"
         @removeUser="removeUser(index)"
         @deleteOrder="deleteOrder(index)"
         class="bg-slate-200"
    >
      <div>
        <div class="grid justify-items-center pl-4 m-2">
          <span class="pr-4">Заказ: <b> № {{ order.id }} </b></span>
          <span>Дата заказа: <b> {{ order.descriptionOrder }} </b></span>
        </div>

        <div>
          <div class="flex gap-10 mb-2">
            <p>Заказчик: <b>{{ order.user.userName }}</b></p>
            <p>Телефон заказчика: <b>{{ order.user.telephone }}</b></p>
            <p>Адрес доставки заказчика: <b>{{ order.user.address }}</b></p>
          </div>
        </div>
        <div>
          <div class="flex gap-10 mb-2">
            <p>Тип Заказа: <b>{{ order.user.typeOrder }}</b></p>
            <p>Вид Оплаты: <b>{{ order.user.payment }}</b></p>
            <p>Количество приборов: <b>{{ order.user.cutlery }}</b></p>
            <p>Примечания заказчика: <b>{{ order.user.customerNote }}</b></p>
          </div>
        </div>

        <div class="flex flex-col text-lg">
          <h2><b>Состав заказа:</b></h2>
          <div v-for="(item) in order.orderItems" :key="item.id">
            <ul>
              <li>Наименование блюда: <b class="ml-10 text-2xl text-green-400">{{ item.title }}</b></li>
              <li>Количество блюд: <b class="ml-20 text-2xl text-teal-400">{{ item.quantity }}</b></li>
              <li>Стоимость блюда: <b class="ml-20 text-base">{{ item.price }} рублей</b></li>
              <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ item.price * item.quantity }} рублей</b></li>
            </ul>
          </div>
          <span>Общая стоимость заказа: <b class="ml-4 text-2xl text-orange-400">{{ order.totalPrice }}</b></span>
        </div>

        <h3><b>Состояние Заказа:</b></h3>
        <div class="flex justify-between ml-2 ">
          <div class="flex gap-4 mb-2">
            <NewButton
                label="Заказ Подвержден"
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
            <!--          <MyButton
                          @:click="removeOrder(index)"
                      >
                        Заказ Доставлен
                      </MyButton>-->
          </div>

          <a class="flex"
             @click="deleteOrder(index); removeUser(index)">
            <h2 class="font-bold">Отмена Заказа:</h2>
            <img
                class="opacity-100 color:red  hover:opacity-100 cursor-pointer transition"
                src="/close-full-red-48.svg"
                alt="Close"
            />
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
// import MyButton from '@/components/UI/MyButton.vue';
import NewButton from '@/components/UI/NewButton.vue';
import axios from 'axios';
import {computed, onMounted, ref, watch} from 'vue';
import {useStore} from 'vuex';

defineProps({
      orders: Array,
      order: Object,
      orderId: Number,
    }
);

const store = useStore();
//Получаю orders из store
const orders = computed(() => store.getters.ORDERS);
console.log(orders.value);

const users = computed(() => store.getters.USERS);
console.log(users.value);
const user = computed(() => store.getters.USER);
console.log(user.value);

const eventForButton = () => {
  alert('You clicked danger button')
};

const removeUser = (index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('REMOVE_ORDER', index);
  // store.dispatch('DELETE_ORDER', orderId);
};
const deleteOrder = (index) => {
  console.log(index);
  store.dispatch('DELETE_ORDER', index)
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

/*watch(orders,
    () => {
      localStorage.setItem('orders', JSON.stringify(orders.value));
    },
    {deep: true}
);*/
</script>

<style scoped>
.red {
  background-color: red;
  width: 120px;
  height: 60px;
  color: white;
}

.green {
  width: 120px;
  height: 60px;
  background-color: green;
  color: white;
}
</style>