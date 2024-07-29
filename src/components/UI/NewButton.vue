<template>
  <div>
    <!-- бандим класс btn-new - основной, `btn_${color}` - модификатор класса по цвету -->
    <button
        :class="['btn-new', `btn-new_${color}`, {'btn-new_outlined': outlined}]"
    >
      {{ label }}
    </button>
  </div>
</template>

<!--@click="clickOnButton"-->
<!--:disabled="disabled"-->

<script setup>
// Прописываем свойства(пропсы) для универсальной кнопки
defineProps({
  //Динамическое наименование кнопки
  label: {
    type: String,
    default: 'Button'
  },
  // Динамические стили (цвет) кнопки
  color: {
    type: String,
    default: 'primary'
  },
  disabled:{
    type: Boolean,
    required: false
  },
  outlined: {
    type: Boolean,
    required: false
  },
});

// const emit = defineEmits(['done'])

// const clickOnButton = () => {
//   emit('done')
// }
</script>

<style lang="scss" scoped>
//Цвета кнопок в файле global.scss
.btn-new {
  //margin-right: 10px;
  //margin-bottom: 10px;
  //padding: 4px 5px 4px 5px;
  padding: 0 20px;
  height: 40px;
  color: #ffffff;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &_primary {
    background: var(--primary);
    border: 1px solid var(--primary);
    &:enabled:hover {
      background: var(--primary-hover);
    }
  }
  &_second {
    background: var(--second);
    border: 1px solid var(--second);
    &:enabled:hover {
      background: var(--second-hover);
    }
  }
  &_success {
    background: var(--success);
    border: 1px solid var(--success);
    &:enabled:hover {
      background: var(--success-hover);
    }
  }
  &_info {
    background: var(--info);
    border: 1px solid var(--info);
    &:enabled:hover {
      background: var(--info-hover);
    }
  }
  &_gray-bg{
    background: var(--gray-bg);
    border: 1px solid var(--gray-bg);
    &:enabled:hover {
      background: var(--warning);
    }
  }
  &_warning {
    background: var(--warning);
    border: 1px solid var(--warning);
    &:enabled:hover {
      background: var(--warning-hover);
    }
  }
  &_danger {
    background: var(--danger);
    border: 1px solid var(--danger);
    //Цвет фона включится при наведении
    &:enabled:hover {
      background: var(--danger-hover);
    }
  }
  &:disabled {
    opacity: .6;
    cursor: default;
  }
 /* &_rounded {
    border-radius: 15px;
  }*/
  &_outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #fff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  &_large {
    height: 48px;
    padding: 0 30px;
  }
}
</style>