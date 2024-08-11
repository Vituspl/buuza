<template>
  <div>
    <AppFigure/>
    <DrawerHead/>

    <div v-if="!cartTotalCost && !orderDone" class="block h-full items-center">
      <CartEmpty
          title="Ваша Корзина пустая"
          description="Добавьте хотя бы одно блюдо, чтобы сделать заказ"
          image-url="/package-icon.png"
      />

      <div class="mt-12 items-center text-center">
          <router-link to="/track">
            <new-button
                label="Отследить свой заказ"
            />
          </router-link>
      </div>
    </div>

    <div v-else-if="!cartTotalCost || orderDone"
         class="block h-full items-center"
         v-for="item in order"
         :key="item.id"
         :order="order"
    >

      <CartEmpty
          title="Заказ оформлен"
          :description="`Ваш заказ: №${item.id} от ${item.dateOrder} принят в ${item.timeOrder}, мы Вам перезвоним в течении 15 минут`"
          image-url="/order-success-icon.png"
      />

      <div class="mt-12 text-center">
        <router-link to="/track">
          <new-button
              label="Отследить заказ"
              @click="trackOrder(item.id)"
          />
        </router-link>
      </div>
    </div>

    <div v-else>
      <cart-item
          v-for="(product, index) in cart"
          :key="product.id"
          :id="product.id"
          :product="product"
          :quantity="product.quantity"
          :title="product.title"
          :price="product.price"
          :image-url="product.imageUrl"
          :ingredients="product.ingredients"
          :is-added="product.isAdded"
          @deleteFromCart="deleteFromCart(index)"
          @changeIsAdded="changeIsAdded(product)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />

      <div class="flex-1 flex-col gap-4 my-7">
        <p class="text-xl text-red-700"><b>Стоимость заказа:</b></p>

        <div class="flex gap-2 text-xl text-blue-700">
          <p><b>С доставкой:</b></p>
          <div class="flex-1 border-b-blue-500 border-b-2 border-dashed color"></div>
          <b>{{ cartTotalCost }} &#8381;</b>
        </div>

        <div class="flex gap-2 text-xl text-blue-700 mt-4">
          <b>Самовывозом (-10%):</b>
          <div class="flex-1 border-b-blue-500 border-b-2 border-dashed color"></div>
          <b>{{ pickupTotalCost }} &#8381;</b>
        </div>

        <new-modal v-model:show="modalVisible">
          <new-user-form
              @orderDone="isCreating"
          />
        </new-modal>

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
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import AppFigure from '@/components/AppFigure.vue';
import DrawerHead from '@/components/DrawerHead.vue';
import CartEmpty from '@/components/CartEmpty.vue';

import NewInput from '@/components/UI/NewInput.vue';
import NewModal from '@/components/UI/NewModal.vue';
import NewUserForm from '@/components/NewUserForm.vue';
import NewButton from '@/components/UI/NewButton.vue';

import {useStore} from 'vuex';
import {computed, reactive, ref} from 'vue';
import {helpers, maxLength, minLength, numeric, required, requiredIf} from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

defineProps({
  product: {
    type: Object,
  },
  id: String,
  imageUrl: String,
  title: String,
  ingredients: String,
  price: Number,
  quantity: Number,
});

const emit = defineEmits(['trackOrder']);

const store = useStore();
const cart = computed(() => store.getters.CART);
const user = computed(() => store.getters.USER);
const users = computed(() => store.getters.USERS);
const order = computed(() => store.getters.ORDER);
// console.log(order);
const orders = computed(() => store.getters.ORDERS);
// console.log(orders);

const cartTotalCost = computed(function () {
  let result = [];
  if (cart.value.length) {
    for (let product of cart.value) {
      result.push(product.price * product.quantity);
    }
    result = result.reduce(function (sum, el) {
      return sum + el;
    });
    return result;
  } else {
    return 0;
  }
});

// Расчет стоимости заказа для Самовывоза
const pickupTotalCost = computed(() =>
    cartTotalCost.value - Math.round((cartTotalCost.value * 10) / 100)
);

const modalVisible = ref(false);

const showModal = () => {
  // modalVisible.value = true;
  modalVisible.value = !modalVisible.value;
};

const increment = (index) => {
  store.dispatch('INCREMENT_CART_ITEM', index);
};
const decrement = (index) => {
  store.dispatch('DECREMENT_CART_ITEM', index);
};
const deleteFromCart = (index) => {
  store.dispatch('DELETE_FROM_CART', index);
};
const changeIsAdded = (product) => {
  store.dispatch('CHANGE_IS_ADDED', product);
};

const orderDone = ref(false);
const isCreating = () => {
  orderDone.value = true;
};

const trackOrder = (orderId) => {
  emit('trackOrder', {orderId});
};
</script>

