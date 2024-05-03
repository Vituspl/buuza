<template>
  <button
      class="my-btn"
      @click="clicked = !clicked"
      :class="[ { 'clicked': clicked} ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import {ref} from 'vue';

const clicked = ref(false);
</script>

<style scoped>
.my-btn {
  /* Украсим кнопку */
  padding: 5px;
  background: none;
  color: teal;
  border: 1px solid teal;
  width: 110px;
  border-radius: 5px;
}
</style>