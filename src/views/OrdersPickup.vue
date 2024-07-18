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
    default: 'Самовывоз (-10%)',
  },
});
</script>

<style scoped>

</style>