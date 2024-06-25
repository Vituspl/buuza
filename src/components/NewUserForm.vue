<template>
  <div>
    <h1 class="text-center text-xl font-bold mb-8">Оформление Заказа</h1>

    <form @submit.prevent="submitForm">
      <div>
        <div>
          <h2>Тип Заказа: {{ delivery }}</h2>
          <p class="text-sm text-red-500">
            "Обязательно Выбрать"
          </p>
          <div
              class="flex-col mb-8 mt-8 font-bold"
              v-for="typeOrder in typeOrderGroup"
              :key="typeOrder.id"
          >
            <RadioButton
                :label="typeOrder.orderName"
                :value="typeOrder.orderName"
                :id="typeOrder.id"
                name="typeOrder"
                v-model:checkedValue="delivery"
                v-model:value.trim="v$.delivery.$model"
                :error="v$.delivery.$errors"
            />
          </div>
        </div>

        <div>
          <h2 class="mr-10">Вариант оплаты: {{ payment }}</h2>
          <p class="text-sm text-red-500">
            "Обязательно Выбрать"
          </p>
          <div
              class="flex-col mb-8 mt-8 font-bold"
              v-for="typePayment in typePaymentGroup"
              :key="typePayment.id"
          >
            <RadioButton
                :label="typePayment.paymentName"
                :value="typePayment.paymentName"
                :id="typePayment.id"
                name="typePayment"
                v-model:checkedValue="payment"
                v-model:value.trim="v$.payment.$model"
                :error="v$.payment.$errors"
            />
          </div>
        </div>
      </div>

      <p class="mb-6 text-sm text-red-700">
        "Используйте Ваш сотовый номер телефона. Иначе по городскому позвоните нам 8(904) 142-11-88"
      </p>
      <new-input
          label="* Обязательно к заполнению"
          color="warning"
          placeholder="Введите Ваше имя"
          name="name"
          v-model:value.trim="v$.user.userName.$model"
          :error="v$.user.userName.$errors"
      />

      <new-input
          label="* Обязательно к заполнению"
          color="warning"
          placeholder="Введите последние 10 цифр Вашего сотового номера телефона."
          name="phone"
          v-model:value.trim="v$.user.userPhone.$model"
          v-mask-phone.us
          :error="v$.user.userPhone.$errors"
      />

      <p class="text-sm text-blue-700">
        "Пишите Адрес только, если заказываете доставку."
        <br/>
        "Если Вы в кафе, то укажите № столика"
      </p>
      <new-input
          label=""
          color="primary"
          placeholder="Введите Ваш Адрес. Введите № столика."
          name="address"
          v-model:value.trim="v$.user.userAddress.$model"
          :error="v$.user.userAddress.$errors"
      />

      <p class="text-sm text-blue-700">
        "Не обязательно заполнять"
      </p>
      <new-input
          label=""
          color="primary"
          placeholder="Введите Количество столовых приборов"
          name="cutlery"
          v-model:value.trim="v$.user.quantityCutlery.$model"
          :error="v$.user.quantityCutlery.$errors"
      />

      <p class="text-sm text-blue-700">
        "Не обязательно заполнять"
      </p>
      <textarea
          class="pl-4 w-full border-solid border-2 border-teal-600"
          v-model.trim="user.userNote"
          placeholder="Примечание Заказчика. Например: Когда доставить и т.п."
          name="note"/>

      <div class="flex justify-center mt-4">
        <new-button
            label="Оформить заказ"
            color="primary"
        />
      </div>
    </form>
  </div>
</template>

<script setup>
import NewInput from '@/components/UI/NewInput.vue';
import NewButton from '@/components/UI/NewButton.vue';
import RadioButton from '@/components/UI/RadioButton.vue';
import useVuelidate from '@vuelidate/core';
import {helpers, required, requiredIf, minLength, maxLength, numeric} from '@vuelidate/validators';

import {computed, reactive, ref} from 'vue';
import {useStore} from 'vuex';

defineProps({
  cartTotalCost: Number,
});

const emit = defineEmits(['orderDone', 'forceRerender']);

const typeOrderGroup = reactive([
  {orderName: 'Доставка Курьером', id: 't1'},
  {orderName: 'Самовывоз', id: 't2'},
  {orderName: 'Заказы в кафе', id: 't3'},
]);
const typePaymentGroup = reactive([
  {paymentName: 'Наличные', id: 'p1'},
  {paymentName: 'Терминал', id: 'p2'},
]);

const delivery = ref('');
// console.log(delivery);
const payment = ref('');
// console.log(payment);

const user = reactive({
  userName: '',
  userPhone: '',
  userAddress: '',
  quantityCutlery: '',
  userNote: '',
});
// console.log(user);

const rules = computed(() => ({
  user: {
    userName: {
      required: helpers.withMessage(`Обязательно надо заполнить`, required),
      // alpha: helpers.withMessage(`Вы можете ввести только буквы`, alpha)
    },
    userPhone: {
      required: helpers.withMessage(`Обязательно надо заполнить`, required),
      maxLength: helpers.withMessage('Надо ввести: не более 10 цифр', maxLength(14)),
      minLength: helpers.withMessage(`Надо ввести: не менее 10 цифр`, minLength(14)),
    },
    userAddress: {
      requiredIfCourier: helpers.withMessage('Обязательно укажите адрес', requiredIf(delivery.value === 'Доставка Курьером')),
      requiredIfHall: helpers.withMessage('Обязательно укажите № столика', requiredIf(delivery.value === 'Заказы в кафе')),
    },
    quantityCutlery: {
      numeric: helpers.withMessage('Введите только цифры', numeric)
    },
  },

  delivery: {
    required: helpers.withMessage(`Обязательно надо выбрать`, required),
  },
  payment: {
    required: helpers.withMessage(`Обязательно надо выбрать`, required),
  },
}));

const v$ = useVuelidate(rules, {user, delivery, payment, $stopPropagation: true});

const store = useStore();
const cart = computed(() => store.getters.CART);

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

const createUser = (user) => {
  user.id = Date.now();
  store.dispatch('ADD_USER', user);
};

const createOrder = (delivery, payment) => {
  store.dispatch('CREATE_ORDER', {cartTotalCost, delivery, payment});
};

const orderDone = () => {
  emit('orderDone');
};

/*const forceRerender = () => {
  emit('forceRerender');
};*/

const submitForm = () => {
// Проверяем соблюдение всех правил (rules) в форме инпутов
  v$.value.$touch();
  // console.log(v$.value.$errors);
  if (v$.value.$errors.length !== 0) {
    return alert('Проверьте правильность заполнения');
  }
  createUser(user);
  createOrder(delivery, payment);
  orderDone();
  // forceRerender();

  return alert('Отправлено');
};
</script>

<style lang="scss" scoped>

</style>