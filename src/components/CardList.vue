<template>
  <main>
    <div class="title-menu" v-if="activeCategory === 'Все Меню'"><b>{{ activeCategory }}</b></div>
    <div class="title-menu" v-else><b>Блюда категории {{ activeCategory }}</b></div>

    <div class="items">
      <CardItem
          v-for="product in products"
          :product="product"
          :key="product.id"
          :id="product.id"
          :product-id="product.id"
          :title="product.title"
          :image-url="product.imageUrl"
          :category="product.category"
          :price="product.price"
          :quantity="product.quantity"
          :is-added="product.isAdded"
          @add-to-cart="addToCart(product)"
      />
    </div>
  </main>
</template>
<!--          @add-to-cart="addToCart(product)"-->

<!--:id="product.id"-->
<!--:product-id="product.id"-->
<!--:productId="product.id"-->
<!--:title="product.title"-->
<!--:image-url="product.imageUrl"-->
<!--:category="product.category"-->
<!--:ingredients="product.ingredients"-->
<!--:weight="product.weight"-->
<!--:price="product.price"-->
<!--:quantity="product.quantity"-->
<!--:is-added="product.isAdded"-->
<!--:product_data="product"-->

<!--@add-to-cart="addToCart(product)"-->

<script setup>
import CardItem from '@/components/CardItem.vue';
import {inject} from 'vue';
import {useStore} from 'vuex';

defineProps(
    {
      products: Array,
      product: Object,
      id: Number,
      quantity: Number,
      category: String,
      // activeCategory: String,
      isAdded: Boolean,
      ingredients: String,
    }
);

const {activeCategory} = inject('cartActions');

const store = useStore();

const addToCart = (product) => {
  store.dispatch('ADD_TO_CART', product);
};
</script>


<!--
// console.log(product);
// console.log(product.id);
// console.log(id);
// console.log(quantity);
-->

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__link_to_cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 16px;
    border: solid 1px #aeaeae;
  }
}
</style>

<!--<script>
import CardItem from '@/components/CardItem.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'card-list',
  components:{
    CardItem
  },
  props: {
    products: Array,
    activeCategory: String,
  },
  /*data() {
    return {};
  },*/

  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART',
      'cartTotalCost'
    ]),
    /*filterMenu() {
      switch (this.activeCategory) {
        case 'Буузы':
          return this.PRODUCTS.filter(item => item.category === 'Буузы');
        case 'Гриль':
          return this.PRODUCTS.filter(item => item.category === 'Гриль');
        case 'Наборы':
          return this.PRODUCTS.filter(item => item.category === 'Наборы');
        case 'Пельмени':
          return this.PRODUCTS.filter(item => item.category === 'Пельмени');
        case 'Сковороды':
          return this.PRODUCTS.filter(item => item.category === 'Сковороды');
        case 'На компанию':
          return this.PRODUCTS.filter(item => item.category === 'На компанию');
        case 'К Пиву':
          return this.PRODUCTS.filter(item => item.category === 'К Пиву');
        case 'Нагетсы':
          return this.PRODUCTS.filter(item => item.category === 'Нагетсы');
        case 'Супы':
          return this.PRODUCTS.filter(item => item.category === 'Супы');
        case 'Лапша':
          return this.PRODUCTS.filter(item => item.category === 'Лапша');
        case 'Салаты':
          return this.PRODUCTS.filter(item => item.category === 'Салаты');
        case 'Гарниры':
          return this.PRODUCTS.filter(item => item.category === 'Гарниры');
        case 'Закуски':
          return this.PRODUCTS.filter(item => item.category === 'Закуски');
        case 'Для детей':
          return this.PRODUCTS.filter(item => item.category === 'Для детей');
        case 'Десерты':
          return this.PRODUCTS.filter(item => item.category === 'Десерты');
        case 'Соусы':
          return this.PRODUCTS.filter(item => item.category === 'Соусы');
          // case 'Напитки':
          //   return items.value.filter(item => item.category === 'Напитки');
        case 'Все Меню':
        default:
          return this.PRODUCTS;
      }
    },*/
  },

  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART',
    ]),
    addToCart(product) {
      const {id, quantity} = product;
      console.log(product);
      console.log(isAdded);
      console.log(id);
      console.log(quantity);
      this.ADD_TO_CART(product, id, quantity);

    },
  },
  /*mounted() {
    // аналог - this.$store.dispatch('GET_PRODUCTS_FROM_API')
    this.GET_PRODUCTS_FROM_API()
  },*/
};
</script>-->

<!--<script setup>
import {inject} from 'vue';
import CardItem from '@/components/CardItem.vue';

defineProps({
  items: Array,
  category: String,
  activeCategory: String,
  isAdded: Boolean,
  ingredients: String,
});

// const {activeCategory} = inject('cartActions');

const {addToCart, removeFromCart} = inject('cartActions');

const emit = defineEmits(['addToCart', 'removeFromCart']);
</script>-->

<!--<router-link to="/cart">
<div class="v-catalog__link_to_cart">Cart: {{ CART.length }}</div>
</router-link>-->

<!--// this.PRODUCTS = localStorage.getItem('PRODUCTS') || [];-->

<!--<template>
  <main>
    <div class="title-menu" v-if="activeCategory === 'Все Меню'"><b>{{ activeCategory }}</b></div>
    <div class="title-menu" v-else><b>Блюда категории {{ activeCategory }}</b></div>

    <div class="items">
      <CardItem
          v-for="product in items"
          :key="product.id"
          :productId="product.id"
          :title="product.title"
          :image-url="product.imageUrl"
          :category="product.category"
          :ingredients="product.ingredients"
          :weight="product.weight"
          :price="product.price"
          :count="product.count"
          :is-added="product.isAdded"
          :product_data="product"
          @add-to-cart="addToCart(product)"
      />
    </div>
  </main>
</template>-->