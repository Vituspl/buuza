<template>
  <div class="flex items-center gap-5 mb-2 mt-2 ml-4">

    <router-link to='/'>
    <div class="flex items-center cursor-pointer gap-5 mb-2 mt-2 ml-2">
      <img
          class="stroke-red-800 cursor-pointer hover:opacity-100 transition hover:-translate-x-1"
          src="/arrow-left.svg"
          alt="arrow"/>

      <h2 class="text-2xl text-blue-700 font-bold">Корзина</h2>
    </div>
    </router-link>

    <a @click="clearDrawer">
      <img
          class="cursor-pointer mb-2 mt-2 ml-20"
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