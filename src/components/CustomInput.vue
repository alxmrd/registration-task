<template>
  <div class="input-container">
    <input
      :class="['input', { 'valid-input': isValid && touched, 'invalid-input': !isValid && touched }]"
      v-model="inputValue"
      @input="touched = true"
      :placeholder="placeholder"
      :type="type"
    />
    <label v-if="!isValid && touched" class="error-label">Invalid input</label>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: ['placeholder', 'validator', 'type'],
  setup(props) {
    const inputValue = ref('');
    const touched = ref(false);
    const isValid = computed(() => {
      if (!inputValue.value && touched.value) {
        return false; // consider empty input as invalid if it has been touched
      }
      return props.validator(inputValue.value);
    });

    return { inputValue, isValid, touched };
  },
};
</script>

<style scoped>
.input-container {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.input {
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid #A9A9A9;
  background: #F7F7F7;
  padding: 12px 0 12px 10px;
}

.input:focus-visible {
  outline: none;
}

.valid-input {
  border: 1px solid #29A643;
}

.invalid-input {
  border: 1px solid #D51820;
}

.error-label {
  color: red;
  margin-top: 5px;
}
</style>