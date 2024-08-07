<template>
  <div>
    <div class="bg-slate-200 pl-4 pr-4 mb-4">
        <div class="grid justify-items-center pt-2 mb-2">
          <span class="pr-4">Заказ: <b class="text-lg text-red-500"> № {{ order.order.order.id }} </b></span>
          <button
              :class="['btn-new', `btn-new_${color}`]"
              @:click="visible = !visible"
          >
            {{ visible ? 'Свернуть' : 'Развернуть' }}
          </button>
        </div>

        <div v-show="visible">
          <div class="grid justify-items-center pt-2 mb-2">
            <div class="flex gap-8">
              <span>Дата заказа: <b class="text-lg text-red-500"> {{ order.order.order.dateOrder }} </b></span>
              <span>Дата отправки заказа: <b class="text-lg text-red-500"> {{ order.order.dateSentOrder }} </b></span>
              <span>Дата исполнения заказа: <b class="text-lg text-red-500"> {{ order.dateFinishOrder }} </b></span>
            </div>

            <div class="flex gap-8">
              <span>Время заказа: <b class="text-lg text-red-500"> {{ order.order.order.timeOrder }} </b></span>
              <span>Время отправки заказа: <b class="text-lg text-red-500"> {{ order.order.timeSentOrder }} </b></span>
              <span>Время исполнения заказа: <b class="text-lg text-red-500"> {{ order.timeFinishOrder }} </b></span>
            </div>
          </div>

          <div>
            <h2 class="text-lg"><b>Данные заказчика:</b></h2>
            <div
                v-for="(user) in order.order.order.userItems"
                :key="user.id">
              <ul class="flex gap-10 mb-2">
                <li>Заказчик: <b class="text-lg text-red-500">{{ user.userName }}</b></li>
                <li>Телефон заказчика: <b class="text-lg text-red-500"> +7 {{ user.userPhone }}</b></li>
                <li>Адрес доставки заказчика: <b class="text-lg text-red-500">{{ user.userAddress }}</b></li>
              </ul>
              <div class="flex-col">
                <div class="flex gap-10 mb-2">
                  <p>Тип Заказа: <b class="text-lg text-red-500">{{ order.order.order.delivery }}</b></p>
                  <p>Вид Оплаты: <b class="text-lg text-red-500">{{ order.order.order.payment }}</b></p>
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

          <div class="flex flex-col text-lg mb-2">
            <h2><b>Состав заказа:</b></h2>
            <div v-for="(el) in order.order.order.orderItems"
                 :key="el.id"
            >
              <div class="flex justify-between items-center border-solid border-2 border-indigo-600 pl-4 mb-2">
                <ul>
                  <li>Наименование блюда: <b class="ml-10 text-xl text-green-600">{{ el.title }}</b></li>
                  <li>Количество блюд: <b class="ml-20 text-xl text-orange-600">{{ el.quantity }}</b></li>
                  <li>Стоимость блюда: <b class="ml-20 text-lg">{{ el.price }} рублей</b></li>
                  <li>Суммарная стоимость: <b class="ml-10 text-lg">{{ el.price * el.quantity }} рублей</b></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      <div class="flex text-lg">
        <h2><b>Общая стоимость заказа:</b></h2>
        <p>
          <b class="ml-4 text-2xl text-orange-500">
            {{ order.order.order.totalPrice }} рублей
          </b>
        </p>
      </div>

      <div class="flex justify-between mt-2">
        <h2 class="text-lg"><b>Состояние Заказа:</b></h2>
        <h2 class="font-bold text-xl text-green-500">
          Заказ № {{ order.order.order.id }} Исполнен в {{ order.timeFinishOrder }} ({{ order.dateFinishOrder }})
        </h2>

        <a class="flex items-center"
           @click="deleteFinishOrder(order)">
          <h2 class="font-bold">Удалить Заказ:</h2>
          <img
              class="opacity-100 color:red mb-2 hover:opacity-100 cursor-pointer transition"
              src="/close-full-red-48.svg"
              alt="Close"
          />
        </a>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script setup>
import {ref} from 'vue';

defineProps({
  finishOrders: {
    type: Array,
  },
  order: {
    type: Object,
  },
  title: {
    type: String,
    default: 'Исполненные Заказы',
  },
  color: {
    type: String,
    default: 'primary'
  },
});

const emit = defineEmits(['deleteFinishOrder',]);

const visible = ref(false);

const deleteFinishOrder = (order, index) => {
  emit('deleteFinishOrder', {order, index});
};
</script>

<style lang="scss" scoped>
.btn-new {
  margin-top: 6px;
  margin-bottom: 6px;
  padding: 0 20px;
  width: 150px;
  height: 30px;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .4s;

  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
    &:enabled:active {
      color: #0e4199;
      background: orange;
    }
  }
}
</style>