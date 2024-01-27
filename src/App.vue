<script setup>
import RegistrationSection from './components/registration-form/RegistrationSection.vue'
import CoinCardsWrapper from './components/coin-section/CoinCardsWrapper.vue'
import BlocksContainer from './components/blocks-section/BlocksContainer.vue'
</script>

<template>
  <main>
    <body class="app-wrapper">
      <BlocksContainer />
      <CoinCardsWrapper />
      <RegistrationSection />
    </body>
  </main>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 90px;
  padding: 70px;
}

@media (min-width: 769px) {
  .app-wrapper {
    gap: 90px;
    padding: 20px;
  }
}
</style>
