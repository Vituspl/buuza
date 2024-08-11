<template>
  <div class="flex flex-col bg-gray-400/60 item-center border border-slate-200 p-2 rounded-xl gap-2 mb-2">
    <div class="flex items-center bg-white shadow-lg border border-slate-200 p-2 rounded-xl gap-1">
      <img class="w-28 h-28 rounded-xl hover:scale-150 transition duration-300 ease-out cursor-pointer" :src="imageUrl" :alt="title"/>

      <div class="flex flex-col flex-1">
        <p class="pl-4"><b>{{ id }}</b></p>

        <p class="pl-4"><b>{{ title }}</b></p>

        <p class="pl-4">"{{ ingredients }}"</p>

        <div class="flex justify-between pl-4 mt-2">
          <p class="flex"><b>{{ price }} руб.</b></p>
        </div>
      </div>
    </div>

    <div class="
        flex
        justify-between
        flex-nowrap
        items-center
        "
    >
      <div class="v-cart-item__quantity">
        <b>Количество:</b>
        <span class="flex items-center pl-2">
          <a @click="decrementItem">
            <img class="cursor-pointer" src="/images/minus-50-red.svg" width="30px" alt="minus"/>
          </a>
          <p class="text-2xl pl-4 pr-4"><b>{{ quantity }}</b></p>
          <a @click="incrementItem">
            <img class="cursor-pointer" src="/images/plus-50-green.svg" width="30px" alt="minus"/>
          </a>
        </span>
      </div>

      <a @click="deleteFromCart(product); changeIsAdded(product)">
        <img
            class="opacity-100 color:red  hover:opacity-100 cursor-pointer transition"
            src="/close-full-red-48.svg"
            alt="Close"
        />
      </a>
    </div>
  </div>
</template>

<script setup>

defineProps({
  product: {
    type: Object,
  },
  id: String,
  imageUrl: String,
  title: String,
  ingredients: String,
  price: Number,
  quantity: Number,
});

const emit = defineEmits(['decrement', 'increment', 'deleteFromCart', 'changeIsAdded']);

const decrementItem = () => {
  emit('decrement');
};
const incrementItem = () => {
  emit('increment');
};
const deleteFromCart = (product) => {
  emit('deleteFromCart', product);
};
const changeIsAdded = (product) => {
  emit('changeIsAdded', product);
}

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
};
</style>

