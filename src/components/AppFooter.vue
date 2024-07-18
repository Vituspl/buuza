<template>
  <footer>
    <router-link to="/deliveryText" >
      <button
          class="btn btn__delivery"
          @click="showModal"
      >
        Условия доставки
      </button>
    </router-link>

<!--    <div class="footer__address">
      Наш адрес: г. Ангарск , <br> 33-й микрорайон, 14
    </div>-->

    <router-link to="/confidential">
      <button class="btn btn__manual">
        Важная информация
      </button>
    </router-link>

  </footer>
</template>

<script setup>
/*export default {
  name: "AppFooter"
};*/
</script>

<style scoped>

</style>