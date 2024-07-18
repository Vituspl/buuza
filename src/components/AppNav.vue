<template>
  <nav>
<!--    <new-modal v-model:show="modalVisible">
      <delivery-text/>
    </new-modal>-->

<!--    <router-link to="/deliveryText" >
      <button
          class="btn btn__delivery"
          @click="showModal"
      >
        Условия доставки
      </button>
    </router-link>-->

    <div class="text-sm text-white">
      Наш адрес: г. Ангарск , <br> 33-й микрорайон, 14
    </div>

    <div class="text-sm text-white">
      <span class="text-base text-blue-700 font-bold underline decoration-2">
        <a href="tel:+79041421188">+7(904) 142-11-88</a>
      </span>
      <br>
      Закажи по телефону
    </div>
  </nav>
</template>

<script setup>
import NewModal from '@/components/UI/NewModal.vue';
import DeliveryText from '@/views/DeliveryText.vue';

/*import {ref} from 'vue';

const modalVisible = ref(false);
const showModal = () => {
  modalVisible.value = true;
};*/
</script>

<style scoped>

</style>

