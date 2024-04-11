<template>
  <div class="flex flex-col bg-gray-400/60 item-center border border-slate-200 p-2 rounded-xl gap-2 mb-2">
    <div class="flex items-center bg-white shadow-lg border border-slate-200 p-2 rounded-xl gap-1">
      <img class="w-28 h-28" :src="imageUrl" :alt="title"/>

      <div class="flex flex-col flex-1">
        <b class="pl-4">{{ title }}</b>

        <p class="pl-4">"{{ ingredients }}"</p>

        <div class="flex justify-between pl-4 mt-2">
          <b class="flex">{{ price }} руб.</b>
        </div>
      </div>
    </div>

    <div class="
        flex
        justify-between
        flex-nowrap
        items-center"
    >
      <div class="v-cart-item__quantity">
        <b>Количество:</b>
        <span class="flex items-center pl-2">
          <a @click="decrementItem">
            <img class="cursor-pointer" src="/images/minus-50-red.svg" width="30px" alt="minus"/>
          </a>
          <b class="text-2xl pl-4 pr-4">{{ quantity }}</b>
          <a @click="incrementItem">
            <img class="cursor-pointer" src="/images/plus-50-green.svg" width="30px" alt="minus"/>
          </a>
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
</template>

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
};
</script>

<style lang="scss">
.v-cart-item__quantity {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0;
  border-radius: 5px;
  padding: 2px;

  .quantity__btn {
    display: flex;
    font-size: 24px;
    margin-left: 15px;
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>

