<template>
  <div>
    <div class="flex gap-16 mb-8 mt-8 font-bold">
      <h2>Тип Заказа:</h2>
      <RadioButton
          label="Доставка курьером"
      />
      <RadioButton
          label="Самовывоз"
      />
      <RadioButton
          label="Заказ на столик кафе"
      />
    </div>

    <div class="flex gap-24 mb-8 font-bold">
      <h2 class="mr-10">Вариант оплаты:</h2>
      <RadioButton
          label="Наличные"
      />
      <RadioButton
          label="Терминал"
      />
    </div>
  </div>

  <!-- Делаем универсальный (шаблонный) авто генератор заказчиков -->
  <!-- Добавление динамически новых заказчиков -->
  <form @submit.prevent>

    <my-input
        v-model.trim="user.userName"
        type="text"
        placeholder="Ваше имя"
    />
    <my-input
        v-model.trim="user.telephone"
        type="text"
        placeholder="Ваш телефон"
    />
    <my-input
        v-model.trim="user.address"
        type="text"
        placeholder="Адрес для доставки"
    />
    <my-input
        v-model.trim="user.cutlery"
        type="text"
        placeholder="Количество приборов"
    />

    <textarea
        class="mt-4 pl-4 w-full border-solid border-2 border-teal-600"
        v-model.trim="user.customerNote"
        placeholder="Примечание Заказчика">
    </textarea>
    <!-- На кнопку навешиваем слушатель события который будет
         запускать функцию createUser -->
    <!-- Кнопку позиционируем прямо в ней, т.к. в стилях
         мы вырезали .my-btn -->
    <my-button
        style="align-self: center; margin-top: 15px"
        @click="createUser(); createOrder()"
    >
      Оформить заказ
    </my-button>
  </form>
</template>

<script setup>
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import RadioButton from '@/components/UI/RadioButton.vue';
import {ref} from 'vue';

const emits = defineEmits(['create', 'order']);

const user = ref({
  userName: '',
  telephone: '+7',
  address: '',
  typeOrder: '',
  payment: '',
  cutlery: '',
  customerNote: '',
});

const createUser = () => {
  user.id = Date.now();
  /** Генерируем событие create(user) */
  emits('create', user);
  /** После того как сгенерировали событие create(user)
   * очистим user т.е. userName и telephone и т.д. - пустые строки
   */
  user.value = {
    userName: '',
    telephone: '+7',
    address: '',
    typeOrder: '',
    payment: '',
    cutlery: '',
    customerNote: '',
  };
};
const createOrder = () => {
  emits('order');
};
</script>

<style scoped>
/* Блоку с формами зададим свойство flex и основная ось по вертикали */
form {
  display: flex;
  flex-direction: column;
}
</style>

<!--
<template>
  <div>
    <div class="flex gap-16 mb-8 mt-8 font-bold">
      <h2>Тип Заказа:</h2>
      <RadioButton
          label="Доставка курьером"
      />
      <RadioButton
          label="Самовывоз"
      />
      <RadioButton
          label="Заказ на столик кафе"
      />
    </div>

    <div class="flex gap-24 mb-8 font-bold">
      <h2 class="mr-10">Вариант оплаты:</h2>
      <RadioButton
          label="Наличные"
      />
      <RadioButton
          label="Терминал"
      />
    </div>
  </div>

  &lt;!&ndash; Делаем универсальный (шаблонный) авто генератор заказчиков &ndash;&gt;
  &lt;!&ndash; Добавление динамически новых заказчиков &ndash;&gt;
  <form @submit.prevent>
    &lt;!&ndash;    <h4>Адрес доставки</h4>&ndash;&gt;
    &lt;!&ndash; Включаем в инпуты директивы v-bind, которые позволяют
         связывать  какие то данные с каким то компонентом,
         т.е. к первому инпуту бандим (связываем) модель title, а ко второму
         бандим (связываем) модель body .
         Получается, что в инпутах будет всегда находиться то значение,
         которое будет находиться в соотв. моделях &ndash;&gt;
    &lt;!&ndash; Для отслеживания изменений в инпуте, подписываемся
         на событие @input и из инпута забираем value с помощью
         @input="user.title = $event.target.value"  и  @input="user.body = $event.target.value"
          &ndash;&gt;
    <my-input
        v-model.trim="user.userName"
        type="text"
        placeholder="Ваше имя"
    />
    <my-input
        v-model.trim="user.telephone"
        type="text"
        placeholder="Ваш телефон"
    />
    <my-input
        v-model.trim="user.address"
        type="text"
        placeholder="Адрес для доставки"
    />
    <my-input
        v-model.trim="user.cutlery"
        type="text"
        placeholder="Количество приборов"
    />
    &lt;!&ndash;    <my-input
            v-model.trim="user.payment"
            type="text"
            placeholder="Вид оплаты"
        />
        <my-input
            v-model.trim="user.typeOrder"
            type="text"
            placeholder="Тип заказа"
        />&ndash;&gt;

    &lt;!&ndash;    <my-input
            v-model.trim="user.customerNote"
            type="text"
            placeholder="Примечание Заказчика"
        />&ndash;&gt;
    <textarea
        class="mt-4 pl-4 w-full border-solid border-2 border-teal-600"
        v-model.trim="user.customerNote"
        placeholder="Примечание Заказчика">
    </textarea>
    &lt;!&ndash; На кнопку навешиваем слушатель события который будет
         запускать функцию createUser &ndash;&gt;
    &lt;!&ndash; Кнопку позиционируем прямо в ней, т.к. в стилях
         мы вырезали .my-btn &ndash;&gt;
    <my-button
        style="align-self: center; margin-top: 15px"
        @click="createUser(); createOrder()"
    >
      Оформить заказ
    </my-button>
    &lt;!&ndash;    style="align-self: flex-end; margin-top: 15px"&ndash;&gt;
  </form>
</template>

<script>
import MyInput from '@/components/UI/MyInput.vue';
import MyButton from '@/components/UI/MyButton.vue';
import RadioButton from '@/components/UI/RadioButton.vue';

export default {
  name: "UserForm",
  components:{
    MyInput,
    MyButton,
    RadioButton,
  },
  data() {
    /** Ф-ия data() возвращает объект user:{} c изначально пустыми моделями userName и telephone и т.д.  */
    return {
      user: {
        userName: '',
        telephone: '+7',
        address: '',
        typeOrder: '',
        payment: '',
        cutlery: '',
        customerNote: '',
      }
    };
  },
  methods: {
    /** Следует избегать использование стрелочных функций при определении methods,
     *  так как это не позволяет Vue привязать корректное значение this. */
    createUser() {
      this.user.id = Date.now();
      /** Генерируем событие create(user) */
      this.$emit('create', this.user);
      /** После того как сгенерировали событие create(user)
       * очистим user т.е. userName и telephone и т.д. - пустые строки
       */
      this.user = {
        userName: '',
        telephone: '+7',
        address: '',
        typeOrder: '',
        payment: '',
        cutlery: '',
        customerNote: '',
      };
    },
    createOrder(){
      this.$emit('order');
    }
  }
};
</script>

<style scoped>
/* Блоку с формами зададим свойство flex и основная ось по вертикали */
form {
  display: flex;
  flex-direction: column;
}
</style>-->
