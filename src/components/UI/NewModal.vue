<template>
  <div class="modal" v-if="show">

    <div class="modal__content">
    <NewButton
        class="mb-4"
        label="Вернуться"
        color="primary"
        @click="hideModal"
    />

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import NewButton from '@/components/UI/NewButton.vue';

defineProps({
    show:{
      type: Boolean,
      default: false,
    }
})

const emit = defineEmits(['update:show'])

const hideModal = () =>{
  emit('update:show', false);
}
</script>

<style scoped>
.modal {
  overflow-y: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 10;
}

.modal__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
  z-index: 20;
}
</style>