<template>
  <nav>
    <new-modal v-model:show="modalVisible">
      <delivery-text/>
    </new-modal>

    <router-link to="/deliveryText" >
      <button
          class="btn btn__delivery"
          @click="showModal"
      >
        Условия доставки
      </button>
    </router-link>

    <div class="header__tel">
      +7(904) 142-11-88 <br> Закажи по телефону
    </div>
  </nav>
</template>

<script setup>
import NewModal from '@/components/UI/NewModal.vue';
import DeliveryText from '@/views/DeliveryText.vue';

import {ref} from 'vue';

const modalVisible = ref(false);
const showModal = () => {
  modalVisible.value = true;
};
</script>

<style scoped>

</style>

