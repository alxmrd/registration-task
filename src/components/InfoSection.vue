<template>
  <div class="container">
    <div class="side">
      <div class="red-line"></div>
      <div class="side-header-text">
        Big<span class="dot">.</span> Fair<span class="dot">.</span> Human<span class="dot">.</span>
      </div>
      <div class="side-text-description">
        Learn why over <span class="desc-span">5 million clients choose XM</span> as their trusted
        online broker.
      </div>
    </div>
    <div class="main">
      <div class="sub-component">
        <div class="auth-icon"></div>
        <div class="main-header">Authorised and Regulated</div>
        <div class="main-desc">
          At XM, we adhere to all regulatory standards and are fully authorised and regulated by
          FSC.
        </div>
      </div>
      <div class="sub-component">
        <div class="people-icon"></div>
        <div class="main-header">Committed and Fair</div>
        <div class="main-desc">
          We operate with complete transparency and adhere to the highest professional and ethical
          standards.
        </div>
      </div>
      <div class="sub-component">
        <div class="award-icon"></div>
        <div class="main-header">Multi-Award-Winning</div>
        <div class="main-desc">
          Over the years we have received over 40 awards for the quality of our products and
          services.
        </div>
      </div>
      <div class="sub-component">
        <div class="support-icon"></div>
        <div class="main-header">24/7 Support</div>
        <div class="main-desc">
          Our support agents are on hand 24/7 to answer your questions or assist you with any
          issues.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'InfoSection',
  setup() {}
}
</script>

<style scoped>
.container {
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 60px 20px;
}

.side {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 65px;
}

.side-header-text {
  text-align: start;
  color: #444;
  text-align: center;
  font-size: 35px;
  font-weight: 900;
  line-height: 48.265px;
  letter-spacing: -0.7px;
  margin-top: 22px;
  margin-bottom: 22px;
}

.dot {
  color: #d51820;
}

.side-text-description {
  color: #444;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
}

.main {
  flex: 1 0 100%;
}

.main-header {
  color: #444;
  text-align: center;
  font-size: 19.773px;
  font-weight: 700;
  line-height: 23.393px; /* 118.308% */
}

.main-desc {
  color: #444;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.748px;
  width: 244px;
}

.sub-component {
  flex: 1 0 50%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
}

.sub-component:not(:last-child) {
  margin-bottom: 50px;
}

.full-width-block {
  flex: 1 0 100%;
}

.red-line {
  width: 40px;
  height: 4px;
  background-color: #d51820;
}

/* icon section */
.auth-icon {
  width: 46px;
  height: 53px;
  background-image: url('@/assets/auth.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.people-icon {
  width: 53px;
  height: 53px;
  background-image: url('@/assets/people.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.award-icon {
  width: 53px;
  height: 53px;
  background-image: url('@/assets/award.png');
  background-repeat: no-repeat;
  background-size: cover;
}

.support-icon {
  width: 53px;
  height: 53px;
  background-image: url('@/assets/support.png');
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 768px) {
  .container {
    padding: 85px 57px;
  }

  .main {
    flex: 1 0 66%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .side-header-text {
    font-size: 41.881px;
    line-height: 48.265px;
    letter-spacing: -0.838px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  .side-text-description {
    line-height: 33.879px;
    text-align: center;
  }

  .sub-component {
    align-items: start;
  }

  .main-desc {
    width: 160px;
    text-align: start;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 92px 61px;
    text-align: center;
    justify-content: center;
  }

  .side {
    flex: 1 0 33%;
    padding-right: 126px;
    display: flex;
    align-items: start;
    margin-bottom: 60px;
  }

  .main {
    flex: 1 0 66%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .side-header-text {
    text-align: start;
    margin-top: 40px;
    margin-bottom: 55px;
    font-size: 80px;
    font-weight: 900;
    line-height: 90px;
    letter-spacing: -1.6px;
  }

  .sub-component {
    flex: 1 0 50%;
  }

  .side-text-description {
    text-align: start;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 23.879px;
    padding-right: 80px;
  }

  .main-desc {
    width: 235px;
  }

  /* icon section */
  .auth-icon {
    width: 49px;
    height: 56px;
  }

  .people-icon {
    width: 57px;
    height: 57px;
  }

  .award-icon {
    width: 57px;
    height: 57px;
  }

  .support-icon {
    width: 57px;
    height: 57px;
  }
}
</style>
