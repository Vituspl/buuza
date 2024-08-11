<template>
  <div class="fixed top-0 left-100 w-full max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">
    <div class="flex justify-between mt-4 mb-4 w-full">
      <back-menu/>

      <div v-if="{title: 'Все заказы'}">
        <router-link to="/menu">
          <new-button
              label="Редактирование Меню"
              color="danger"
          />
        </router-link>
      </div>

        <div v-if="{title: 'Все заказы'}" class="flex-col">
          <new-button
              class="place-items-end"
              label="Очистить заказы"
              color="danger"
              @click="clearOrders"
          />
          <p class="text-lg text-red-500 text-center font-bold mr-2 mb-2">Осторожно эта кнопка удалит все Заказы</p>
        </div>
    </div>

    <div class="flex gap-4 mb-4">
      <orders-nav class="font-bold"/>
    </div>

    <h1 class="grid justify-items-center text-2xl font-bold mb-4">{{ title }}</h1>
  </div>
</template>

<script setup>
import NewButton from '@/components/UI/NewButton.vue';
import BackMenu from '@/components/UI/BackMenu.vue';
import OrdersNav from '@/components/OrdersNav.vue';

defineProps({
  title: {
    type: String,
  },
  clearOrders: Function,
});
</script>

<style scoped>

</style>