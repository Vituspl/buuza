<script setup>
defineProps({
  title: String,
  description: String,
  imageUrl: String,
});
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img width="80" height="80" :src="imageUrl" alt="Info image"/>
    <h2 class="mt-4 text-2xl text-blue-700 font-medium"><b>{{ title }}</b></h2>
    <p class="mt-2 text-lg text-blue-700 font-medium">{{ description }}</p>
  </div>
</template>