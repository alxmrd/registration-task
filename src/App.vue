<script setup>
import RegistrationSection from './components/registration-form/RegistrationSection.vue'
import CoinCardsWrapper from './components/coin-section/CoinCardsWrapper.vue'
import BlocksContainer from './components/blocks-section/BlocksContainer.vue'
import socialMediaIcons from './SocialMediaIcons.vue'
import xmLogo from '@/assets/xm-logo.svg'
import CarouselComponent from './components/CarouselComponent.vue'
import InfoSection from './components/InfoSection.vue'
import OpenAccountSection from './components/OpenAccountSection.vue'
</script>

<template>
  <main>
    <header class="header">
      <img :src="xmLogo" alt="Icon" />
      <div class="header-buttons">
        <button class="header-button">XM Homepage</button>
        <button class="header-button">Support</button>
      </div>
    </header>
    <body class="app-wrapper">
      <OpenAccountSection />
      <CoinCardsWrapper />
      <BlocksContainer />
      <RegistrationSection />
      <CarouselComponent />
      <InfoSection />
    </body>
    <footer class="footer">
      <div class="top-footer">
        <div class="top-footer-left">
          <div class="metaquotes-icon"></div>
          <div class="verisign-icon"></div>
          <div class="unicef-icon"></div>
          <div class="investors-icon"></div>
        </div>
        <div class="top-footer-right"><span>Follow us on</span><socialMediaIcons /></div>
      </div>
      <div class="footer-line"></div>
      <div class="bottom-footer">
        <div class="footer-text">Privary Policy | Cookie Policy | Terms and Conditions</div>
        <div class="trading-point-icon"></div>
      </div>
    </footer>
  </main>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;
}

.header-button {
  background: none;
  border: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
}

.header-buttons button {
  cursor: pointer;
}

.header-buttons {
  display: none;
}

.header {
  display: flex;
  justify-content: center;
  height: 95px;
  background-color: #000000;
  align-items: center;
}

.footer {
  background-color: black;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.top-footer-right {
  display: none;
}

.footer-text {
  color: #888;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 17.143px;
}

.bottom-footer {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
}

.trading-point-icon {
  width: 182px;
  height: 57.753px;
  background-image: url('@/assets/trading-point.png');
  background-repeat: no-repeat;
  background-size: cover;
}

/* On tablet */
@media (min-width: 768px) and (max-width: 1199px) {
  .app-wrapper {
    padding-top: 20px;
  }

  .footer {
    height: 164px;
  }

  .bottom-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
  }
}

/* On desktop */
@media (min-width: 1200px) {
  .top-footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .bottom-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .top-footer-left {
    display: flex;
    margin-bottom: 40px;
    justify-content: center;
    align-items: center;
    gap: 58px;
  }

  .top-footer-right {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .top-footer-right span {
    color: #888;
    font-family: 'Roboto', 'sans-serif';
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 17.143px;
  }

  .metaquotes-icon {
    width: 136px;
    height: 25px;
    background-image: url('@/assets/metaquotes.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .unicef-icon {
    width: 110px;
    height: 38.5px;
    background-image: url('@/assets/unicef.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .verisign-icon {
    width: 131px;
    height: 38px;
    background-image: url('@/assets/verisign.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .investors-icon {
    width: 195px;
    height: 37px;
    background-image: url('@/assets/investors.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .header {
    justify-content: space-between;
    padding-left: 29px;
    padding-right: 54px;
  }

  .header-buttons {
    display: flex;
    gap: 10px;
  }

  .footer {
    padding-left: 30px;
    padding-right: 30px;
    height: 256px;
  }

  .footer-line {
    margin-left: 30px;
    margin-right: 30px;
    width: 100%;
    height: 0.963px;
    background-color: #444;
    margin-bottom: 15px;
  }
}
</style>
