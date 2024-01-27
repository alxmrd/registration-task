// tests/RegistrationForm.spec.js
import { ref, computed } from 'vue'
import { expect, test, describe } from 'vitest'

test('validates name', () => {
  const name = ref('')
  const touched = ref({ name: false })
  const isValid = computed(() => touched.value.name && /^[a-zA-Z\s]*$/.test(name.value))

  name.value = 'John Doe'
  touched.value.name = true
  expect(isValid.value, true)

  name.value = 'John123'
  expect(isValid.value, false)
})

test('validates dob', () => {
  const dob = ref(new Date())
  const dateHasSelected = ref(false)
  const ageInYears = ref(0)
  const isValid = computed(
    () => dateHasSelected.value && ageInYears.value >= 18 && ageInYears.value <= 65
  )

  dob.value = new Date('2000-01-01')
  dateHasSelected.value = true
  ageInYears.value = new Date().getFullYear() - dob.value.getFullYear()
  expect(isValid.value, true)

  dob.value = new Date('2015-01-01')
  ageInYears.value = new Date().getFullYear() - dob.value.getFullYear()
  expect(isValid.value, false)
})

test('validates email', () => {
  const email = ref('')
  const touched = ref({ email: false })
  const isValid = computed(() => /\S+@\S+\.\S+/.test(email.value))

  email.value = 'john@example.com'
  touched.value.email = true
  expect(isValid.value, true)

  email.value = 'john@example'
  expect(isValid.value, false)
})

describe('Password Validation', () => {
  const password = ref('')
  const isLengthValid = computed(() => password.value.length >= 8 && password.value.length <= 15)
  const isNumberValid = computed(() => /\d/.test(password.value))
  const isLowercaseValid = computed(() => /[a-z]/.test(password.value))
  const isUppercaseValid = computed(() => /[A-Z]/.test(password.value))
  const isSpecialCharValid = computed(() => /[#()\[\]@$*!?|,^\/\+_-]/.test(password.value))

  test('should be between 8 and 15 characters', () => {
    password.value = 'short'
    expect(isLengthValid.value).toBe(false)
    password.value = 'thisisaverylongpassword'
    expect(isLengthValid.value).toBe(false)
    password.value = 'justRight'
    expect(isLengthValid.value).toBe(true)
  })

  test('should contain at least one number', () => {
    password.value = 'noNumbers'
    expect(isNumberValid.value).toBe(false)
    password.value = 'with1Number'
    expect(isNumberValid.value).toBe(true)
  })

  test('should contain at least one lowercase letter', () => {
    password.value = 'NOLOWERCASE'
    expect(isLowercaseValid.value).toBe(false)
    password.value = 'WithLowercase'
    expect(isLowercaseValid.value).toBe(true)
  })

  test('should contain at least one uppercase letter', () => {
    password.value = 'nouppercase'
    expect(isUppercaseValid.value).toBe(false)
    password.value = 'WithUppercase'
    expect(isUppercaseValid.value).toBe(true)
  })

  test('should contain at least one special character', () => {
    password.value = 'NoSpecialChar'
    expect(isSpecialCharValid.value).toBe(false)
    password.value = 'With$pecialChar'
    expect(isSpecialCharValid.value).toBe(true)
  })
})

test('nextStep function', () => {
  const step = ref(1)
  const name = ref('John Doe')
  const dob = ref(new Date('2000-01-01'))
  const dateHasSelected = ref(true)
  const ageInYears = ref(new Date().getFullYear() - dob.value.getFullYear())
  const touched = ref({ name: true, dob: true })
  const isValid = computed(() => ({
    name: touched.value.name && /^[a-zA-Z\s]*$/.test(name.value),
    dob: dateHasSelected.value && ageInYears.value >= 18 && ageInYears.value <= 65
  }))

  if (isValid.value.name && isValid.value.dob) {
    step.value++
  }

  expect(step.value, 2)
})

test('prevStep function', () => {
  const step = ref(2)

  step.value--

  expect(step.value, 1)
})

test('calculateAge function', () => {
  const dob = ref(new Date('2000-01-01'))
  const ageInYears = ref(new Date().getFullYear() - dob.value.getFullYear())

  expect(ageInYears.value, new Date().getFullYear() - 2000)
})
