<script setup>
import {useStore} from 'vuex';
import {computed} from 'vue';

defineProps({
  totalPrice: Number,
})

// const emits = defineEmits(['openDrawer']);
const store = useStore();
const cart = computed(() => store.getters.CART);
</script>

<template>
  <header>
    <div class="logo">
      <img class="logo__img" src="/images/buuza_green_209x31.svg" height="30px" alt="">
    </div>

    <router-link to="/cart">
    <button class="btn btn__cart">
      <img src="/images/cart-empty_white.png" width="30px" height="30px" alt="">
      <span class="price text-base font-bold ml-2">{{ cart.length }}</span>
    </button>
    </router-link>
  </header>
</template>


<style scoped>

</style>

<!--
<button class="btn btn__cart" @click="()=>emits('openDrawer')">
<img src="/images/cart-empty_white.png" width="30px" height="30px" alt="">
<span class="price text-base font-bold ml-2">{{ totalPrice }} &#8381;</span>
</button>-->
