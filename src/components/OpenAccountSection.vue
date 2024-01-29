<template>
  <div class="open-account-container">
    <p class="text-section-trade">trade with</p>
    <p class="text-section-header">
      <span>Zero Swaps</span> on All XM Ultra Low <br />Accounts for more than 25 instruments!
    </p>
    <p class="text-section-description">
      Enjoy spreads as <span>low as 0.6 pips</span> and <span>leverage up to 1000:1</span> on
      instruments <span>like EURUSD, USDJPY, EURJPY, GBPUSD,</span> and <span>Gold.</span>
    </p>
    <button class="open-account" @click="handleClick">Open Account</button>
    <p class="text-section-demo-account">
      New to trading? Try a <span class="button-text">Demo account.</span>
    </p>
    <p class="text-section-terms">
      Terms and Conditions apply<span>*</span>. To read the full T&Cs,
      <span class="button-text">click here.</span>
    </p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'MyComponent',
  setup() {
    const handleClick = () => {
      alert('open account clicked')
    }

    return {
      handleClick
    }
  }
}
</script>

<style scoped>
.open-account-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
  text-align: center;
  padding-left: 35px;
  padding-right: 35px;
}

.text-section-trade {
  color: #ddd;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 39.5px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 70px;
}

.text-section-header {
  color: #fff;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px;
  margin-bottom: 30px;
}

.text-section-description span,
.text-section-header span {
  font-weight: 700;
}

.text-section-description {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin-bottom: 36px;
}

.open-account {
  width: 290px;
  height: 40px;
  background: #29a643;
  color: #ffffff;
  text-align: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
  cursor: pointer;
}

.text-section-demo-account {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 100%;
  font-weight: 400;
  margin-bottom: 15px;
}

.text-section-demo-account span {
  text-decoration-line: underline;
}

.text-section-terms {
  color: #fff;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.text-section-terms span {
  color: #d51820;
}

.button-text {
  cursor: pointer;
}

@media (min-width: 768px) {
  .open-account-container {
    padding-left: 135px;
    padding-right: 135px;
    margin-bottom: 125px;
  }
}

@media (min-width: 1200px) {
  .open-account-container {
    padding-left: 290px;
    padding-right: 290px;
    margin-bottom: 250px;
  }

  .text-section-header {
    font-weight: 400;
    line-height: 42px;
  }
}
</style>
