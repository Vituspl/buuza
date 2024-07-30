<template>
  <aside>
    <div class="items">
      <button
          v-for="(value, index) in categoryes"
          :key="value.category"
          :src="value.src"
          class="btn item"
          :style="{
            'background-color': activeButton === index + 1 ? background : '',
            'color': activeButton === index + 1 ? color : ''
          }"
          @click="sendCategory(value.name); setActive(index)"
      >
        {{ value.name }}
      </button>
    </div>
  </aside>

  <div class="row">
    <div class="items">
      <button
          v-for="(value, index) in categoryes"
          :key="value.category"
          :src="value.src"
          class="btn item"
          :style="{
            'background-color': activeButton === index + 1 ? background : '',
            'color': activeButton === index + 1 ? color : ''
          }"
          @click="sendCategory(value.name); setActive(index)"
      >
        <img :src="value.src" width="40px" height="40px" alt=""/>
        {{ value.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

defineProps({
  category: String,
  activeCategory: String,
  label: String,
  background: String,
  color: String,
});

const emit = defineEmits(['setCategory']);

const activeButton = ref(0);

const setActive = (index) => {
  activeButton.value = index + 1;
};

const background = ref('orange');
const color = ref('#0e4199')

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
  {name: 'к пиву', src: "/images/icons/shrimp_2-50x56.png"},
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
  font-family: 'SFProDisplay-Regular', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  transition: .4s;
}
.btn:enabled:hover {
  background: #FFC7A6;
  color: #0e4199;
}
.btn:enabled:active {
  color: #0e4199;
  background: orange;
}

img {
  margin: 0 auto 10px;
}
</style>

