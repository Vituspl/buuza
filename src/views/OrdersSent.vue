<template>
  <div class="m-auto">

    <head-orders-info :title="title"/>

    <div class="mt-52">
      <orders-sent-info
          v-for="(order, index) in sentOrders"
          :key="order.id"
          :order="order"
          @finishSentOrder="finishSentOrder(order, index)"
          @deleteSentOrder="deleteSentOrder(order, index)"
      />
    </div>
  </div>
</template>

<script setup>
import OrdersSentInfo from '@/components/OrdersInfo/OrdersSentInfo.vue';
import HeadOrdersInfo from '@/components/OrdersInfo/HeadOrdersInfo.vue';

import {useStore} from 'vuex';
import {computed, onMounted} from 'vue';

defineProps({
  title: {
    type: String,
    default: 'Отправленные Заказы',
  },
});

const store = useStore();

const sentOrders = computed(() => store.getters.sentOrders);
// console.log(sentOrders);

const finishSentOrder = (order, index) => {
  // console.log(order);
  store.dispatch('FINISH_ORDER', {order});
  store.dispatch('DELETE_SENT_ORDER', {order, index});
};
const deleteSentOrder = (order, index) => {
  store.dispatch('REMOVE_FROM_USER', index);
  store.dispatch('DELETE_SENT_ORDER', {order, index});
};

const fetchSentOrders = () => {
  store.dispatch('GET_SENT_ORDERS_FROM_API');
};

onMounted(() => {
  fetchSentOrders();
});
</script>

