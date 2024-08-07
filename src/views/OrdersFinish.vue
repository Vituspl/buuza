<template>
  <div class="m-auto">
    <div class="fixed top-0 left-100 w-full max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">

      <back-menu/>

      <div class="flex gap-4 mb-4">
        <OrdersNav class="font-bold"/>
      </div>
      <h1 class="grid justify-items-center text-2xl font-bold mb-4">{{ title }}</h1>

    </div>

    <div class="mt-52">
    <orders-finish-info
    v-for="(order, index) in finishOrders"
    :key="order.id"
    :order="order"
    @deleteFinishOrder="deleteFinishOrder(order, index)"
    />
    </div>
  </div>
</template>

<script setup>
import BackMenu from '@/components/UI/BackMenu.vue';
import OrdersNav from '@/components/OrdersNav.vue';
import OrdersFinishInfo from '@/components/OrdersInfo/OrdersFinishInfo.vue'

import {useStore} from 'vuex';
import {computed, onMounted} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Исполненные Заказы',
  },
});

const store = useStore();

const finishOrders = computed(() => store.getters.finishOrders);
// console.log(finishOrders);

const deleteFinishOrder = (order, index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('DELETE_FINISH_ORDER', {order, index});
};

const fetchFinishOrders = () => {
  store.dispatch('GET_FINISH_ORDERS_FROM_API');
};

onMounted(() => {
  fetchFinishOrders();
});
</script>

