<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<!--<router-view v-slot="{ Component, route }">
<transition name="fade">
  <component :is="Component" :key="route.path" />
</transition>
</router-view>-->

<script>

export default {
  name: "app",
  components: {},
  computed: {},
  methods: {},
  mounted() {
  }
};
</script>

<style scoped>

</style>

<!--
<section class="dish-menu">
<AppAside
    :active-category="activeCategory"
    @set-category="setCategory"
/>
<CardList
    :items="filterMenu"
    :active-category="activeCategory"
    @set-category="setCategory"
    @add-to-cart="addToCart"
/>
</section>-->
