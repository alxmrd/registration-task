<template>
  <div class="registration-form-wrapper">
    <div v-if="step === 1" class="user-info-step">
      <div class="user-inputs-container">
        <div class="input-container">
          <label class="label">Name:</label>
          <input
            placeholder="Full Name"
            v-model="name"
            @input="touched.name = true"
            :class="[
              'input',
              {
                'valid-input': isValid.name && touched.name,
                'invalid-input': !isValid.name && touched.name
              }
            ]"
          />
          <div class="error-label">
            <p v-if="!isValid.name && touched.name">Please Enter Valid Name</p>
          </div>
        </div>
        <div class="input-container">
          <label class="label">Date of Birth:</label>
          <div
            :class="[
              'datepicker-wrapper',
              {
                'valid-input': isValid.dob && dateHasSelected,
                'invalid-input': !isValid.dob && dateHasSelected
              }
            ]"
          >
            <datepicker
              :full-month-name="true"
              input-class="input"
              placeholder="dd/mm/yy"
              :typeable="false"
              :hideInput="false"
              format="dd/MM/yy"
              @update:modelValue="dateSelected"
              :iconColor="color"
              :iconHeight="height"
              :iconWidth="width"
              @input="dob"
              initial-view="year"
            >
            </datepicker>
          </div>
          <div class="error-label">
            <p v-if="!isValid.dob && dateHasSelected && ageInYears < 18">
              Minimum age requirements, 18 years old
            </p>
            <p v-else-if="!isValid.dob && dateHasSelected && ageInYears > 65">
              Maximum age requirements, 65 years old
            </p>
          </div>
        </div>
      </div>
      <button class="button" @click="nextStep" :disabled="!(isValid.name && isValid.dob)">
        CONTINUE
      </button>
    </div>
    <div v-if="step === 2">
      <div class="user-inputs-container">
        <div class="input-container">
          <label class="label">Email:</label>
          <input
            placeholder="email@email.com"
            type="email"
            v-model="email"
            @input="touched.email = true"
            :class="['input', { 'invalid-input': !isValid.email && touched.email }]"
          />
          <p v-if="!isValid.email && touched.email" class="error-label">
            Please enter a valid Email
          </p>
        </div>
        <div class="input-container">
          <label class="label">Password:</label>
          <input
            type="password"
            v-model="password"
            @input="touched.password = true"
            :class="['input', { 'invalid-input': !isValid.password && touched.password }]"
          />
          <div class="password-labels-container">
            <p
              :class="{
                'default-password-label': !touched.password,
                'invalid-password-label': touched.password && !isLengthValid,
                'valid-password-label': touched.password && isLengthValid
              }"
            >
              8-15 characters
            </p>
            <p
              :class="{
                'default-password-label': !touched.password,
                'invalid-password-label': touched.password && !isNumberValid,
                'valid-password-label': touched.password && isNumberValid
              }"
            >
              1 or more numbers
            </p>
            <p
              :class="{
                'default-password-label': !touched.password,
                'invalid-password-label': touched.password && !isLowercaseValid,
                'valid-password-label': touched.password && isLowercaseValid
              }"
            >
              1 or more lower case letters
            </p>
            <p
              :class="{
                'default-password-label': !touched.password,
                'invalid-password-label': touched.password && !isUppercaseValid,
                'valid-password-label': touched.password && isUppercaseValid
              }"
            >
              1 or more upper case letters
            </p>
            <p
              :class="{
                'default-password-label': !touched.password,
                'invalid-password-label': touched.password && !isSpecialCharValid,
                'valid-password-label': touched.password && isSpecialCharValid
              }"
            >
              1 or more special characters (#[]()@$*!?|,^/\+_-)
            </p>
          </div>
        </div>
      </div>
      <button class="button" @click="submit" :disabled="!(isValid.email && isValid.password)">
        REGISTER NOW
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import Datepicker from 'vuejs3-datepicker'
import axios from 'axios'

export default {
  components: {
    Datepicker
  },
  emits: ['formSubmitted', 'update:isValid'],
  setup(_, { emit }) {
    const step = ref(1)
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const touched = ref({ name: false, dob: false, email: false, password: false })
    const dob = ref(new Date())
    const dateHasSelected = ref(false)
    const ageInYears = ref(0)
    const color = '#B1B1B1'
    const height = '14'
    const width = '13'
    const nextStepTriggered = ref(false)

    const dateSelected = (selectedDate) => {
      dob.value = selectedDate
      dateHasSelected.value = true
      ageInYears.value = calculateAge(selectedDate)
    }

    function calculateAge(selectedDate) {
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      const selectedYear = selectedDate.getFullYear()

      return currentYear - selectedYear
    }

    const isLengthValid = computed(() => password.value.length >= 8 && password.value.length <= 15)
    const isNumberValid = computed(() => /\d/.test(password.value))
    const isLowercaseValid = computed(() => /[a-z]/.test(password.value))
    const isUppercaseValid = computed(() => /[A-Z]/.test(password.value))
    const isSpecialCharValid = computed(() => /[#()[\]@$*!?|,^/+_-]/.test(password.value))
    const isValid = computed(() => ({
      name: touched.value.name && name.value.length > 0 && /^[a-zA-Z\s]*$/.test(name.value),
      dob: dateHasSelected.value && ageInYears.value >= 18 && ageInYears.value <= 65,
      email: /\S+@\S+\.\S+/.test(email.value),
      password: password.value.length >= 8
    }))

    watch(isValid, (newVal) => {
      const validKeysCount = Object.values(newVal).filter(Boolean).length
      emit('update:isValid', validKeysCount)
    })

    const nextStep = () => {
      if (isValid.value.name && isValid.value.dob) {
        step.value++
        emit('update:nextStepTriggered', true)
      }
    }

    const submit = async () => {
      if (isValid.value.email && isValid.value.password) {
        try {
          const response = await axios.post('http://localhost:3000/users', {
            name: name.value,
            dob: dob.value,
            email: email.value,
            password: password.value
          })

          if (response.status === 201) {
            emit('formSubmitted', true)
          } else {
            console.error('Error submitting form:', response)
          }
        } catch (error) {
          console.error('Error submitting form:', error)
        }
      }
    }

    return {
      step,
      name,
      dob,
      email,
      password,
      dateHasSelected,
      ageInYears,
      touched,
      isValid,
      nextStep,
      submit,
      dateSelected,
      color,
      width,
      height,
      isLengthValid,
      isNumberValid,
      isLowercaseValid,
      isUppercaseValid,
      isSpecialCharValid,
      nextStepTriggered
    }
  }
}
</script>

<style scoped>
/* form styles */
.registration-form-wrappe {
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-inputs-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
}

/* input label styles */
.label {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
}

/* input styles */
.input-container {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: auto;
}

.input {
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  border: 1px solid #a9a9a9;
  background: #f7f7f7;
  padding: 12px 0 12px 10px;
  color: #000000;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.input::placeholder {
  color: #b1b1b1;
}

.input:focus-visible {
  outline: none;
}

.datepicker-wrapper {
  width: 260px;
  border: 1px solid #a9a9a9;
}

.valid-input {
  width: 260px;
  border: 1px solid #29a643;
}

.invalid-input {
  border: 1px solid #d51820;
}

/* validation label styles */
.error-label {
  color: #d51820;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  display: block;
  height: 13px;
  margin-top: 9px;
}

.invalid-password-label {
  color: #d51820;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.valid-password-label {
  color: #29a643;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.default-password-label {
  color: #959595;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
}

.password-labels-container {
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  gap: 8px;
}

/* button styles */
.button {
  width: 260px;
  height: 40px;
  flex-shrink: 0;
  color: #fff;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  background: #29a643;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
}

.button:disabled {
  background: #ccc;
}

/* styles for screens up to 768px */
@media (min-width: 768px) {
  .user-inputs-container {
    margin-bottom: 33px;
  }

  .input,
  .datepicker-wrapper,
  .valid-input,
  .invalid-input,
  .button {
    width: 454px;
  }

  .button {
    margin-bottom: 25px;
  }
}

/* styles for screens up to 1200px */
@media (min-width: 1200px) {
  .user-inputs-container {
    flex-direction: row;
    margin-bottom: 29px;
  }

  .datepicker-wrapper,
  .input {
    width: 403px;
  }
}
</style>
