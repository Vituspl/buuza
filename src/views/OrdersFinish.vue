<template>
  <div class="m-auto">

    <head-orders-info :title="title"/>

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
import OrdersFinishInfo from '@/components/OrdersInfo/OrdersFinishInfo.vue';
import HeadOrdersInfo from '@/components/OrdersInfo/HeadOrdersInfo.vue';

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

