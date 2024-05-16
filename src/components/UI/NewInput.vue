<template>
  <div class="form-input" :style="{width: width}">
    <input
        :class="['input-text', `input-text_${color}`, `input-label_${color}`]"
        :type="type"
        :name="name"
        :id="name"
        :placeholder="placeholder"
        :value="value"
        @input="updateInput"/>

    <label :for="name" :class="['input-label', `input-label_${color}`]">{{ label }}</label>

    <TransitionGroup>
      <div
          class="form-error"
          v-for="element of error"
          :key="element.$uid">
        <div class="form-error__message">{{ element.$message }}</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>

const emit = defineEmits(['update:value']);

defineProps({
  error: {
    type: Array,
    required: false
  },
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  // Динамические стили
  color: {
    type: String,
    default: 'primary'
  },
});

const updateInput = (event) => {
  emit('update:value', event.target.value);
};
</script>

<style lang="scss" scoped>
.form {
  &-input {
    margin-bottom: 30px;
    position: relative;
  }

  &-error {
    background: var(--danger);
    margin-top: 4px;
    border-radius: 7px;
    font-size: 13px;
    color: #fff;
    padding: 5px;
  }
}

.input {
  &-text {
    border: 1px solid var(--warning);
    padding: 0 10px;
    height: 40px;
    border-radius: 7px;
    font-size: 15px;
    width: 100%;
    position: relative;
    z-index: 1;

    &_primary {
      border: 1px solid var(--primary);
    }

    &_warning {
      border: 1px solid var(--warning);
    }

    &:focus {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }

    &:not(:placeholder-shown) {
      & + .input-label {
        z-index: 1;
        opacity: 1;
        top: -20px;
      }
    }
  }

  &-label {
    font-weight: bold;
    display: block;
    position: absolute;
    top: 20px;
    opacity: 0;
    z-index: -1;
    transition: .3s;
    font-size: 13px;
    //color: var(--danger);
    &_primary {
      color: var(--primary);
    }

    &_warning {
      color: var(--warning);
    }
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>