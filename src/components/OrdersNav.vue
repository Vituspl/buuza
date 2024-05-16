<template>
  <div class="flex gap-4">
    <router-link
        v-for="link in links"
        :key="link.label"
        :to="link.href"
    >
      <NewButton
          :label="link.label"
          color="danger"
          :outlined="true"
      />
    </router-link>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import NewButton from '@/components/UI/NewButton.vue';
import {useStore} from 'vuex';

const links = ref([
  {label: "Заказы:  Все заказы", href: "/admin"},
  {label: "Доставка Курьером", href: "/delivery"},
  {label: "Заказы:  Самовывоз", href: "/pickup"},
  {label: "Заказы:  Заказ в кафе", href: "/inHall"},
]);

/*const store = useStore();

const orders = computed(() => store.getters.ORDERS);

const filterOrders = (label) => {
  const orderDelivery = orders.value.filter((order) => order.delivery === label);
  console.log(orderDelivery);
  return orderDelivery;
};*/

</script>

<style scoped>

</style>