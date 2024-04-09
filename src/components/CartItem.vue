<script>

export default {
  name: 'cart-item',
  components: {},
  props: {
    item: {
      type: Object,
    },
    id: Number,
    imageUrl: String,
    title: String,
    ingredients: String,
    price: Number,
    quantity: Number,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    // Здесь мы эмитим события, а ловим их в к-те Cart.vue
    decrementItem() {
      this.$emit('decrement');
    },
    incrementItem() {
      this.$emit('increment');
    },
    deleteFromCart() {
      this.$emit('deleteFromCart');
    }
  }
}
</script>

<template>
  <div class="flex item-center border border-slate-200 p-4 rounded-xl gap-4 mb-2">
    <img class="w-28 h-28" :src="imageUrl" :alt="title"/>

    <div class="flex flex-col flex-1">
      <b>{{ title }}</b>

<!--      <div class="flex justify-between mt-2">-->
        <p>{{ ingredients }}</p>
<!--      </div>-->

      <div class="flex justify-between mt-2">
        <b class="flex">{{ price }} руб.</b>
      </div>

      <div class="
        flex
        justify-between
        flex-nowrap
        items-center"
      >
        <div class="v-cart-item__quantity">
          <p>Количество:</p>
          <span>
          <span class="quantity__btn" @click="decrementItem">-</span>
          {{ quantity }}
          <span class="quantity__btn" @click="incrementItem">+</span>
          </span>
        </div>

        <a @click="deleteFromCart">
          <img
              class="opacity-100 color:red  hover:opacity-100 cursor-pointer transition"
              src="/close-full-red-48.svg"
              alt="Close"
          />
        </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.v-cart-item__quantity {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 8px;
/*
  &__image {
    max-width: 50px;
  }*/

  .quantity__btn {
    font-size: 24px;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>

