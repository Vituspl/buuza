<template>
  <form @submit.prevent="submitForm">
    <new-input
        label="Your password"
        name="password"
        placeholder="Please input password"
        v-model:value="passwordField"
        type="password"
    />
    <new-input
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        v-model:value="v$.confirmPasswordField.$model"
        :error="v$.confirmPasswordField.$errors"
        type="password"
    />


    <div class="flex justify-center mt-4">
<!--      <router-link :to="{ name: 'admin' }" target="_blank">-->
      <router-link to="/admin">
        <new-button
            label="Ok"
            color="primary"
        />
      </router-link>
    </div>
  </form>
</template>

<script setup>
import NewInput from '@/components/UI/NewInput.vue';
import NewButton from '@/components/UI/NewButton.vue';

import useVuelidate from '@vuelidate/core';
import {helpers, sameAs} from '@vuelidate/validators';

import {computed, ref} from 'vue';

const passwordField = ref('admin')
const confirmPasswordField = ref('admin')

const rules = computed(() => ({
  confirmPasswordField: {
    sameAsPassword: helpers.withMessage(`Пароли не совпадают`, sameAs(passwordField.value))
  },
}));

const v$ = useVuelidate(rules, {confirmPasswordField, $stopPropagation: true});

const submitForm = () => {
// Проверяем соблюдение всех правил (rules) в форме инпутов
  v$.value.$touch();
  // console.log(v$.value.$errors);
  if (v$.value.$errors.length !== 0) {
    return alert('Проверьте правильность заполнения');
  }

  return alert('Отправлено');
};
</script>

<style scoped>

</style>