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

    <router-link to="/finish">
      <NewButton
          label="Исполненные Заказы"
          color="success"
          :outlined="false"
      />
    </router-link>
  </div>
</template>

<script setup>
import {ref} from "vue";
import NewButton from '@/components/UI/NewButton.vue';

const links = ref([
  {label: "Все заказы", href: "/admin"},
  {label: "Доставка Курьером", href: "/delivery"},
  {label: "Самовывоз", href: "/pickup"},
  {label: "Заказы в кафе", href: "/inHall"},
  {label: "Отправленные Заказы", href: "/sent"},
]);
</script>

<style scoped>

</style>