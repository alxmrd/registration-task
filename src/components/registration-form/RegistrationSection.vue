<template>
  <div class="registration-wrapper">
    <div class="form-stepper-container">
      <RegistrationNotice />
      <StepperComponent
        v-if="!isFormSubmitted"
        :step="step"
        :nextStepTriggered="nextStepTriggered"
      />
      <SuccessFullRegistration v-if="isFormSubmitted" />
      <RegistrationForm
        v-else
        @update:nextStepTriggered="nextStepTriggered = $event"
        @formSubmitted="handleFormSubmit"
        @update:isValid="handleIsValidUpdate"
      />
    </div>
    <div class="registration-notice-wrapper">
      <div class="account-reminder-text">
        Don't have an account? <span class="link-text">Create one here</span> and register for the
        event
      </div>
      <div class="terms-and-conditions-text">
        Terms and Conditions apply*. To read the full T&Cs, click
        <span class="link-text"> here</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import RegistrationForm from './RegistrationForm.vue'
import SuccessFullRegistration from './SuccessFullRegistration.vue'
import StepperComponent from './StepperComponent.vue'
import RegistrationNotice from './RegistrationNotice.vue'

export default {
  components: {
    RegistrationForm,
    SuccessFullRegistration,
    StepperComponent,
    RegistrationNotice
  },

  setup() {
    const isFormSubmitted = ref(false)
    const step = ref(0)
    const nextStepTriggered = ref(false)

    const handleFormSubmit = (value) => {
      isFormSubmitted.value = value
      console.log('isFormSubmitted.value', isFormSubmitted.value)
    }

    watch(nextStepTriggered, (newVal) => {
      console.log('nextStepTriggered updated:', newVal)
    })

    const handleIsValidUpdate = (validKeysCount) => {
      step.value = validKeysCount
      console.log('step.value', step.value)
    }

    return {
      isFormSubmitted,
      handleFormSubmit,
      handleIsValidUpdate,
      step,
      nextStepTriggered
    }
  }
}
</script>

<style scoped>
.registration-wrapper {
  margin-bottom: 85px;
}
.form-stepper-container {
  width: 100%; /* Adjust as needed */
}

.registration-notice-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
}

.account-reminder-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  line-height: 15.66px;
}

.terms-and-conditions-text {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #fefefe;
  line-height: normal;
}

.link-text {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #d51820;
  line-height: 15.66px;
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .registration-notice-wrapper {
    max-width: 260px;
    margin: 0 auto;
  }

  .registration-wrapper {
    margin-bottom: 73px;
  }
}
</style>
