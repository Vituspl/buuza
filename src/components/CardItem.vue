<template>
  <div class="item">
    <div class="dish-img">
      <img :src="props.product.imageUrl" alt="Dish"/>
    </div>

    <div class="subtitle">{{ props.product.title }}</div>

    <div class="weight">Стоимость <b class="text-blue-700"> {{ props.product.price }} &#8381;</b></div>

    <div>
      <button
          v-if="!props.product.isAdded"
          class="btn price-add"
          @click.stop="addToCart()"
      >
        <b>В Корзину</b>
      </button>

      <button
          v-else
          class="btn price-added"
      >
        <b>Уже в Корзине</b>
      </button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['product']);

const emit = defineEmits(['addToCart']);

function addToCart() {
  emit('addToCart');
}
</script>

<style scoped>
.price-add {
  display: flex;
  justify-content: center;
  background: lime;
  width: 100%;
  height: 50px;
  color: blue;
  font-size: 24px;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
}

.price-added {
  background: orange;
  color: blue;
  font-size: 18px;
  align-items: center;
  border-radius: 10px;
  padding: 5px;
  cursor: not-allowed;
  opacity: 0.8;
}

.dish-img {
  position: relative;
}
</style>
