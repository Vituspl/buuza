<template>
  <div>
    <AppFigure/>
    <DrawerHead/>

    <!--  Показываем компонент <InfoBlock> по условию  -->
    <div v-if="!cartTotalCost || orderDone"
         class="flex h-full items-center">
      <!--  Показать при условии  -->
      <CartEmpty
          v-if="!cartTotalCost && !orderDone"
          title="Ваша Корзина пустая"
          description="Добавьте хотя бы одно блюдо, чтобы сделать заказ"
          image-url="/package-icon.png"
      />
      <!--  Показать при условии  -->
        <CartEmpty
            v-if="orderDone"
            v-for="order in orders"
            :key="order.id"
            title="Заказ оформлен"
            :description="`Ваш заказ: №${order.id} от ${order.descriptionOrder} принят, мы Вам перезвоним в течении 15 минут`"
            image-url="/order-success-icon.png"
        />
    </div>

    <div v-else>
      <cart-item
          v-for="(item, index) in cart"
          :key="item.id"
          :id="item.id"
          :item="item"
          :quantity="item.quantity"
          :title="item.title"
          :price="item.price"
          :image-url="item.imageUrl"
          :ingredients="item.ingredients"
          @deleteFromCart="deleteFromCart(index)"
          @increment="increment(index)"
          @decrement="decrement(index)"
      />

      <div class="flex-1 flex-col gap-4 my-7">
        <div class="flex gap-2 text-xl text-blue-700">
          <b>Стоимость заказа:</b>
          <div class="flex-1 border-b-blue-500 border-b-2 border-dashed color"></div>
          <b>{{ cartTotalCost }} &#8381;</b>
        </div>

        <new-modal v-model:show="modalVisible">
          <new-user-form
              @orderDone="isCreating"
          />
        </new-modal>

        <button
            @click="showModal"
            class="mt-4
          transition
          bg-lime-500
          w-full
          rounded-xl
          py-3
          font-bold
          text-xl
          text-blue-700
          hover:bg-lime-600
          active:bg-lime-700
          disabled:bg-slate-300
          cursor-pointer"
        >
          Создать заказ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from '@/components/CartItem.vue';
import DrawerHead from '@/components/DrawerHead.vue';
import CartEmpty from '@/components/CartEmpty.vue';

import NewModal from '@/components/UI/NewModal.vue';
import NewUserForm from '@/components/NewUserForm.vue';
import AppFigure from '@/components/AppFigure.vue';

import {useStore} from 'vuex';
import {computed, ref} from 'vue';

/*defineProps({
  delivery: String,
  payment: String,
  user: Array,
  sendUser: Function,
  sendOrder: Function,
});*/

const store = useStore();
const cart = computed(() => store.getters.CART);
const user = computed(() => store.getters.USER);
const users = computed(() => store.getters.USERS);
const orders = computed(() => store.getters.ORDERS);

const cartTotalCost = computed(function () {
  let result = [];
  if (cart.value.length) {
    for (let item of cart.value) {
      result.push(item.price * item.quantity);
    }
    result = result.reduce(function (sum, el) {
      return sum + el;
    });
    return result;
  } else {
    return 0;
  }
});

const modalVisible = ref(false);
const showModal = () => {
  modalVisible.value = true;
};

const increment = (index) => {
  store.dispatch('INCREMENT_CART_ITEM', index);
};
const decrement = (index) => {
  store.dispatch('DECREMENT_CART_ITEM', index);
};
const deleteFromCart = (index) => {
  store.dispatch('DELETE_FROM_CART', index);
};

// Текущая дата без времени
// let date = new Date().toISOString().slice(0, 10).split('-').reverse().join('.');

const orderDone = ref(false);
const isCreating = () => {
  orderDone.value = true;
};
// const orderId = ref(null);
// const activeDelivery = ref('');
// const activePayment = ref('');


// Определяем пустую Корзину
// const cartIsEmpty = computed(() => cart.value.length === 0);
// Деактивируем кнопку "Оформить заказ"
/*const buttonDisabled = computed(() =>
    // isCreating.value || cartIsEmpty.value
    cartIsEmpty.value
);*/

// Создаем данные Заказчика
/*const createUser = (user) => {
  // user.value = user;
  store.dispatch('ADD_USER', user);
};*/
// console.log(users.value);
// console.log(user.value);

/*const createOrder = (delivery, payment) => {
  orderDone.value = true;
  // store.dispatch('CREATE_ORDER', cartTotalCost.value, orderDone.value, {date});
  store.dispatch('CREATE_ORDER', cartTotalCost.value, delivery, payment)
};*/

// Функция передает POST запрос на сервер, при оформлении заказа, с массивом cart и ключом items
/*const createOrder = async () => {
  try {
    // isCreating.value = true;

    const {data} = await axios.post(`https://1102df40d9a2f61e.mokky.dev/orders`, {
          orderItems: cart.value,
          user: user.value,
          descriptionOrder: `${date}`,
          totalPrice: `Общая стоимость заказа  ${cartTotalCost.value} рублей`,
        },
    );

// Очищает Корзину после оформления заказа
    await store.dispatch('CLEAR_CART');

// Получаем номер выполненного заказа в виде id
    orderDone.value = data.id;
    console.log(orderDone.value);
  } catch (err) {
    console.log(err);
  }

  finally {
    isCreating.value = false;
  }
};*/
</script>

<style scoped>

</style>
