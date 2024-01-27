<template>
  <div class="coin-card">
    <div class="coin-card-header">
      <div class="coin-card-header-icon">{{ coinName }}</div>
      <div class="coin-card-header-text">{{ coinText }}</div>
      <div class="coin-card-header-badge">{{ coinBadge }}</div>
    </div>
    <div class="inner-block"></div>
    <div class="coin-card-footer">
      <div class="coin-card-footer-text">{{ coinValue }}</div>
      <div class="coin-card-footer-icon">{{ coinPercent }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinCard',
  props: {
    coinName: String
  }
}
</script>

<style scoped>
.coin-card {
  width: 204px;
  height: 150px;
  border-radius: 14.309px;
  border: 0.954px solid rgba(167, 167, 167, 0.2);
  background: rgba(140, 140, 140, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner-block {
  margin: 67px 13px 81px 14px;
  width: 177px;
  height: 2px;
  opacity: 0.15;
  background: #fff;
}
</style>
