<template>
  <admin
      :title="title"
  />
</template>

<script setup>
import Admin from '@/views/Admin.vue';

defineProps({
  title: {
    type: String,
    default: 'Заказ в кафе',
  },
});
</script>

<style scoped>

</style>

