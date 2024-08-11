<template>
  <div>
    <back-menu/>
    <h2 class="grid justify-items-center text-xl font-bold mb-4">Отслеживание Вашего Заказа</h2>
    <h3 class="grid justify-items-center text-lg text-red-700 font-bold mb-4">
      Отслеживание заказа есть в корзине
    </h3>

    <div v-for="item in order"
         :key="item.id"
         @trackOrder="order"
    >
      <div class="mt-4">
        <div class="bg-slate-200 pl-4 pr-4 mb-4">
          <div>
            <h3 class="pt-4"><b>Состояние Заказа:</b></h3>
            <div
                class="flex justify-between ml-2 mt-2"
                v-for="sentOrder in sentOrders"
                :key="sentOrder.id"
            >
              <h2 class="mt-4 font-bold text-xl text-green-500"
                  v-if="!sentOrder.order.id === item.id"
              >
                Ваш заказ готовится
              </h2>

              <h2 class="font-bold text-xl text-green-500"
                  v-else-if="item.delivery === 'Доставка Курьером' && sentOrder.order.id === item.id"
              >
                Ваш заказ № {{ sentOrder.order.id }} отправлен в {{ sentOrder.timeSentOrder }}
                ({{ sentOrder.dateSentOrder }})
              </h2>

              <h2 class="font-bold text-xl text-green-500"
                  v-else-if="(item.delivery === 'Самовывоз (-10%)' || 'Заказы в кафе') && (sentOrder.order.id === item.id)"
              >
                Ваш заказ № {{ sentOrder.order.id }} готов в {{ sentOrder.timeSentOrder }} ({{
                  sentOrder.dateSentOrder
                }})
              </h2>
            </div>

            <div class="flex justify-between ml-2 mt-2"
                 v-for="finishOrder in finishOrders"
                 :key="finishOrder.id"
            >

              <h2 class="mt-4 font-bold text-xl text-green-500"
                  v-if="!finishOrder.order.id === item.id"
              >
                Ваш заказ готовится
              </h2>

              <h2 class="font-bold text-xl text-green-500"
                  v-else-if="item.delivery === 'Доставка Курьером' && finishOrder.order.order.id === item.id"
              >
                Ваш заказ № {{ finishOrder.order.order.id }} исполнен в {{ finishOrder.timeFinishOrder }}
                ({{ finishOrder.dateFinishOrder }})
              </h2>

              <h2 class="font-bold text-xl text-green-500"
                  v-else-if="(item.delivery === 'Самовывоз (-10%)' || 'Заказы в кафе') && (finishOrder.order.order.id === item.id)"
              >
                Ваш заказ № {{ finishOrder.order.order.id }} исполнен в {{ finishOrder.timeFinishOrder }} ({{
                  finishOrder.dateFinishOrder
                }})
              </h2>
            </div>

            <div class="grid justify-items-center mb-2">
              <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ item.id }} </b></span>
              <span>Дата заказа: <b class="text-lg text-red-500"> {{ item.dateOrder }} </b></span>
              <span>Время заказа: <b class="text-lg text-red-500"> {{ item.timeOrder }} </b></span>
            </div>

            <div>
              <h2><b>Данные заказчика:</b></h2>
              <div v-for="(user) in item.userItems" :key="user.id">
                <ul class="flex-col">
                  <li>Заказчик: <b class="text-lg text-red-500">{{ user.userName }}</b></li>
                  <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ user.userPhone }}</b></li>
                  <!--                  <li>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ user.userAddress }}</b></li>-->
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

            <div class="flex flex-col text-lg mb-2">
              <h2><b>Состав заказа:</b></h2>

              <button
                  class="btn-info"
                  :style="{
            'background-color': visible ? background : '',
            'color': visible ? color : ''
            }"
                  @:click="visible = !visible"
              >
                {{ visible ? 'Свернуть' : 'Развернуть' }}
              </button>

              <div v-show="visible"
                   v-for="(el) in item.orderItems"
                   :key="el.id"
              >
                <ul class="border-solid border-2 border-indigo-600 rounded-xl pl-2 mb-2">
                <img class="w-28 h-28 mt-2 rounded-xl hover:scale-150 transition duration-300 ease-out cursor-pointer" :src="el.imageUrl" :alt="el.title"/>
                  <li class="text-sm">
                    Наименование блюда: <b class="ml-10 text-xl text-green-600"><br/>{{ el.title }}</b>
                  </li>
                  <li class="text-sm">
                    Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ el.quantity }}</b>
                  </li>
                  <li class="text-sm">
                    Стоимость блюда: <b class="ml-20 text-lg">{{ el.price }} рублей</b>
                  </li>
                  <li class="text-sm">
                    Суммарная стоимость: <b class="ml-12 text-lg">{{ el.price * el.quantity }} рублей</b>
                  </li>
                </ul>
              </div>

              <div>Общая стоимость заказа:
                <br/>
                <p v-if="item.delivery === 'Доставка Курьером' || item.delivery === 'Заказы в кафе'"
                   class="ml-4 text-2xl text-orange-500">
                  <b>{{ item.totalPrice }} рублей</b>
                </p>

                <p v-else-if="item.delivery === 'Самовывоз (-10%)'"
                   class="ml-4 text-2xl text-orange-500">
                  <b>{{ item.pickupPrice }} рублей</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackMenu from '@/components/UI/BackMenu.vue';

import {computed, onMounted, ref} from 'vue';
import {useStore} from 'vuex';

defineProps({
  order: {
    type: Array,
    required: true,
  },
  // sentOrder: {
  //   type: Array,
  // },
  // finishOrder: {
  //   type: Array,
  // },
  // id: {
  //   type: Number,
  // },
  // color: {
  //   type: String,
  //   default: 'primary'
  // },
  // item: String,
});

const visible = ref(false);

const background = ref('orange');
const color = ref('#0e4199');

const store = useStore();

const order = computed(() => store.getters.ORDER);
// console.log(order.value);

// const sentOrder = computed(() => store.getters.sentOrder);
const sentOrders = computed(() => store.getters.sentOrders);
// console.log(sentOrders.value);

const finishOrders = computed(() => store.getters.finishOrders);
// console.log(finishOrders.value);

// Здесь рекурсивный вызов setTimeout каждую минуту (точнее чем setInterval)
// Если ожидание отправки заказа превысило 60 минут, то отслеживание должно прекратиться
const timeoutFetchTrack = () => {
  let count = 1;
  let timerId = setTimeout(function fetchSentOrders() {
    store.dispatch('GET_SENT_ORDERS_FROM_API');
    store.dispatch('GET_FINISH_ORDERS_FROM_API');

    if (count < 60) {
      count++;
      timerId = setTimeout(fetchSentOrders, 60000);
    } else {
      clearTimeout(timerId);
    }
  }, 60000);
};

onMounted(() => {
  timeoutFetchTrack();
});

</script>

<style scoped>
.btn-info {
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 0 20px;
  width: 150px;
  height: 30px;
  background: #6979f8;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .4s;
}

.btn-info:hover {
  background: #FFC7A6;
  color: #0e4199;
}

.btn-info:active {
  background: orange;
  color: #0e4199;
}
</style>


