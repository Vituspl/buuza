<template>
  <AppFigure/>
  <DrawerHead/>

  <!--  Показываем компонент <InfoBlock> по условию  -->
  <div v-if="!cartTotalCost || orderDone" class="flex h-full items-center">
    <!--  Показать при условии  -->
    <CartEmpty
        v-if="!cartTotalCost && !orderDone"
        title="Ваша Корзина пустая"
        description="Добавьте хотя бы одно блюдо, чтобы сделать заказ"
        image-url="/package-icon.png"
    />
    <!--  Показать при условии  -->
    <CartEmpty
        v-if="orderDone"
        title="Заказ оформлен"
        :description="`Ваш заказ: №${orderDone} от ${date} принят, мы Вам перезвоним в течении 15 минут`"
        description="`мы Вам перезвоним в течении 15 минут`"
        image-url="/order-success-icon.png"
    />
  </div>

  <div v-else>
    <cart-item
        v-for="(item, index) in cart"
        :key="item.id"
        :id="item.id"
        :item="item"
        :quantity="item.quantity"
        :title="item.title"
        :price="item.price"
        :image-url="item.imageUrl"
        :ingredients="item.ingredients"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />

    <div>
      <div class="flex gap-16 mb-8 mt-8">
        <h2>Тип Заказа:</h2>
        <RadioButton
            label="Доставка курьером"
        />
        <RadioButton
            label="Самовывоз"
        />
        <RadioButton
            label="Заказ на столик кафе"
        />
      </div>

      <div class="flex gap-24">
        <h2 class="mr-10">Вариант оплаты:</h2>
        <RadioButton
            label="Наличные"
        />
        <RadioButton
            label="Терминал"
        />
      </div>
    </div>

    <div class="flex-1 flex-col gap-4 my-7">
      <div class="flex gap-2 text-xl text-blue-700">
        <b>Стоимость заказа:</b>
        <div class="flex-1 border-b-blue-500 border-b-2 border-dashed color"></div>
        <b>{{ cartTotalCost }} &#8381;</b>
      </div>

      <my-modal v-model:show="modalVisible">
        <user-form
            @create="createUser"
            @order="createOrder"
        />
      </my-modal>

      <!--      :disabled="buttonDisabled"-->
      <button
          @click="showModal"
          class="mt-4
          transition
          bg-lime-500
          w-full
          rounded-xl
          py-3
          font-bold
          text-xl
          text-blue-700
          hover:bg-lime-600
          active:bg-lime-700
          disabled:bg-slate-300
          cursor-pointer"
      >
        Создать заказ
      </button>
    </div>
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import DrawerHead from '@/components/DrawerHead.vue';
import CartEmpty from '@/components/CartEmpty.vue';
import UserForm from '@/components/UserForm.vue';
import MyModal from '@/components/UI/MyModal.vue';
import AppFigure from '@/components/AppFigure.vue';
import RadioButton from '@/components/UI/RadioButton.vue';

import {useStore} from 'vuex';
import {computed, ref} from 'vue';
import axios from 'axios';

const store = useStore();
const cart = computed(() => store.getters.CART);
const user = computed(() => store.getters.USER);
const users = computed(() => store.getters.USERS);
// const user = ref({});

const cartTotalCost = computed(function () {
  let result = [];
  if (cart.value.length) {
    for (let item of cart.value) {
      result.push(item.price * item.quantity);
    }
    result = result.reduce(function (sum, el) {
      return sum + el;
    });
    return result;
  } else {
    return 0;
  }
});

const modalVisible = ref(false);
const showModal = () => {
  modalVisible.value = true;
};

const increment = (index) => {
  store.commit('INCREMENT', index);
};
const decrement = (index) => {
  store.commit('DECREMENT', index);
};
const deleteFromCart = (index) => {
  store.commit('REMOVE_FROM_CART', index);
};

// Текущая дата без времени
let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

// const isCreating = ref(false);
const orderDone = ref(null);

// Определяем пустую Корзину
// const cartIsEmpty = computed(() => cart.value.length === 0);
// Деактивируем кнопку "Оформить заказ"
/*const buttonDisabled = computed(() =>
    // isCreating.value || cartIsEmpty.value
    cartIsEmpty.value
);*/

// Создаем данные Заказчика
const createUser = (user) => {
  // user.value = user;
  store.dispatch('ADD_USER', user);
};
// console.log(users.value);
console.log(user.value);

const createOrder = () => {
  store.dispatch('CREATE_ORDER', cartTotalCost.value, orderDone.value, {date});
};

// Функция передает POST запрос на сервер, при оформлении заказа, с массивом cart и ключом items
/*const createOrder = async () => {
  try {
    // isCreating.value = true;

    const {data} = await axios.post(`https://1102df40d9a2f61e.mokky.dev/orders`, {
          orderItems: cart.value,
          user: user.value,
          descriptionOrder: `${date}`,
          totalPrice: `Общая стоимость заказа  ${cartTotalCost.value} рублей`,
        },
    );

// Очищает Корзину после оформления заказа
    await store.dispatch('CLEAR_CART');

// Получаем номер выполненного заказа в виде id
    orderDone.value = data.id;
    console.log(orderDone.value);
  } catch (err) {
    console.log(err);
  }

  finally {
    isCreating.value = false;
  }
};*/
</script>

<style scoped>

</style>
