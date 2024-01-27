<template>
  <div class="container">
    <div class="one-card-container">
      <div class="card">
        <div class="card-header">Superior Trade <br />Execution</div>
        <div class="green-line"></div>
        <div class="description">
          <span>99%</span> of trades are executed in <span>less than a second</span>, with no
          requotes or rejections.
        </div>
        <div class="fast-execution-icon"></div>
      </div>
    </div>
    <div class="three-card-container">
      <div class="card competitive-card">
        <div class="card-header">Competitive <br />Pricing</div>
        <div class="green-line"></div>
        <div class="description">
          We offer some of the <span>lowest spreads</span> and we don’t charge commissions.
        </div>
        <div class="competitive-pricing-icon"></div>
      </div>
      <div class="adv-tech-start-card">
        <div class="card">
          <div class="card-header">Advanced <br />Technology</div>
          <div class="green-line"></div>
          <div class="description">
            Trade on <span>MT4</span> or <span>MT5</span>, with expert tools, across desktop, web
            and mobile.
          </div>
          <div class="tech-icon"></div>
        </div>
        <div class="card">
          <div class="card-header">Start with $5</div>
          <div class="green-line"></div>
          <div class="description">
            Start trading your preferred instruments with as little as a
            <span>$5 minimum deposit</span>.
          </div>
          <div class="dollar-icon"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer'
}
</script>
<style scoped>
.fast-execution-icon {
  position: absolute;
  right: 22px;
  width: 26px;
  height: 56px;
  background-image: url('@/assets/fast-execusion-icon.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.competitive-pricing-icon {
  position: absolute;
  right: 22px;
  width: 58px;
  height: 58px;
  background-image: url('@/assets/competitive-pricing-icon.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.tech-icon {
  position: absolute;
  right: 22px;
  width: 58px;
  height: 58px;
  background-image: url('@/assets/tech-icon.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.dollar-icon {
  position: absolute;
  right: 22px;
  width: 38px;
  height: 58px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('@/assets/dollar-icon.png');
}

.green-line {
  background: #29a643;
  width: 50px;
  height: 2px;
}

.card-header {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
}

.description {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}

.description span {
  font-weight: 700;
}

.card {
  padding: 1rem;
  box-sizing: border-box;
  width: 280px;
  height: 235px;
  border-radius: 10px;
  background: #0b0819;
  backdrop-filter: blur(45px);
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 40px 60px 0px 30px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.adv-tech-start-card,
.one-card-container,
.three-card-container {
  width: 100%; /* Full width on mobile */
  gap: 25px;
  display: flex;
  flex-direction: column;
}

/* On tablet */
@media (min-width: 768px) and (max-width: 1199px) {
  .fast-execution-icon {
    right: 44px;
    width: 41px;
    height: 87px;
  }

  .competitive-pricing-icon {
    right: 44px;
    width: 91px;
    height: 91px;
  }

  .tech-icon {
    right: 44px;
    width: 88px;
    height: 88px;
  }

  .dollar-icon {
    right: 44px;
    width: 59px;
    height: 91px;
  }

  .card {
    width: 530px;
    height: 230px;
  }

  .card-header {
    line-height: 30px;
  }
}

/* On desktop */
@media (min-width: 1024px) {
  .fast-execution-icon {
    bottom: 25px;
    width: 100px;
    height: 212px;
  }

  .competitive-pricing-icon {
    right: 25px;
    width: 95px;
    height: 95px;
  }

  .tech-icon {
    right: 25px;
    width: 74px;
    height: 74px;
  }

  .dollar-icon {
    right: 25px;
    width: 48px;
    height: 75px;
  }

  .card {
    width: inherit;
  }

  .one-card-container .card {
    height: inherit;
  }

  .three-card-container > .card {
    height: inherit;
  }

  .container {
    width: 1016px;
    flex-direction: row;
    gap: 20px;
  }

  .adv-tech-start-card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  .one-card-container {
    width: 320px;
    height: 570px;
  }

  .three-card-container {
    height: 570px;
    flex: 1 0 66%; /* Two thirds width on desktop */
  }
}
</style>
