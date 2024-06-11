<template>
  <aside>
    <div class="items">

      <button
          v-for="value in categoryes"
          :key="value.category"
          :src="value.src"
          class="btn item"
          @click="sendCategory(value.name)"
      >
        <span>{{ value.name }}</span>
      </button>

    </div>
  </aside>

  <div class="row">
    <div class="items">
      <button
          v-for="value in categoryes"
          :key="value.category"
          :src="value.src"

          class="btn item"
          @click="sendCategory(value.name)"
      >
        <img :src="value.src" width="40px" height="40px" alt=""/>
        <p>{{ value.name }}</p>
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  activeCategory: String,
  label: String,
});

const emit = defineEmits(['setCategory']);

function sendCategory(category) {
  emit('setCategory', category);
}

const categoryes = [
  {name: 'Все Меню', src: "/images/icons/icons8-full-menu-50.png"},
  {name: 'Буузы', src: "/images/icons/hinkali.png"},
  {name: 'Гриль', src: "/images/icons/icons8-kebab-50.png"},
  {name: 'Наборы', src: "/images/icons/icons8-assorti-50.png"},
  {name: 'Пельмени', src: "/images/icons/icons8-pelmeni-50.png"},
  {name: 'Сковороды', src: "/images/icons/icons8-skovoroda-50.png"},
  {name: 'На компанию', src: "/images/icons/icons8-assorti-50.png"},
  {name: 'К Пиву', src: "/images/icons/shrimp_2-50x56.png"},
  // {name: 'К Пиву', src: "/images/icons/shrimp-50x50.png"},
  {name: 'Нагетсы', src: "/images/icons/icons8-chicken-64.png"},
  {name: 'Супы', src: "/images/icons/icons8-sup-64.png"},
  {name: 'Лапша', src: "/images/icons/icons8-wok-50.png"},
  {name: 'Салаты', src: "/images/icons/icons8-salat-50.png"},
  {name: 'Гарниры', src: "/images/icons/icons8-garnir-green-50.png"},
  {name: 'Закуски', src: "/images/icons/shrimp_2-50x56.png"},
  // {name: 'Закуски', src: "/images/icons/shrimp-50x50.png"},
  {name: 'Для детей', src: "/images/icons/icons8-potato-free-50.png"},
  {name: 'Десерты', src: "/images/icons/icons8-desert-50.png"},
  {name: 'Соусы', src: "/images/icons/icons8-sous-66.png"},
  // {name: 'Напитки', src: "/images/icons/icons8-sodovaya-50.png"},
];
</script>

<style scoped>
.btn {
  display: block;
}

img {
  margin: 0 auto 10px;
}

p {
  color: #00FF00;
  font-size: 14px;
  white-space: pre-wrap;
  margin: 0 auto 5px;
}

.orange {
  background-color: orange;
}

.category {
  background-color: blue;
}
</style>

