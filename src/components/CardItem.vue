<template>
  <div class="item">
    <div class="dish-img">
      <img :src="product.imageUrl" alt="Dish"/>
    </div>

    <div class="subtitle">{{ product.title }}</div>

    <div class="weight">Стоимость <b class="text-blue-700"> {{ product.price }} &#8381;</b></div>

    <div>
<!--  Попробовать: v-if="cart.includes(product)"    -->
<!--   v-if="!product.isAdded"    -->

        <button
            v-if="!product.isAdded"
            class="btn dish-add"
            @click.stop="addToCart()"
        >
          <b>В Корзину</b>
        </button>

        <button
            v-else
            class="btn dish-added"
        >
          <b>Уже в Корзине</b>
        </button>
    </div>
  </div>
</template>

<script setup>

import {useStore} from 'vuex';
import {computed} from 'vue';

// const props = defineProps(['product']);
defineProps(['product']);

const emit = defineEmits(['addToCart']);

const store = useStore();
const cart = computed(() => store.getters.CART);

function addToCart() {
  emit('addToCart');
}

</script>

<style scoped>
.dish-add {
  display: flex;
  justify-content: center;
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

.dish-img {
  position: relative;
}
</style>
