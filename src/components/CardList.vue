<template>
  <main>
    <div class="title-menu" v-if="activeCategory === 'Все Меню'"><b>{{ activeCategory }}</b></div>
    <div class="title-menu" v-else><b>Блюда категории {{ activeCategory }}</b></div>

    <div class="items">
      <keep-alive>
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
      </keep-alive>
    </div>
  </main>
</template>

<script setup>
import CardItem from '@/components/CardItem.vue';
import {inject} from 'vue';
import {useStore} from 'vuex';

defineProps(
    {
      products: Array,
      product: Object,
      // id: Number,
      // quantity: Number,
      // category: String,
      // // activeCategory: String,
      // isAdded: Boolean,
      // ingredients: String,
    }
);

const {activeCategory} = inject('cartActions');

const store = useStore();

const addToCart = (product) => {
  store.dispatch('ADD_TO_CART', product);
};
</script>

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
