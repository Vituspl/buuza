<template>
  <div>
    <AppFigure/>
    <AppHeader
    />
    <AppNav/>
    <section class="dish-menu">
      <AppAside
          :active-category="activeCategory"
          @set-category="setCategory"
      />

      <CardList
          :products="filterMenu"
          :active-category="activeCategory"
          @set-category="setCategory"
      />
    </section>
    <AppFooter/>
  </div>
</template>

<script setup>
import AppFigure from '@/components/AppFigure.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppNav from '@/components/AppNav.vue';
import AppAside from '@/components/AppAside.vue';
import CardList from '@/components/CardList.vue';
import AppFooter from '@/components/AppFooter.vue';
import {computed, onMounted, provide, ref, watch} from 'vue';
import {useStore} from 'vuex';
// import axios from 'axios';

const store = useStore();
// Получаю products из store
const products = computed(() => store.getters.PRODUCTS);

// Получаю products через get запрос на сервер.
// const products = ref([])

// Получаю products из localStorage
// const products = ref(JSON.parse(localStorage.getItem("products")));

const activeCategory = ref('Все Меню');

const setCategory = (category) => {
  activeCategory.value = category;
};

const filterMenu = computed(
    () => {
      switch (activeCategory.value) {
        case 'Буузы':
          return products.value.filter(item => item.category === 'Буузы');
        case 'Гриль':
          return products.value.filter(item => item.category === 'Гриль');
        case 'Наборы':
          return products.value.filter(item => item.category === 'Наборы');
        case 'Пельмени':
          return products.value.filter(item => item.category === 'Пельмени');
        case 'Сковороды':
          return products.value.filter(item => item.category === 'Сковороды');
        case 'На компанию':
          return products.value.filter(item => item.category === 'На компанию');
        case 'К Пиву':
          return products.value.filter(item => item.category === 'К Пиву');
        case 'Нагетсы':
          return products.value.filter(item => item.category === 'Нагетсы');
        case 'Супы':
          return products.value.filter(item => item.category === 'Супы');
        case 'Лапша':
          return products.value.filter(item => item.category === 'Лапша');
        case 'Салаты':
          return products.value.filter(item => item.category === 'Салаты');
        case 'Гарниры':
          return products.value.filter(item => item.category === 'Гарниры');
        case 'Закуски':
          return products.value.filter(item => item.category === 'Закуски');
        case 'Для детей':
          return products.value.filter(item => item.category === 'Для детей');
        case 'Десерты':
          return products.value.filter(item => item.category === 'Десерты');
        case 'Соусы':
          return products.value.filter(item => item.category === 'Соусы');
          // case 'Напитки':
          //   return products.value.filter(item => item.category === 'Напитки');
        case 'Все Меню':
        default:
          return products.value;
      }
    }
);

/*const fetchProducts = async () => {
  try {
    const {data} = await axios.get('https://1102df40d9a2f61e.mokky.dev/products');
    products.value = data.map((obj) => ({
      ...obj,
      isAdded: false,
      quantity: 1
    }));
  } catch (err) {
    console.log(err);
  }
};*/

const fetchProducts = async () => {
  await store.dispatch('GET_PRODUCTS_FROM_API');
};

onMounted(() => {
  fetchProducts();
});

// Этот watch следит, что Все Меню меняется, то все items сохраняются в localStorage.
watch(products,
    () => {
      localStorage.setItem('products', JSON.stringify(products.value));
    },
    {deep: true}
);

// Предоставляем данные для дочерних компонентов
provide('cartActions', {
  products,
  // cart,
  activeCategory,
});
</script>

<style scoped>

</style>

