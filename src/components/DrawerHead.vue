<template>
  <div class="flex items-center gap-5 mb-8 mt-4 ml-2">

    <router-link to='/'>
    <div class="flex items-center cursor-pointer gap-5 mb-8 mt-4 ml-2">
      <img
          class="cursor-pointer hover:opacity-100 transition hover:-translate-x-1"
          src="/arrow-left.svg"
          alt="arrow"/>

      <h2 class="text-2xl font-bold">Корзина</h2>
    </div>
    </router-link>

    <a @click="clearDrawer">
      <img
          class="cursor-pointer mb-8 mt-4 ml-14"
          src="/clear-cart-50.svg"
          width="30px"
          height="30px"
          alt="Clear Cart"
      />
    </a>
  </div>
</template>

<script setup>
import {useStore} from 'vuex';

const store = useStore()

// Очищает корзину
const clearDrawer = ()=>{
  store.commit('CLEAR_CART');
}
</script>

<style scoped>

</style>