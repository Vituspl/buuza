<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
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
}

.modal__content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
/*
.app__btns {
  margin: 15px 10px;
  display: flex;
  justify-content: space-between;
}*/
</style>