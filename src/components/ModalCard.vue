<template>
  <div class="w-full m-auto max-w-80">
      <div class="relative text-center">
        <img :src="product.imageUrl" alt="Dish"/>
        <div class="dish-amount" v-if="product.quantity>=1 && product.isAdded">{{ product.quantity }}</div>
      </div>

    <div class="subtitle">{{ product.title }}</div>

    <div class="text-blue-700">{{ product.ingredients }}</div>

    <div class="weight">Стоимость <b class="text-blue-700"> {{ product.price }} &#8381;</b></div>

    <div>
      <button
          v-if="!product.isAdded"
          class="btn dish-add"
          @click.stop="addToCartModal"
      >
        <b>В Корзину</b>
      </button>

      <button
          v-else
          class="btn dish-added"
      >
        <a @click="decrementItemInCart(product)">
          <img
              class="cursor-pointer"
              src="/images/minus-50-blue.svg"
              style="width: 40px; height: 40px; margin: 1px;"
              alt="Minus"
          />
        </a>
        <b>{{ product.quantity }} в Корзине</b>
        <a @click="product.quantity++">
          <img
              class="cursor-pointer"
              src="/images/plus-50-blue.svg"
              style="width: 40px; height: 40px; margin: 1px;"
              alt="Plus"
          />
        </a>
      </button>
    </div>
  </div>
</template>

<script setup>

import {useStore} from 'vuex';
import {computed} from 'vue';

defineProps(['product']);

const emit = defineEmits(['addToCartModal']);

const store = useStore();
const cart = computed(() => store.getters.CART);

const decrementItemInCart = (product) => {
  if (product.quantity > 1) {
    product.quantity--;
  }
};

const addToCartModal = () => {
  emit('addToCartModal');
};

</script>

<style scoped>
.dish-add {
  display: flex;
  justify-content: center;
  /*justify-content: space-between;*/
  background: lime;
  width: 100%;
  height: 50px;
  color: blue;
  font-size: 24px;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.dish-added {
  display: flex;
  justify-content: space-between;
  background: orange;
  width: 100%;
  height: 50px;
  color: blue;
  font-size: 18px;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  cursor: not-allowed;
  opacity: 0.8;
}

.dish-amount {
  font-size: 3.75rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 4px;
  color: lime;
  background: rgba(3, 0, 41, .4);
}
</style>