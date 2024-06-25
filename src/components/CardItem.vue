<template>
  <div class="item">
    <div class="dish-img">
      <img :src="product.imageUrl" alt="Dish"/>
      <div class="dish-amount" v-if="product.quantity>1">{{ product.quantity }}</div>
    </div>

    <div class="subtitle">{{ product.title }}</div>

    <div class="weight">Стоимость <b class="text-blue-700"> {{ product.price }} &#8381;</b></div>

    <div>
        <button
            v-if="!product.isAdded"
            class="btn dish-add"
            @click.stop="addToCart"
        >
          <b>В Корзину</b>
        </button>

        <button
            v-else
            class="btn dish-added"
        >
          <a class="z-10"
              @click="decrementItemInCart(product)">
            <img
                class="cursor-pointer"
                src="/images/minus-50-red.png"
                style="width: 40px; height: 40px; margin: 1px;"
                alt="Minus"
            />
          </a>
          <b>{{ product.quantity }} в Корзине</b>
          <a class="z-10"
              @click="product.quantity++">
            <img
                class="cursor-pointer"
                src="/images/plus-50-red.svg"
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

const emit = defineEmits(['addToCart', 'decrement', 'increment']);

const store = useStore();
const cart = computed(() => store.getters.CART);

const decrementItemInCart = (product)=>{
  if(product.quantity>1){
    product.quantity--;
  }
};

const addToCart = () => {
  emit('addToCart');
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

.dish-img {
  position: relative;
}

.dish-amount {
  font-size: 3.75rem;
  /*line-height: 1;*/
  /*font-weight: 400;*/
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*display: -webkit-box;*/
  /*display: -ms-flexbox;*/
  /*display-box: content;*/
  display: flex;
  /*-webkit-box-align: center;*/
  /*-ms-flex-align: center;*/
  align-items: center;
  /*-webkit-box-pack: center;*/
  /*-ms-flex-pack: center;*/
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 4px;
  color: lime;
  background: rgba(3, 0, 41, .4);
}
</style>
