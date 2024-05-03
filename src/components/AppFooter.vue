<template>
  <footer>
    <div class="footer__address">
      Наш адрес: г. Ангарск , <br> 33-й микрорайон, 14
    </div>

    <router-link to="/admin">
      <button class="btn btn__manual">
        Важная информация
      </button>
    </router-link>

  </footer>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style scoped>

</style>