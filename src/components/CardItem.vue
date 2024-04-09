<script setup>
import {useStore} from 'vuex';
import {computed, inject, ref} from 'vue';

const props = defineProps(['product']);

const emit = defineEmits(['addToCart']);

const store = useStore();

const cart = computed(() => store.getters.CART);

function addToCart() {
  emit('addToCart');
}

</script>

<template>
  <div class="item">
    <div class="dish-img">
      <img :src="props.product.imageUrl" alt="Dish"/>
    </div>

    <div class="subtitle">{{ props.product.title }}</div>

    <div class="weight">Стоимость <b class="text-blue-700"> {{ props.product.price }} &#8381;</b></div>

    <div>
        <button
            id="myBtn"
            class="btn price-add btn-block"
            @click.prevent="addToCart()"
        >
          <b>В Корзину</b>
        </button>
    </div>

<!--    :disabled="isDisabled"-->
<!--    :class="'price-added'"-->

<!--    :disabled="toggleDisabled"-->

    <!--        <b> {{ itemAlreadyInCart ? "Добавлено" : "В Корзину" }} </b>-->

    <!--          :disabled="toggleDisabled"  -->

    <!--    <div class="price-added" v-if="isDisabled">
          <b>Добавлено</b>
        </div>-->

  </div>
</template>

<!--          :class="{btn__disabled: itemAlreadyInCart}"-->

<!--v-for="value in product"
:key="value.product"
:id="value.id"-->

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

/*#myBtn:disabled {
  cursor: not-allowed;
  background: orange;
  opacity: 0.8;
}*/

/*.dish-amount {
  font-size: 3.75rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 4px;
  color: lime;
  background: rgba(3, 0, 41, .4);
}*/
</style>

<!--a @click="addToCart(product_data), toggleDisabled()">
<button
    :disabled="isDisabled"
    class="price-add"
    :class="{disabledButton: isAdded}"
>
<b>в Корзину</b>
</button>
</a>-->

<!--<script setup>

defineProps({
  product_data: Object,
  index: Number,
  id: Number,
  category: String,
  imageUrl: String,
  title: String,
  ingredients: String,
  weight: Number,
  price: Number,
  quantity: Number,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickRemove: Function,
});


const emit = defineEmits(['onClickAdd']);
</script>-->

<!--
export default {
name: "v-catalog-item",
components: {
vPopup
},
props: {
product_data: {
type: Object,
default() {
return {}
}
}
},
data() {
return {
isInfoPopupVisible: false
}
},
filters: {
toFix,
formattedPrice
},
computed: {},
methods: {
productClick() {
this.$emit('productClick', this.product_data.article)
},
showPopupInfo() {
this.isInfoPopupVisible = true;
},
closeInfoPopup() {
this.isInfoPopupVisible = false;
},
addToCart() {
this.$emit('addToCart', this.product_data);
}
},-->

<!--
<button
    class="btn__cart"
    v-for="value in product"
    :key="value.id"
    @click="addToCart(value.id)"
>
<b>в Корзину</b>
</button>
-->
