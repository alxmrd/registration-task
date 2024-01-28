<template>
  <div class="stepper-wrapper">
    <div class="step-one" :class="{ 'hidden-block': isTriggered }">
      <div class="step-container">
        <div class="step-number" :class="{ 'active-step': isHalfFirst }">1</div>
        <div class="step-header">Step 1</div>
      </div>
      <div class="custom-block first-block" :class="{ half: isHalfFirst, full: isFullFirst }"></div>
    </div>
    <div class="step-two" :class="{ 'hidden-block': !isTriggered }">
      <div class="step-container">
        <div class="step-number" :class="{ 'active-step': isFullFirst }">2</div>
        <div class="step-header">Step 2</div>
      </div>
      <div
        class="custom-block second-block"
        :class="{ half: isHalfSecond, full: isFullSecond }"
      ></div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  name: 'StepperComponent',
  props: {
    step: {
      type: Number,
      default: 0
    },
    nextStepTriggered: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const isHalfFirst = ref(false)
    const isFullFirst = ref(false)
    const isHalfSecond = ref(false)
    const isFullSecond = ref(false)
    const isTriggered = ref(false)
    watch(
      () => props.step,
      (newStep) => {
        isHalfFirst.value = newStep >= 1
        isFullFirst.value = newStep >= 2
        isHalfSecond.value = newStep >= 3
        isFullSecond.value = newStep >= 4
      }
    )

    watch(
      () => props.nextStepTriggered,
      (value) => {
        isTriggered.value = value
      }
    )
    return {
      isHalfFirst,
      isFullFirst,
      isHalfSecond,
      isFullSecond,
      isTriggered
    }
  }
}
</script>

<style scoped>
.stepper-wrapper {
  padding-left: 60px;
  padding-right: 60px;
}

.step-number.active-step {
  background-color: #29a643;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0),
    0 0 0 1px #29a643;
  color: #fff;
}
.step-container {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
}
.step-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background-color: #cccccc;
  color: #201d27;
  border: 2px solid #201d27;
  border-radius: 50%;
  font-size: 16px;
  font-weight: bold;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0),
    0 0 0 1px #cccccc;
}
.step-header {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ccc;
  line-height: 14px;
}

.stepper-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  justify-content: center;
}

.hidden-block {
  display: none;
}

.custom-block {
  width: 100%;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: 27px;
}

.custom-block.half {
  background: linear-gradient(to right, #29a643 50%, #ddd 50%);
}

.custom-block.full {
  background: #29a643;
}

@media (min-width: 768px) {
  .stepper-wrapper {
    flex-direction: row;
    width: auto;
  }

  .custom-block {
    width: 225px;
  }

  .hidden-block {
    display: block;
  }
}

@media (min-width: 1200px) {
  .custom-block {
    width: 403px;
  }
}
</style>
