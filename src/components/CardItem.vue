<template>
  <div class="item">
    <a @click="showModal">
      <div class="dish-img">
        <img :src="product.imageUrl" alt="Dish"/>
        <div class="dish-amount" v-if="product.quantity>=1 && product.isAdded">{{ product.quantity }}</div>
      </div>
    </a>

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

      <new-modal v-model:show="modalVisible">
        <ModalCard @addToCartModal="addToCart" :product="product"/>
      </new-modal>
    </div>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';
import NewModal from '@/components/UI/NewModal.vue';
import ModalCard from '@/components/ModalCard.vue';

defineProps(['product']);

const emit = defineEmits(['addToCart']);

const store = useStore();
const cart = computed(() => store.getters.CART);

const decrementItemInCart = (product) => {
  if (product.quantity > 1) {
    product.quantity--;
  }
};

const addToCart = () => {
  emit('addToCart');
};

const modalVisible = ref(false);

const showModal = () => {
  // modalVisible.value = true;
  modalVisible.value = !modalVisible.value;
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
.dish-add:hover {
  background: #FFC7A6;
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
  cursor: pointer;
}
.dish-img:hover {
  transform: scale(1.03);
  transition: all .4s;
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
