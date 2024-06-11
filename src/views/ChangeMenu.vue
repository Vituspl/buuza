<template>
  <div class="fixed top-0 left-100 w-full max-w-7xl flex-col z-10 pl-4 pr-4 bg-white opacity-90">
    <div class="flex justify-between mt-4 mb-4 w-full">
      <router-link to="/admin">
        <NewButton
            label="Назад в Админ"
            color="primary"
        />
      </router-link>
      <h1>Редактирование Меню</h1>
    </div>

  </div>
</template>

<script setup>
import NewButton from '@/components/UI/NewButton.vue';


</script>

<style scoped>

</style>