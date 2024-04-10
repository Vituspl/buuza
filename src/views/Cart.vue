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
        :description="`Ваш заказ №${orderDone} от ${date} скоро будет передан курьерской доставке`"
        image-url="/order-success-icon.png"
    />
  </div>

  <div v-else>
    <cart-item
        v-for="(item, index) in cart"
        :key="item.id"
        :id="item.id"
        :quantity="item.quantity"
        :title="item.title"
        :price="item.price"
        :image-url="item.imageUrl"
        :ingredients="item.ingredients"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />

    <div class="flex-1 flex-col gap-4 my-7">
      <div class="flex gap-2 text-xl text-blue-700">
        <b>Стоимость заказа:</b>
        <div class="flex-1 border-b-blue-500 border-b-2 border-dashed color"></div>
        <b>{{ cartTotalCost }} &#8381;</b>
      </div>

      <button
          :disabled="buttonDisabled"
          @click="createOrder"
          class="mt-4
          transition
          bg-lime-500
          w-full
          rounded-xl
          py-3
          text-white
          hover:bg-lime-600
          active:bg-lime-700
          disabled:bg-slate-300
          cursor-pointer"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import DrawerHead from '@/components/DrawerHead.vue';
import CartEmpty from '@/components/CartEmpty.vue'
import {useStore} from 'vuex';
import {computed, ref} from 'vue';
import axios from 'axios';
import AppFigure from '@/components/AppFigure.vue';

    const store = useStore();

    const cart = computed(function () {
      return store.state.cart;
    });

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

const isCreating = ref(false);
const orderDone = ref(null);

// Определяем пустую Корзину
const cartIsEmpty = computed(() => cart.value.length === 0);
// Деактивируем кнопку "Оформить заказ"
const buttonDisabled = computed(() =>
    isCreating.value || cartIsEmpty.value);

// Функция передает POST запрос на сервер, при оформлении заказа, с массивом cart и ключом items
const createOrder = async () => {
  try {
    isCreating.value = true;

    const {data} = await axios.post(`https://9b25d366b1aceedb.mokky.dev/orders`, {
          items: cart.value,
          descriptionOrder: `Дата заказа ${date}`,
          totalPrice: `Общая стоимость заказа  ${cartTotalCost.value} рублей`,
        },
    );
// Очищает Корзину после оформления заказа
      store.commit('CLEAR_CART');

// Получаем номер выполненного заказа в виде id
    orderDone.value = data.id;
    console.log(orderDone.value);
  } catch (err) {
    console.log(err);
  } finally {
    isCreating.value = false;
  }
};
</script>

<style scoped>

</style>
