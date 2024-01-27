<template>
  <div>
    <h2>Step 1: User Information</h2>
    <form @submit.prevent="nextStep">
      <label for="name">Name:</label>
      <input id="name" v-model="name" type="text" required />
      <custom-input
        id="name"
        type="text"
        v-model="name"
        placeholder="Enter your name"
        :validator="nameValidator"
        required
      />

      <label for="dob">Date of Birth:</label>
      <custom-input
        id="name"
        type="date"
        v-model="name"
        placeholder="Enter your name"
        :validator="nameValidator"
        required
      />

      <div>
  </div>

      <button type="submit">CONTIsdsNUE</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import CustomInput from '../CustomInput.vue';

export default {
  components: {
    CustomInput
  },
  setup() {
    const name = ref('');
    const dob = ref('' );

    const nextStep = () => {
      // Logic to move to the next step goes here
      // You can also do something with the form data here
    };

    return { name, dob, nextStep };
  },
};
</script>
<style scoped>
.v3dp__input_wrapper  {
  width: 260px;
  height: 40px;
  border: 1px solid gray;
  padding: 12px 0 12px 10px;
}
</style>