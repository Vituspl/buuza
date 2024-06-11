<template>
  <div class="flex justify-between mt-4 mb-4 w-full">
    <router-link to="/">
      <NewButton
          label="Назад в Меню"
          color="primary"
      />
    </router-link>

<!--    <router-link to="/menu">
      <NewButton
          label="Редактирование Меню"
          color="danger"
      />
    </router-link>

    <div class="flex-col">
      <NewButton
          class="place-items-end"
          label="Очистить заказы"
          color="danger"
          @click="clearOrders"
      />
      <p class="text-lg text-red-500 text-center font-bold mr-2 mb-2">Осторожно эта кнопка удалит все Заказы</p>
    </div>-->
  </div>
</template>

<script setup>
import NewButton from '@/components/UI/NewButton.vue'
/*import {useStore} from 'vuex';

const store = useStore();
const clearOrders = () => {
  store.dispatch('CLEAR_ALL_ORDERS');
};*/
</script>

