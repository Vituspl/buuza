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
    default: 'Доставка Курьером',
  },
});
</script>
